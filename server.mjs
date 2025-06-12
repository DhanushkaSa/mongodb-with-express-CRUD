import express from 'express';
import "dotenv/config";
import dbconnect from './src/db/config.mjs';
import rootRouter from './src/routes/index.mjs';


const server = express();

console.log(process.env.MONGO_URL);
server.use(express.json());

server.use("/api/v1/", rootRouter);

dbconnect.then(() => {
    console.log('db connected');

    server.listen(process.env.PORT || 4000, () => console.log(`server running... ${process.env.PORT || 4000}`));
}).catch((e) => { console.log(e) })


