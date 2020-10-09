/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 22:41:57 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

import { setContext } from "apollo-link-context";

// backend api http link
const http = new HttpLink({ uri: "/api" });

// delay
const delay = setContext(
  (request) =>
    new Promise((success, fail) => {
      setTimeout(() => {
        success();
      }, 800);
    })
);

// apollo link
const link = ApolloLink.from([delay, http]);

// cache
const cache = new InMemoryCache();

// client
const client = new ApolloClient({
  link,
  cache,
});

export default client;
