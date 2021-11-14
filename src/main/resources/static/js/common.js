
//--------------------------------------
//httpRequestfunction
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

function makePostRequest(uri, params, async, callBack) {
    let httpReuqest = null;
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        httpReuqest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = callBack;

    httpRequest.open('POST', uri, async);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(params);
}
