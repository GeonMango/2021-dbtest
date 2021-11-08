import mysql from "mysql2"; // mysql2 module을 mysql이라는 이름으로 사용.

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
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
    getEmployee : async()=>{
        const[rows] = await promisePool.query(`select * from employee`); // getEmployee가 불려졌을 때의 query문
        console.log(rows)
        return rows
    },
    getDepartment : async()=>{
        const[rows] = await promisePool.query(`select * from department`); // getDepartment가 불려졌을 때의 query문

        return rows
    },
}

// insert query
// 외부에서 insertSql을 사용하기 위해 export로 선언.
export const insertSql = {
    setEmployee : async(data)=>{
        const sql = `insert into employee values(
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}")`;
            // home.js에서 호출할 때 넘겨준 data 변수의 요소들을 이용하여 setEmployee에 대한 insert query문 작성
            await promisePool.query(sql);
    },
    setDepartment : async(data)=>{
        const sql = `insert into department values(
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}")`;
            // home.js에서 호출할 때 넘겨준 data 변수의 요소들을 이용하여 setDepartment에 대한 insert query문 작성
            await promisePool.query(sql);
    },
}

// update query
// 외부에서 updateSql을 사용하기 위해 export로 선언.
export const updateSql = {
    updateEmployee : async(data)=>{
        const sql = `update employee set salary = "${data.Salary}" where Minit = "H"`;
        // update.js에서 호출할 때 넘겨준 data 변수의 요소들을 이용하여 updateEmployee에 대한 update query문 작성
        // Minit = "H"인 data에 한해서 해당 data의 Salary를 user가 입력한 salary로 변경.
        await promisePool.query(sql);
    },
    updateDepartment : async(data)=>{
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
        // update.js에서 호출할 때 넘겨준 data 변수의 요소들을 이용하여 updateDepartment에 대한 update query문 작성
        // Dnumber = 1인 data에 한해서 해당 data의 Dname을 user가 입력한 dname으로 변경.
        await promisePool.query(sql);
    },
}