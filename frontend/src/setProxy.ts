import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';
import { Express } from 'express';

module.exports = function(app: Express) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        }) as RequestHandler
    );
};
