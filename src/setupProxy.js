const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/api", createProxyMiddleware({
        target: 'http://localhost:5000',  // 请求转发给谁
        changeOrigin: true,  // 默认值 false  控制服务器收到的响应头中host字段的值 加上req.HOST值localhost:5001 不加是localhost:3000  最好加上
        pathRewrite: {'^/api': ''}  // 重写请求路径 不加是 /api1/students 加上是 /students
    }))
};
