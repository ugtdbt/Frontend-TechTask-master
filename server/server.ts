import { createProxyMiddleware } from 'http-proxy-middleware';
import express, { Application } from 'express';
import apicache from 'apicache'

const app: Application = express();

const proxy = createProxyMiddleware({
  target: 'https://www.home24.de',
  changeOrigin: true,
  logLevel: 'debug',
});

app.post('/graphql', proxy);
app.listen(3001);
