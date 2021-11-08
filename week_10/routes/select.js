import express from "express"; // express module을 "express"란 이름으로 선언.
import {selectSql} from "../database/sql"; // selectSql 모듈을 "../database/sql"에서 불러옴.

const router = express.Router(); // express모듈의 Router기능을 router의 이름으로 사용.

// '/'는 /select를 의미.
router.get('/', async function(req,res){
    const department = await selectSql.getDepartment(); //selectSql.getDepartment()함수를 호출하여 department에 저장.
    const project = await selectSql.getProject(); //selectSql.getProject()함수를 호출하여 project에 저장.
    //select.hbs file에 기반하여 web에 render
    res.render( 'select', {
        title: 'IT 공대',
        title2: 'IT 공대 Project',
        department,
        project
    });
});

module.exports = router;