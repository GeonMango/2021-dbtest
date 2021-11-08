import express from "express"; // express module을 "express"란 이름으로 선언.
import { selectSql } from "../database/sql"; // selectSql 모듈을 "../database/sql"에서 불러옴.

const router = express.Router(); // express모듈의 Router기능을 router의 이름으로 사용.

router.get('/', (req, res) =>{
    res.render('login'); // views에서 login.hbs file을 찾아서 web에 render.
});

// login.hbs에서 post로 넘어온 값을 처리.
router.post('/', async (req, res) =>{
    const vars = req.body; // req로 받은 data를 변수 vars에 저장. 
    const users = await selectSql.getUsers(); //database에 있는 user정보를 users 변수에 입력.
    let whoAmI = '' // 값을 바꿀 수 있는 변수 whoAmI 선언.
    let checkLogin = false;
    /* map함수를 이용하지 않을 때의 checking 방법.
    //for(let i=0; i<users.length; i++){
    //    if(vars.id===user[i].id && vars.password===user[i].password){
    //        ;
    //    }
    //}
    */
    users.map((user) =>{
        // 만약 입력받은 id와 password가 database의 user table에 있는 Id, Password와 일치한다면,
        if (vars.id === user.Id && vars.password === user.Password){ // database에서 불러오는 값은 field name과 대소문자까지 동일하게 해야함.(users.Id, users.Password)
            checkLogin = true; // checkLogin값을 true로 변경.
            // 만약 입력받은 id가 admin이라면,
            if (vars.id === 'admin'){
                whoAmI = 'admin'; // whoAmI 값을 admin 으로 변경.
            } else {
                whoAmI = 'users'; // id가 admin이 아니라면 whoAmI값을 users로 변경.
            }
        }
    })
    
    console.log('whoAmI:', whoAmI);

    // 만약 checkLogin값이 true이고 whoAmI 값이 admin이라면,
    if(checkLogin && whoAmI === 'admin'){
        res.redirect('/delete'); //localhost:3000/delete로 이동.
    } else if (checkLogin && whoAmI === 'users'){ // 만약 checkLogin값이 true이고 whoAmI 값이 users라면,
        res.redirect('/select'); //localhost:3000/select로 이동.
    } else { // 만약 checkLogin값이 false이면,
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>") // 로그인에 실패했다는 메시지창 출력.
    }

})

module.exports = router;