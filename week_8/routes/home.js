import express from "express"; // express module을 "express"란 이름으로 선언.
import { insertSql, selectSql } from "../database/sql"; // insertSql 모듈과 selectSql 모듈을 "../database/sql"에서 불러옴.
const router = express.Router(); // express모듈의 Router기능을 router의 이름으로 사용.
router.get('/', (req, res) =>{
    res.render('home'); // views에서 home.hbs file을 찾아서 web에 render.
});

// home.hbs에서 post로 넘어온 값을 처리.
router.post('/', (req, res) =>{
    const vars = req.body; // req로 받은 data를 변수 vars에 저장. 
    const var_lenth = Object.keys(req.body).length; // 정보의 개수로 employee 정보와 department 정보를 구분하기 위해 선언한 변수 
    
    if(var_lenth > 4){ // 넘어온 정보의 개수가 4개보다 많으면
        const data = {
            Fname:vars.fname,
            Minit:vars.minit,
            Lname:vars.lname,
            Ssn:vars.ssn,
            Bdate:vars.bdate,
            Address:vars.address,
            Sex:vars.sex,
            Salary:vars.salary,
            Super_ssn:vars.super_ssn,
            Dno: vars.dno
        }; // 각각에 맞는 employee data를 matching

        insertSql.setEmployee(data); // 정보가 담긴 data변수를 insertSql 모듈의 setEmployee에 넘겨줌.
    } else{
        const data = { // 넘어온 정보의 개수가 4개보다 작거나 같으면
            Dname: vars.dname,
            Dnumber:vars.dnumber,
            Mgr_ssn:vars.mgr_ssn,
            Mgr_start_date:vars.mgr_start_date
        }; // 각각에 맞는 department data를 matching

        insertSql.setDepartment(data); // 정보가 담긴 data변수를 insertSql 모듈의 setDepartment에 넘겨줌.
    }

    res.redirect('/'); // 입력한 후 home화면으로 다시 이동.
})

module.exports = router;