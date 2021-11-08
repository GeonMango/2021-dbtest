// 사용하는 module들(express, morgan, path)을 
// 각각 (express, logger, path)라는 이름으로 선언.
import express from "express";
import logger from "morgan";
import path from "path"; // 경로 설정 module
 // user가 만든 기능들을 (loginRouter, selectRouter, deleteRouter)라는 이름으로 불러옴.
import loginRouter from "../routes/login"; // 현재 폴더를 기준으로 상위폴더에 있는 routes폴더 내에 login으로부터
import selectRouter from "../routes/select"; // 현재 폴더를 기준으로 상위폴더에 있는 routes폴더 내에 select으로부터
import deleteRouter from "../routes/delete"; // 현재 폴더를 기준으로 상위폴더에 있는 routes폴더 내에 delete으로부터

const PORT = 3000; //사용할 PORT number

const app = express(); // http 기능을 사용해서 server를 자동으로 연결해주는 express 기능을 사용.

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', loginRouter); // localhost:3000 에서 사용할 router
app.use('/select', selectRouter); // localhost:3000/select 에서 사용할 router
app.use('/delete', deleteRouter); // localhost:3000/delete 에서 사용할 router

    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
    })