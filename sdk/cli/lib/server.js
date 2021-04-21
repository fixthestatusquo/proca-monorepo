const fetch = require("node-fetch");

async function graphQL (operation, query, options) {
  if (!options) options = {};
  if (!options.apiUrl) options.apiUrl = process.env.REACT_APP_API_URL || process.env.API_URL;

  let data = null;
  let headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
  };
  console.log(options);
  if (options.authorization) {
//    var auth = 'Basic ' + Buffer.from(options.authorization.username + ':' + options.authorization.username.password).toString('base64');
    headers.Authorization = 'Basic '+options.authorization;
    console.log(headers);
  }
  await fetch(process.env.REACT_APP_API_URL || process.env.API_URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query:query,
      variables: options.variables,
      operationName: operation || "missing"
    })
  })
  .then (res => {
    if (!res.ok) {
      return {errors:[{message:res.statusText,code: "http_error",status:res.status}]};
    }
    return res.json();
  }).then (response => {
    if (response.errors) {
      response.errors.forEach( (error) => console.log(error.message));
      return;
    }
    data = response.data;
  }).catch(error =>{
    console.log(error);
    return;
  });
  return data;
}

async function getCount(actionPage) {
  var query = 
`query getCount($actionPage: ID!)
{actionPage(id:$actionPage) {
  campaign {
    stats {
      signatureCount
    }
  }
}}
`;
 const data = await graphQL ("getCount",query,{variables:{ actionPage: Number(actionPage) }});
 if (!data) return null;
 return data.actionPage.campaign.stats.signatureCount;
}

async function getSignature(options) {
  var query = 
`query getSignatures($campaign: ID!,$organisation:String!,$limit: Int)
{
org(name: $organisation) {
  id, campaigns { id, name },
  signatures(campaign_id: $campaign, limit: $limit) {
    public_key, 
    list {
      id, created,
      contact, nonce     }
  }
}
}
`;
 const data = await graphQL ("getSignatures",query,{variables:{ campaign: Number(2), organisation:"tttp",limit:Number(3)}, authorization:options.authorization });
 if (!data) return null;
 return data;
}


async function addSignature(data) {
  var query = `
mutation push($action: SignatureExtraInput,
  $contact:ContactInput,
  $privacy:ConsentInput,
  $tracking:TrackingInput
){
  addSignature(actionPageId: 1, 
    action: $action,
    contact:$contact,
    privacy:$privacy,
    tracking:$tracking
  )}
`;

  let variables = {
    action: {
      comment: data.comment
    },
    contact: {
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email,
      address: {
        country: data.country || "",
        postcode: data.postcode || ""
      }
    },
    privacy: { optIn: data.privacy === "opt-in" }
  };
  if (Object.keys(data.tracking).length) {
    variables.tracking = data.tracking;
  }

 const data = await graphQL ("addSignature",query,{variables:variables});
 if (!data) return null;
 return data;
}

module.exports = {
  addSignature:addSignature,
  getSignature:getSignature,
  getCount:getCount
};
