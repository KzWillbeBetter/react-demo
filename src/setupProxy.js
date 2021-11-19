
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/api", createProxyMiddleware({
        target: "http://localhost:5000",
        changeOrigin: true, //允许跨域
    }))
};
