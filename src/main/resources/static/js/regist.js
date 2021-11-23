//페이지 로딩완료 이벤트
let registForm;

document.addEventListener('DOMContentLoaded', function(){
    init(); 
    registForm =  document.getElementById('registForm');
    registForm.addEventListener('submit', registFormSubmit)
    document.addEventListener('keypress', catchKeyPress);
})

function catchKeyPress(e){
    if(e.keyCode == 13)
        registForm.submit();
}


function init(){    
    let idInput = document.querySelector('input[name="id"]');
    let nickNameInput = document.querySelector('input[name="nickName"]');
    let eMailInput = document.querySelector('input[name="email"]');
    let passWdInput = document.querySelector('input[name="passWd"]');
    let passWdReInput = document.querySelector('input[name="passWdRe"]');
    let birthDayInput = document.querySelector('input[name=birthDay]');

    idInput.addEventListener('focusout', inputValidateCheck);
    nickNameInput.addEventListener('focusout', inputValidateCheck);
    eMailInput.addEventListener('focusout', inputValidateCheck);
    passWdInput.addEventListener('focusout', passWdValidateCheck);
    passWdReInput.addEventListener('focusout', passWdReValidateCheck);
    birthDayInput.addEventListener('change', function () { this.state = this.value != '' ? true : false; });

    idInput.regExp = /^[a-zA-Z]+([0-9|[a-z]){8,20}$/;
    idInput.alreadyUsedMessage = '이미 사용중인 ID입니다.';
    idInput.notYetUsedMessage = '사용 가능한 ID입니다.';
    idInput.wrongFormatMessage = 'ID는 영문자 와 숫자조합으로 8자에서 20자 사이만 가능합니다.';
    idInput.state = false;

    nickNameInput.regExp = /^[a-zA-Z0-9!@#$%^&*()_+-=]{4,20}$/;
    nickNameInput.alreadyUsedMessage = '이미 사용중인 닉네임 입니다.';
    nickNameInput.notYetUsedMessage = '사용 가능한 닉네임 입니다.';
    nickNameInput.wrongFormatMessage = '닉네임은 영문자 또는 숫자 또는 영문자 숫자조합으로 8자에서 20자 사이만 가능합니다.';
    nickNameInput.state = false;

    eMailInput.regExp = /^[0-9a-zA-Z-_]+@[0-9a-zA-Z]+\.+[a-zA-Z]{2,3}$/;
    eMailInput.alreadyUsedMessage = '이미 사용중인 이메일입니다.';
    eMailInput.notYetUsedMessage = '사용 가능한 이메일입니다.';
    eMailInput.wrongFormatMessage = '이메일 형식에 맞지않습니다.';
    eMailInput.state = false;
    
    passWdInput.regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    passWdInput.wrongFormatMessage = '비밀번호는 영문 대/소 문자 및 숫자 특수문자 조합으로 8자에서 20자 사이만 가능합니다.';
    passWdInput.avilablePassWdMessage = '사용가능한 비밀번호 입니다.';
    passWdInput.state = false;

    passWdReInput.inputDoesNotMatchMessage = '비밀번호가 일치하지 않습니다.';
    passWdReInput.inputMatchMessage = '비밀번호가 일치합니다.';
    passWdReInput.state = false;

    birthDayInput.state = false;
}


function registFormSubmit(){
    if (!document.querySelector('input[name="id"]').state){
        alert('id가 제대로 입력되지 않았습니다.');
        return;
    }

    if (!document.querySelector('input[name="nickName"]').state) {
        alert('닉네임이 제대로 입력되지 않았습니다.');
        return;
    }

    if (!document.querySelector('input[name="email"]').state) {
        alert('이메일이 제대로 입력되지 않았습니다.');
        return;
    }

    if (!document.querySelector('input[name="passWd"]').state || !document.querySelector('input[name="passWdRe"]').state) {
        alert('비밀번호가 제대로 입력되지 않았습니다.');
        return;
    }

    if(!document.querySelector('input[name="passWd"]').state){
        alert('생일을 설정하지 않았습니다.');
        return;
    }

    if (document.querySelectorAll('input[name="sex"]')[0].checked || document.querySelectorAll('input[name="sex"]')[1].checked){
        alert('성별이 제대로 설정되지 않앗습니다.');
        return;
    }
    registForm.submit();
    
}


//비밀번호 재입력 일치 여부 
function passWdReValidateCheck(){
    let passWdReInputWarn = document.querySelector('label[for="passWdRe"] p');
    let passWdInput = document.querySelector('input[name="passWd"]')
    let passWdReInput = document.querySelector('input[name="passWdRe"]')
    if (passWdReInput.value == ''){
        passWdReInputWarn.style.visibility = 'hidden';
        passWdReInput.state = false;
    } else if (passWdReInput.value == passWdInput.value){
        passWdReInputWarn.style.color = 'green';
        passWdReInputWarn.textContent = passWdReInput.inputMatchMessage;
        passWdReInputWarn.style.visibility = 'visible';
        passWdReInput.state = true;
    } else{
        passWdReInputWarn.style.color = 'red';
        passWdReInputWarn.textContent = passWdReInput.inputDoesNotMatchMessage;
        passWdReInputWarn.style.visibility = 'visible';
        passWdReInput.state = false;
    }
    
}


//비밀번호 형식 유효성 검사
function passWdValidateCheck(){
    let passWdInputWarn = document.querySelector('label[for="passWd"] p');
    if(this.value == ''){
        passWdInputWarn.style.visibility = 'hidden';
        this.state = false;
    } else if(!this.regExp.test(this.value)){
        passWdInputWarn.style.color = 'red';
        passWdInputWarn.textContent = this.wrongFormatMessage;
        passWdInputWarn.style.visibility = 'visible';
        this.state = false;
    } else{
        passWdInputWarn.style.color = 'green';
        passWdInputWarn.textContent = this.avilablePassWdMessage;
        passWdInputWarn.style.visibility = 'visible';
        this.state = true;
    }
    passWdReValidateCheck();
}

//입력 유효성 검사
function inputValidateCheck() {
    if (this.regExp.test(this.value)) {
        isInputOverlaped(this);
    } else if (this.value != '') {
        document.querySelector(`label[for="${this.name}"] p`).style.visibility = 'visible';
        document.querySelector(`label[for="${this.name}"] p`).style.color = 'red';
        document.querySelector(`label[for="${this.name}"] p`).textContent = this.wrongFormatMessage;
        this.state = false;
    } else {
        document.querySelector(`label[for="${this.name}"] p`).style.visibility = 'hidden';
        this.state = false;
    }
}

//입력 중복 검사
function isInputOverlaped(inputObj) {
    let params = 'inputName=' + encodeURIComponent(inputObj.name);
    params += '&inputValue=' + encodeURIComponent(inputObj.value)
    let url = '/SSO/user/inputOverlapCheck';
    makePostRequest(url, params, true, inputWarnVisibilityJudge);
}

function inputWarnVisibilityJudge(){
    if (this.readyState === XMLHttpRequest.DONE) {

        let inputObj = document.getElementsByName(this.response.split(':')[0])[0];
        let inputOverlapCheckResult = this.response.split(':')[1];
        let warnLabel = document.querySelector(`label[for="${inputObj.name}"] p`)

        if (inputOverlapCheckResult == 'true') {
            warnLabel.textContent = inputObj.alreadyUsedMessage;
            warnLabel.style.color = 'red';
            warnLabel.style.visibility = 'visible';
            inputObj.state = false;
        } else if (inputOverlapCheckResult == 'false') {
            warnLabel.textContent = inputObj.notYetUsedMessage;
            warnLabel.style.color = 'green';
            warnLabel.style.visibility = 'visible';
            inputObj.state = true;
        }
    }
}





//id 유효성 검사
function idValidationCheck(){
    let id = document.querySelector('input[name="id"]').value;
    if(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(id)){
        isIdOverlaped(id)
    } else if (!id == ''){
        document.querySelector('label[for="id"] p').style.visibility = 'visible';
        document.querySelector('label[for="id"] p').style.color = 'red';
        document.querySelector('label[for="id"] p').textContent = 'id가 형식에 맞지 않습니다.';
    } else{
        document.querySelector('label[for="id"] p').style.visibility = 'hidden';
    }
}

//id 중복 검사 요청
function isIdOverlaped(id){
    console.log('test');
    let params = 'id=' + encodeURIComponent(id);
    let url = '/SSO/user/idOverlapCheck';
    makePostRequest(url, params, true, idWarnVisibilityJudge);
}

//id 경고 활성화 판단
function idWarnVisibilityJudge(){
    console.log(this);
    if(this.readyState === XMLHttpRequest.DONE){
        if(this.response == 'true'){
            document.querySelector('label[for="id"] p').textContent = '이미 사용중인 id 입니다.';
            document.querySelector('label[for="id"] p').style.color = 'red';
            document.querySelector('label[for="id"] p').style.visibility = 'visible';
        }else if(this.response == 'false'){
            document.querySelector('label[for="id"] p').textContent = '사용 가능한 id 입니다.';
            document.querySelector('label[for="id"] p').style.color = 'green';
            document.querySelector('label[for="id"] p').style.visibility = 'visible';
        }
    }
}

//닉네임 유효성 검사
function nickNameValidationCheck(){
    let nickName = document.querySelector('input[name="nickName"]').value;
    if (/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(nickName)) {
        isNickNameOverlaped(nickName);
    } else if (!nickName == '') {
        document.querySelector('label[for="id"] p').style.visibility = 'visible';
        document.querySelector('label[for="id"] p').style.color = 'red';
        document.querySelector('label[for="id"] p').textContent = 'nickName이 형식에 맞지 않습니다.';
    } else {
        document.querySelector('label[for="id"] p').style.visibility = 'hidden';
    }
}

//닉네임 중복 검사 요청
function isNickNameOverlaped(nickName) {
    console.log('test');
    let params = 'nickName=' + encodeURIComponent(nickName);
    let url = '/SSO/user/idOverlapCheck';
    makePostRequest(url, params, true, idWarnVisibilityJudge);
}

//닉네임 경고 활성화 판단
function nickNameWarnVisibilityJudge(){
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.response == 'true') {
            document.querySelector('label[for="id"] p').textContent = '이미 사용중인 nickName 입니다.';
            document.querySelector('label[for="id"] p').style.color = 'red';
            document.querySelector('label[for="id"] p').style.visibility = 'visible';
        } else if (this.response == 'false') {
            document.querySelector('label[for="id"] p').textContent = '사용 가능한 nickName 입니다.';
            document.querySelector('label[for="id"] p').style.color = 'green';
            document.querySelector('label[for="id"] p').style.visibility = 'visible';
        }
    }
}



function makeGetRequest(uri, async, callBack) {
    let httpReuqest = null;
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        httpReuqest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = callBack;

    httpReuqest.open('GET', uri, async);
    httpRequest.send();
}

function makePostRequest(uri, params, async, callBack){
    let httpReuqest = null;
    if(window.XMLHttpRequest){
        httpRequest = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        httpReuqest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = callBack;
    
    httpRequest.open('POST', uri, async);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(params);
}

function alertContents() {
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            alert(this.responseText);
            console.log(this);
        } else {
            alert('request에 뭔가 문제가 있어요.');
        }
    }afadaadasdadasdsad
}