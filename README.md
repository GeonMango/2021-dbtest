# 2021-dbtest
- 데이터베이스 설계

<br><br>

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:GeonMango/2021-02-DATABASE.git
    - (token을 사용하는 경우) git clone https://github.com/GeonMango/2021-02-DATABASE.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: 'tutorial', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>
<br>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능학과|인공지능|12181111|

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.

<br><br>

## 3주차 실습 Database table

<span style="color:green">**strudent table**</span>

num|name|grade|major|admission_date|admission_time|email
---|---|---|---|---|---|---|
12123456|김철수|4|정보통신공학과|Thu Mar 01 2012|00:00:00|철수@gamil.com|
12173478|김인하|3|정보통신공학과|Thu Mar 01 2017|00:00:00|인하@gamil.com|
12187865|이영희|2|정보통신공학과|Thu Mar 01 2012|00:00:00|영희@gamil.com|
12206545|김디비|2|정보통신공학과|Thu Mar 01 2012|00:00:00|디비@gamil.com|
12211234|홍길동|1|정보통신공학과|Thu Mar 01 2012|00:00:00|길동@gamil.com|

1. student Table 설명
    - 학생의 [ 학번, 이름, 학년, 전공, 입학날짜, 입학시간, email ] data가 입력되어있는 table.
2. 실습내용
    > web에 mysql을 연동시켜 mysql database에 생성한 table data를 web 페이지에 업로드.

<br><br>

## 8주차 실습 Database table

<span style="color:green">**employee table**</span>

Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
---|---|---|---|---|---|---|---|---|---|
In|H|Kim|112233123|Wed Oct 23 1996 00:00:00 GMT +0900(대한민국 표준시)|Incheon|F|500| |1|
Soo|C|Choi|223344234|Wed Feb 17 1993 00:00:00 GMT +0900(대한민국 표준시)|Seoul|M|500| |2|
Hee|Y|Kim|334455345|Wed Feb 03 1993 00:00:00 GMT +0900(대한민국 표준시)|Busan|F|500| |3|
Min|J|Park|667788678|Sun Apr 18 1999 00:00:00 GMT +0900(대한민국 표준시)|Incheon|M|400|112233123|1|
Soo|H|Park|778899789|Fri May 28 1993 00:00:00 GMT +0900(대한민국 표준시)|Seoul|F|400|223344234|2|

<span style="color:green">**department table**</span>

Dname|Dnumber|Mgr_ssn|Mgr_start_date
---|---|---|---|
R&D|1|112233123|Mon Jan 08 2018 00:00:00 GMT +0900(대한민국 표준시)|
Planning|2|223344234|Mon Jan 08 2018 00:00:00 GMT +0900(대한민국 표준시)|
Purchasing|3|334455345|Mon Jan 08 2018 00:00:00 GMT +0900(대한민국 표준시)|

1. employ Table 설명
    - 직원의 [ First name, Middel name initial, Last name, 사번 ,생년월일, 거주지, 성별, 급여, 관리자 사번, 부서번호 ] data가 입력되어있는 table.
    - PK는 Ssn.
2. department table 설명
    - 부서의 [ 부서명, 부서번호, 관리자 사번, 관리 시작일 ] data가 입력되어있는 table.
    - PK는 Dnumber.
    - Dname은 UNIQUE.
    - 관리자 사번(Mgr_ssn)은 employee table의 PK인 Ssn을 가리키는 FK.
3. 실습내용
    > - web에 mysql을 연동시켜 mysql database에 생성한 table data를 web 페이지에 업로드.
    <br>
    > - web에서 설정한 qeury문에 따라 table에 data 삽입 및 수정.

<br><br>

## 10주차 실습 Database table

<span style="color:green">**user table**</span>

Id|Password|Role
---|---|---|
admin|admin1234|admin|
test|test1234|users|

<span style="color:green">**department table**</span>

Dname|Dnumber
---|---|
정보통신공학과|0|
컴퓨터공학과|1|
전기공학과|2|
전자공학과|3|

<span style="color:green">**project table**</span>

Pname|Pnumber|Plocation
---|---|---|
정통졸업pro|1|하이테크관|
정통다학년pro|2|하이테크관|
컴공졸업pro|11|하이테크관|
전기졸업pro|21|하이테크관|
전자졸업pro|31|하이테크관|

1. user Table 설명
    - 회원의 [ 아이디, 비밀번호, 역할(권한) ] data가 입력되어있는 table.
    - PK는 Id.
2. department table 설명
    - 부서의 [ 부서명, 부서번호 ] data가 입력되어있는 table.
    - PK는 Dnumber.
    - Dname은 UNIQUE.
3. project table 설명
    - 프로젝트의 [ 프로젝트명, 프로젝트번호, 프로젝트 진행장소 ] data가 입력되어있는 table.
    - PK는 Pnumber.
    - Pname은 UNIQUE.
4. 실습내용
    > - web에 mysql을 연동시켜 mysql database에 생성한 table data를 web 페이지에 업로드.
    <br>
    > - web에서 설정한 qeury문에 따라 로그인 및 table data 출력, 삭제.
    <br>
    > - web에서 설정한 qeury문에 따라 로그인 페이지에서 user가 입력한 Id와 Password에 대한 유효성 검사 및 역할에 따라 설정한 페이지로 이동.
    <br>
    > - Role이 admin이면 project table의 data를 삭제할 수 있는 delete 페이지로, users이면 department와 project table에 있는 data를 볼 수 있는 select페이지로 이동