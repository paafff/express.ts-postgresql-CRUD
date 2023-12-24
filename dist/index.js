"use strict";
// // src/app.ts
// const dotenv = require('dotenv');
// dotenv.config();
// // const dotenv = require('dotenv');
// const express = require('express');
// const { Request, Response } = require('express');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.get('/', (req: Request, res: Response) => {
//   res.send('goodluck nang!');
// });
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`server jalan tuan, di port ${PORT}`);
// });
// const dotenv = require('dotenv');
// const express = require('express');
// const {
//   Request: ExpressRequest,
//   Response: ExpressResponse,
// } = require('express');
// dotenv.config();
// const app = express();
// app.get('/', (req /** @type {ExpressRequest} */, res /** @type {ExpressResponse} */) => {
//   res.send('goodluck nang!');
// });
// // app.get('/', (req: ExpressRequest, res: ExpressResponse) => {
// //   res.send('goodluck nang!');
// // });
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`server jalan tuan, di port ${PORT}`);
// });
// const dotenv = require('dotenv');
// const express = require('express');
// const { Request: ExpressRequest, Response: ExpressResponse } = require('express');
// dotenv.config();
// const app = express();
// app.get('/', (req /** @type {ExpressRequest} */, res /** @type {ExpressResponse} */) => {
//   res.send('goodluck nang!');
// });
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`server jalan tuan, di port ${PORT}`);
// });
// src/app.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('goodluck nang!');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server jalan tuan, di port ${PORT}`);
});
