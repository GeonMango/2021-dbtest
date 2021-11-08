import mysql from "mysql2"; // mysql2 module을 mysql이라는 이름으로 사용.

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'qkrrjs885134!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    } //database 연동을 위한 정보. 
);

// async / await 사용
const promisePool = pool.promise();

// select query
// 외부에서 selectSql을 사용하기 위해 export로 선언.
export const selectSql = {
    getUsers : async()=>{
        const[rows] = await promisePool.query(`select * from user`); // getUsers가 불려졌을 때의 query문
        
        return rows
    },
    getDepartment : async()=>{
        const[rows] = await promisePool.query(`select * from department`); // getDepartment가 불려졌을 때의 query문

        return rows
    },
    getProject : async()=>{
        const[rows] = await promisePool.query(`select * from project`); // getProject가 불려졌을 때의 query문

        return rows
    },
}

// delete query
// 외부에서 deleteSql을 사용하기 위해 export로 선언.
export const deleteSql = {
    deleteDepartment : async(data)=>{
        console.log('deleteSql.deleteDepartment:', data.Dnumber);
        const sql = `delete from department where Dnumber = "${data.Dnumber}"`;
        // delete.js에서 호출할 때 넘겨준 data 변수의 요소들을 이용하여 deleteDepartment에 대한 delete query문 작성.
        // delete.js에서 넘어온 data의 Dnumber 값과 동일한 data를 삭제.
        await promisePool.query(sql);
    },

    deleteProject : async(data)=>{
        const sql = `delete from project where Pnumber = "${data.Pnumber}"`;
        // delete.js에서 호출할 때 넘겨준 data 변수의 요소들을 이용하여 deleteProject에 대한 delete query문 작성.
        // delete.js에서 넘어온 data의 Pnumber 값과 동일한 data를 table에서 삭제.
        await promisePool.query(sql);
    },
}