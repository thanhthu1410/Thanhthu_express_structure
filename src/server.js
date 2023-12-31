// kich hoat env
import dotenv from 'dotenv';
dotenv.config();
// tao server
import express from  'express';
const server = express();
import {mysqlConnect} from './databases/mySQL'
mysqlConnect()
server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`);
})