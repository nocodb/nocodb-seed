(async () => {
    const app = require('express')();
    const {Noco} = require("nocodb");
    app.use(await Noco.init({}));
    app.listen(process.env.PORT);
    console.log(`Visit : localhost:${process.env.PORT}/dashboard`)
})()
