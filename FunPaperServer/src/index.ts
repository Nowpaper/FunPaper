import express, { Request, Response } from 'express';
const app = express();

import fs from "fs"; //引入fs，fs 是node中一个文件操作模块，包括文件创建，删除，查询，读取，写入。

app.use('/public', express.static('public')); // 设置静态文件的中间件

const {
    PORT = 3000,
} = process.env;

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'hello, world',
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`server started at http://localhost:${PORT}`);
    });
}

export default app;