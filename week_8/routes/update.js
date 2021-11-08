import express from"express"; // express module을 "express"란 이름으로 선언.
import {selectSql, updateSql} from "../database/sql"; // selectSql, updateSql 모듈을 "../database/sql"에서 불러옴.

const router = express.Router(); // express모듈의 Router기능을 router의 이름으로 사용.

// '/employee'는 /update/employee를 의미.
router.get('/employee', async(req, res)=>{
    const emp_res = await selectSql.getEmployee(); //selectSql.getEmployee()함수를 호출하여 emp_res에 저장.
    res.render('updateEmployee', {
        title:"직원 테이블 갱신",
        emp_res
    });  //updateEmployee.hbs file에 기반하여 web에 render
});

// '/department'는 /update/department를 의미.
router.get('/department', async(req, res)=>{
    const dept_res = await selectSql.getDepartment(); //selectSql.getDepartment()함수를 호출하여 emp_res에 저장.
    res.render('updateDepartment', {
        title:"부서 테이블 갱신",
        dept_res
    })  //updateDepartment.hbs file에 기반하여 web에 render
});

// '/employee'는 /update/employee를 의미.
// updateEmployee.hbs에서 post로 넘어온 값을 처리.
router.post('/employee', async(req,res) =>{
    const vars = req.body; // req로 받은 data를 변수 vars에 저장.
    console.log(vars.salary);

    const data = {
        Salary: vars.salary
    } //넘어온 employee data중 salary data를 data.Salary에 입력.
    await updateSql.updateEmployee(data); // 정보가 담긴 data변수를 updateSql 모듈의 updateEmployee에 넘겨줌.

    res.redirect('/select'); // 입력한 후 "localhost:3000/select" 페이지로 다시 이동.
});

// '/department'는 /update/department를 의미.
// updateDepartment.hbs에서 post로 넘어온 값을 처리.
router.post('/department', async(req,res) =>{
    const vars = req.body; // req로 받은 data를 변수 vars에 저장.
    console.log(vars.dname);

    const data = {
        Dname: vars.dname
    } //넘어온 department data중 dname data를 data.Dname에 입력.
    await updateSql.updateDepartment(data); // 정보가 담긴 data변수를 updateSql 모듈의 updateDepartment에 넘겨줌.

    res.redirect('/select'); // 입력한 후 "localhost:3000/select" 페이지로 다시 이동.
});

module.exports = router;