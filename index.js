const {XcApis} = require("xc-instant");
require('dotenv').config();
const app = require('express')();

(async () => {
  app.use(await (new XcApis()).init());
  app.listen(process.env.PORT || 8080);
  console.log(`App started successfully.\nVisit -> http://localhost:${process.env.PORT || 8080}/xc`);
})().catch(e => console.log(e))

module.exports = app;