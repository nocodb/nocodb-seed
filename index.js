(async () => {
    const app = require('express')();
    const {Noco} = require("nocodb");
    app.use(await Noco.init({}));
    console.log(`Visit : localhost:${process.env.PORT}/dashboard`)    
    app.listen(process.env.PORT);
})()
