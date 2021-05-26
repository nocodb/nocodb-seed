(async () => {
    const app = require('express')();
    const {Noco} = require("nocodb");
    app.use(await Noco.init({}));
    app.listen(process.env.PORT);
    console.log(`Successfully started at localhost:${process.env.PORT}`)
})()
