function getIdPw() {
var id = prompt('ID 입력', '');
var password = prompt(id + '가 사용할 초기 비번 입력');
localStorage.setItem('id', id);
localStorage.setItem('password', password);
}

function login() {
    localStorage.setItem('password', password);
    var repassword = prompt(id + '의 비밀번호');
    if(repassword == password) {
        alert('로그인 성공');
        var headding = document.querySelector('h1');
        headding.innerHTML = id +'Homepage'
    } 
    else {
        alert('패스워드가 맞지 않음');
        //var password = prompt(id + '의 비밀번호');
    }
}

var password = localStorage.getItem('password');
if(!password){
getIdPw();
}

document.querySelector('button').onclick = function() {
    login();
}
var id = localStorage.getItem('id');
var headding = document.querySelector('h1');
headding.innerHTML = id +'Homepage'

