(async () => {
    const app = require('express')();
    const {Noco} = require("nocodb");
    app.use(await Noco.init({}, httpServer, app));
    const httpServer = app.listen(process.env.PORT || 8080);
    console.log(`Visit : localhost:${process.env.PORT}/dashboard`)
})()
