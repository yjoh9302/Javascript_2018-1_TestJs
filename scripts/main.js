function getIdPw() {
var id = prompt('ID 입력', '');
var password = prompt(id + '가 사용할 초기 비번 입력');
localStorage.setItem('id', id);
localStorage.setItem('password', password);
}
function login() {
    var repassword = prompt(id + '의 비밀번호');
    if(repassword === password) {
        alert('로그인 성공');
        var headding = document.querySelector('h1');
        headding.innerHTML = id +'Homepage'
    } else {
        alert('패스워드가 맞지 않음');
        var repassword = prompt(id + '의 비밀번호');
        
    }
}
var password = localStorage.getItem('password');
if(!password){
getIdPw();
}
else {
    var PWchecking = prompt('패스워드 입력','');
    if(PWchecking === password) alert('로그인 성공');
    else {
        var PWchecking = prompt('패스워드 입력', '');
    }
}
document.querySelector('button').onclick = function() {
    login();
}
var id = localStorage.getItem('id');
var headding = document.querySelector('h1');
headding.innerHTML = id +'Homepage'

/*var myHeading = document.querySelector('h1');
var id =localStorage.getItem('id');
myHeading.innerHTML = id + 'Homepage'; 

function getIdPw(){
var id = prompt('ID 입력', '');
alert(id + '가 로그인 함');
localStorage.setItem('id', id);
var passwordSystem = '12345';
var password =prompt('PW 입력','');
if(password === passwordSystem) alert('정상 로그인');
else alert('비밀번호 오류');
}
//getIdPw();
//자바스트립트는 함수를 객체로 처리함
/*document.querySelector('h1').onclick = function() {
getIdPw();//만약 html 대신 h1이면 글씨를 클릭해야 로그인 창이 뜸
}*/

/*var myImg = document.querySelector('img');
myImg.onclick = function () {
    var src = myImg.getAttribute('src');
    if(src === 'images/firefox-icon.png')
    myImg.setAttribute('src', 'images/mokwon.png');
    else myImg.setAttribute('src', 'images/firefox-icon.png');
}

var myButton = document.querySelector('button');
myButton.onclick = function () {
getIdPw();
}*/