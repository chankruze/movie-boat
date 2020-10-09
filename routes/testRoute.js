/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 01:44:44 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

module.exports = (app) => {
  app.get(`/test`, async (req, res) => {
    // let match = await Match.findOne({ tourneyId: constants.TOURNEY_ID })
    // let match = await Match.findById('5f68812ec5d8c610936974eb')
    return res.status(200).send("Working !");
  });
};
