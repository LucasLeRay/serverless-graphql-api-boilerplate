export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  item?: Maybe<Item>;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem?: Maybe<Item>;
  updateItem?: Maybe<Item>;
  deleteItem?: Maybe<Item>;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationDeleteItemArgs = {
  input: DeleteItemInput;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
};

export type CreateItemInput = {
  content: Scalars['String'];
};

export type UpdateItemInput = {
  id: Scalars['ID'];
  content: Scalars['String'];
};

export type DeleteItemInput = {
  id: Scalars['ID'];
};
