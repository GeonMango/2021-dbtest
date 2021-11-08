import express from"express"; // express module을 "express"란 이름으로 선언.
import {selectSql, deleteSql} from "../database/sql"; // selectSql, updateSql 모듈을 "../database/sql"에서 불러옴.

const router = express.Router(); // express모듈의 Router기능을 router의 이름으로 사용.

router.get('/', async (req, res)=>{
    const department = await selectSql.getDepartment(); //selectSql.getDepartment()함수를 호출하여 department에 저장.
    const project = await selectSql.getProject(); //selectSql.getProject()함수를 호출하여 project에 저장.
    //delete.hbs file에 기반하여 web에 render
    res.render('delete', {
        title:"삭제 기능(Department 테이블)",
        title2:"삭제 기능(Project 테이블)",
        department,
        project
    })
});

/* department table의 삭제 기능에 관한 code.
router.post('/', async (req,res) =>{
    console.log('값 : ', req.body.delBtn, req.body.prolBtn);
    const data = {
        Dnumber : req.body.delBtn,
    } //넘어온 delBtn data를 data.Dnumber에 입력.
    
    await deleteSql.deleteDepartment(data); // 정보가 담긴 data변수를 deleteSql 모듈의 deleteDepartment에 넘겨줌.

    res.redirect('/delete'); // 입력한 후 "localhost:3000/delete" 페이지로 다시 이동.
});
*/

// delete.hbs에서 post로 넘어온 값을 처리.
// project table의 삭제 기능에 관한 code.
router.post('/', async (req,res) =>{
    const data = {
        Pnumber: req.body.prolBtn
    } //넘어온 prolBtn data를 data.Pnumber에 입력.
    
    await deleteSql.deleteProject(data); // 정보가 담긴 data변수를 deleteSql 모듈의 deleteProject에 넘겨줌.

    res.redirect('/delete'); // 입력한 후 "localhost:3000/delete" 페이지로 다시 이동.
});

module.exports = router;