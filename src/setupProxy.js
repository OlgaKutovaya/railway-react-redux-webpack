const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        proxy("/train_search", {
            target: "https://booking.uz.gov.ua/ru",
            changeOrigin: true
        })
    )
};