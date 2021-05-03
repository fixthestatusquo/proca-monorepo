import {queue, identity, loadConfig} from '@proca/cli'
import * as Sentry from '@sentry/node';
import {SQSEvent, Context} from 'aws-lambda';
type SQSHandlerPromise = (event:SQSEvent, context:Context) => Promise<void>;


const config = loadConfig()

Sentry.configureScope((scope) => {
  scope.setExtra("config", config)
})


function sentryHandler(lambdaHandler : SQSHandlerPromise)  {
  return async (event : SQSEvent, context : Context) => {
    try {
      return await lambdaHandler(event, context);
    } catch (error) {
      Sentry.captureException(error);
      await Sentry.flush(2000);
      throw error;
    }
  };
}

// Sync SQS event
async function syncEvent(event : SQSEvent, _context : Context) : Promise<void> {
  console.log('ENV', process.env)
  const sync_all = event.Records.map(async (record) => {
    let action = JSON.parse(record.body)

    if (!action.contact.pii)
      action = queue.decryptActionMessage(action, {}, config)

    const result = await identity.syncAction(action, {}, config)
    console.log("Identity addAction API result", result)

    if (result.ok !== true) {
      throw Error(`Result is not ok: ${JSON.stringify(result)}`)
    }

    result.body;
    return result
  })

  return Promise.all(sync_all).then(_a => {})
}



if (process.env.SENTRY_DSN) {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
  exports.handler = sentryHandler(syncEvent)
} else {
  exports.handler = syncEvent
}
