import * as Types from 'types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const ListCampaignsDocument: DocumentNode<ListCampaigns, ListCampaignsVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListCampaigns"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"org"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"org"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"org"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaigns"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"externalId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"org"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]}]}}]}}]}}]}}]};
export const GetCampaignDocument: DocumentNode<GetCampaign, GetCampaignVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCampaign"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"org"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"org"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"org"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaign"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"externalId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"stats"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supporterCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"actionCount"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]};
export const GetActionPageDocument: DocumentNode<GetActionPage, GetActionPageVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActionPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"org"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"org"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"org"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"extraSupporters"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thankYouTemplateRef"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"journey"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"config"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"campaign"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"externalId"},"arguments":[],"directives":[]}]}}]}}]}}]}}]};
export const ListActionPagesDocument: DocumentNode<ListActionPages, ListActionPagesVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListActionPages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"org"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"org"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"org"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionPages"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"extraSupporters"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"campaign"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"externalId"},"arguments":[],"directives":[]}]}}]}}]}}]}}]};
export const ExportCampaignActionsDocument: DocumentNode<ExportCampaignActions, ExportCampaignActionsVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExportCampaignActions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"org"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exportActions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"org"}}},{"kind":"Argument","name":{"kind":"Name","value":"campaignId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}}},{"kind":"Argument","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"actionType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"contact"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactRef"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payload"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nonce"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"publicKey"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"public"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"signKey"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"public"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"tracking"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"source"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"medium"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"campaign"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"actionPage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"privacy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"optIn"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const ExportOrgActionsDocument: DocumentNode<ExportOrgActions, ExportOrgActionsVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExportOrgActions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"org"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exportActions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"org"}}},{"kind":"Argument","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"actionType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"contact"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactRef"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"payload"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nonce"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"publicKey"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"public"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"signKey"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"public"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"tracking"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"source"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"medium"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"campaign"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"actionPage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"privacy"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"optIn"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const UpdateActionPageDocument: DocumentNode<UpdateActionPage, UpdateActionPageVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateActionPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thankYouTemplateRef"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"extraSupporters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"config"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateActionPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"thankYouTemplateRef"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thankYouTemplateRef"}}},{"kind":"Argument","name":{"kind":"Name","value":"extraSupporters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"extraSupporters"}}},{"kind":"Argument","name":{"kind":"Name","value":"config"},"value":{"kind":"Variable","name":{"kind":"Name","value":"config"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]};
export const UpsertCampaignDocument: DocumentNode<UpsertCampaign, UpsertCampaignVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertCampaign"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"org"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"actionPages"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActionPageInput"}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCampaign"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"org"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"externalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"actionPages"},"value":{"kind":"Variable","name":{"kind":"Name","value":"actionPages"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]};
export const ListKeysDocument: DocumentNode<ListKeys, ListKeysVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListKeys"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orgName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"org"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgName"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"keys"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"public"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"expiredAt"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const ActionPageUpsertedDocument: DocumentNode<ActionPageUpserted, ActionPageUpsertedVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ActionPageUpserted"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orgName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionPageUpserted"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orgName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orgName"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]};
export type ListCampaignsVariables = Types.Exact<{
  org: Types.Scalars['String'];
}>;


export type ListCampaigns = (
  { __typename?: 'RootQueryType' }
  & { org?: Types.Maybe<(
    { __typename?: 'Org' }
    & { campaigns?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Campaign' }
      & Pick<Types.Campaign, 'id' | 'externalId' | 'name' | 'title'>
      & { org?: Types.Maybe<(
        { __typename?: 'PublicOrg' }
        & Pick<Types.PublicOrg, 'name' | 'title'>
      )> }
    )>>> }
  )> }
);

export type GetCampaignVariables = Types.Exact<{
  org: Types.Scalars['String'];
  id: Types.Scalars['Int'];
}>;


export type GetCampaign = (
  { __typename?: 'RootQueryType' }
  & { org?: Types.Maybe<(
    { __typename?: 'Org' }
    & { campaign?: Types.Maybe<(
      { __typename?: 'Campaign' }
      & Pick<Types.Campaign, 'id' | 'externalId' | 'name' | 'title'>
      & { stats?: Types.Maybe<(
        { __typename?: 'CampaignStats' }
        & Pick<Types.CampaignStats, 'supporterCount'>
        & { actionCount?: Types.Maybe<Array<(
          { __typename?: 'ActionTypeCount' }
          & Pick<Types.ActionTypeCount, 'actionType' | 'count'>
        )>> }
      )> }
    )> }
  )> }
);

export type GetActionPageVariables = Types.Exact<{
  org: Types.Scalars['String'];
  id: Types.Scalars['Int'];
}>;


export type GetActionPage = (
  { __typename?: 'RootQueryType' }
  & { org?: Types.Maybe<(
    { __typename?: 'Org' }
    & { actionPage?: Types.Maybe<(
      { __typename?: 'ActionPage' }
      & Pick<Types.ActionPage, 'id' | 'name' | 'locale' | 'extraSupporters' | 'thankYouTemplateRef' | 'journey' | 'config'>
      & { campaign?: Types.Maybe<(
        { __typename?: 'Campaign' }
        & Pick<Types.Campaign, 'name' | 'id' | 'externalId'>
      )> }
    )> }
  )> }
);

export type ListActionPagesVariables = Types.Exact<{
  org: Types.Scalars['String'];
}>;


export type ListActionPages = (
  { __typename?: 'RootQueryType' }
  & { org?: Types.Maybe<(
    { __typename?: 'Org' }
    & { actionPages?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'ActionPage' }
      & Pick<Types.ActionPage, 'id' | 'name' | 'locale' | 'extraSupporters'>
      & { campaign?: Types.Maybe<(
        { __typename?: 'Campaign' }
        & Pick<Types.Campaign, 'name' | 'id' | 'externalId'>
      )> }
    )>>> }
  )> }
);

export type ExportCampaignActionsVariables = Types.Exact<{
  org: Types.Scalars['String'];
  campaignId: Types.Scalars['Int'];
  start?: Types.Maybe<Types.Scalars['Int']>;
  after?: Types.Maybe<Types.Scalars['Datetime']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type ExportCampaignActions = (
  { __typename?: 'RootQueryType' }
  & { exportActions?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Action' }
    & Pick<Types.Action, 'actionId' | 'actionType'>
    & { contact: (
      { __typename?: 'Contact' }
      & Pick<Types.Contact, 'contactRef' | 'payload' | 'nonce'>
      & { publicKey?: Types.Maybe<(
        { __typename?: 'Key' }
        & Pick<Types.Key, 'id' | 'public'>
      )>, signKey?: Types.Maybe<(
        { __typename?: 'Key' }
        & Pick<Types.Key, 'id' | 'public'>
      )> }
    ), fields: Array<(
      { __typename?: 'CustomField' }
      & Pick<Types.CustomField, 'key' | 'value'>
    )>, tracking?: Types.Maybe<(
      { __typename?: 'Tracking' }
      & Pick<Types.Tracking, 'source' | 'medium' | 'campaign' | 'content'>
    )>, actionPage: (
      { __typename?: 'SimpleActionPage' }
      & Pick<Types.SimpleActionPage, 'id' | 'name'>
    ), privacy: (
      { __typename?: 'Consent' }
      & Pick<Types.Consent, 'optIn'>
    ) }
  )>>> }
);

export type ExportOrgActionsVariables = Types.Exact<{
  org: Types.Scalars['String'];
  start?: Types.Maybe<Types.Scalars['Int']>;
  after?: Types.Maybe<Types.Scalars['Datetime']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type ExportOrgActions = (
  { __typename?: 'RootQueryType' }
  & { exportActions?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Action' }
    & Pick<Types.Action, 'actionId' | 'actionType'>
    & { contact: (
      { __typename?: 'Contact' }
      & Pick<Types.Contact, 'contactRef' | 'payload' | 'nonce'>
      & { publicKey?: Types.Maybe<(
        { __typename?: 'Key' }
        & Pick<Types.Key, 'id' | 'public'>
      )>, signKey?: Types.Maybe<(
        { __typename?: 'Key' }
        & Pick<Types.Key, 'id' | 'public'>
      )> }
    ), fields: Array<(
      { __typename?: 'CustomField' }
      & Pick<Types.CustomField, 'key' | 'value'>
    )>, tracking?: Types.Maybe<(
      { __typename?: 'Tracking' }
      & Pick<Types.Tracking, 'source' | 'medium' | 'campaign' | 'content'>
    )>, actionPage: (
      { __typename?: 'SimpleActionPage' }
      & Pick<Types.SimpleActionPage, 'id' | 'name'>
    ), privacy: (
      { __typename?: 'Consent' }
      & Pick<Types.Consent, 'optIn'>
    ) }
  )>>> }
);

export type UpdateActionPageVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  name?: Types.Maybe<Types.Scalars['String']>;
  locale?: Types.Maybe<Types.Scalars['String']>;
  thankYouTemplateRef?: Types.Maybe<Types.Scalars['String']>;
  extraSupporters?: Types.Maybe<Types.Scalars['Int']>;
  config?: Types.Maybe<Types.Scalars['String']>;
}>;


export type UpdateActionPage = (
  { __typename?: 'RootMutationType' }
  & { updateActionPage?: Types.Maybe<(
    { __typename?: 'ActionPage' }
    & Pick<Types.ActionPage, 'id'>
  )> }
);

export type UpsertCampaignVariables = Types.Exact<{
  org: Types.Scalars['String'];
  name: Types.Scalars['String'];
  externalId?: Types.Maybe<Types.Scalars['Int']>;
  title?: Types.Maybe<Types.Scalars['String']>;
  actionPages: Array<Types.Maybe<Types.ActionPageInput>>;
}>;


export type UpsertCampaign = (
  { __typename?: 'RootMutationType' }
  & { upsertCampaign?: Types.Maybe<(
    { __typename?: 'Campaign' }
    & Pick<Types.Campaign, 'id'>
  )> }
);

export type ListKeysVariables = Types.Exact<{
  orgName: Types.Scalars['String'];
}>;


export type ListKeys = (
  { __typename?: 'RootQueryType' }
  & { org?: Types.Maybe<(
    { __typename?: 'Org' }
    & { keys: Array<(
      { __typename?: 'Key' }
      & Pick<Types.Key, 'id' | 'name' | 'public' | 'expiredAt'>
    )> }
  )> }
);

export type ActionPageUpsertedVariables = Types.Exact<{
  orgName?: Types.Maybe<Types.Scalars['String']>;
}>;


export type ActionPageUpserted = (
  { __typename?: 'RootSubscriptionType' }
  & { actionPageUpserted?: Types.Maybe<(
    { __typename?: 'PublicActionPage' }
    & Pick<Types.PublicActionPage, 'id' | 'name'>
  )> }
);
