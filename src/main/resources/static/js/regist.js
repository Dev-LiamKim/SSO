//페이지 로딩시 이벤트 등록
document.querySelector('input[name="id"]').addEventListener('focusout', idValidationCheck);


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