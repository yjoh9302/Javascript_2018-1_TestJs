function getIdPw() {
var id = prompt('ID 입력', '');
var password = prompt(id + '가 사용할 초기 비번 입력');
localStorage.setItem('id', id);
localStorage.setItem('password', password);
}

getIdPw();

var id = localStorage.getItem('id');
var headding = document.querySelector('h1');
headding.innerHTML = id +'Homepage'

var loginBtn = document.querySelector('button');
loginBtn.onclick = function() {
    
    var repassword = prompt(localStorage.getItem('id') + '의 비밀번호');

    if(repassword === localStorage.getItem('password')) {
        alert(localStorage.getItem('id')+'의 홈페이지에 접속 성공!');
        
        var headding = document.querySelector('h1');
        headding.innerHTML = localStorage.getItem('id') +'Homepage'
    } else {
        alert('패스워드가 맞지 않음');
        //var password = prompt(id + '의 비밀번호');
    }
}


