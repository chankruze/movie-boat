/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 10 2020 14:53:59 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} = require("graphql");

const ParentalGuideType = new GraphQLObjectType({
  name: "ParentalGuide",
  fields: () => ({
    type: { type: GraphQLString },
    parental_guide_text: { type: GraphQLString },
  }),
});

const ParentalGuideListType = new GraphQLObjectType({
  name: "ParentalGuideList",
  fields: () => ({
    parental_guide_count: { type: GraphQLInt },
    parental_guides: { type: GraphQLList(ParentalGuideType) },
  }),
});

module.exports = ParentalGuideListType;
