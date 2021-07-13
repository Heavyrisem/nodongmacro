let stopmc = false;

function mc2() {
    let iframe = document.getElementsByName('contentsMain')[0];
    let Doc = iframe.contentDocument || iframe.contentWindow.document;
    let time;
    let btn;
    

    let inv = setInterval(() => {
        if (stopmc) clearInterval(inv);

        time = Doc.getElementById('handleBar');
        btn = Doc.getElementsByClassName('next arrow')[0];
        console.log(Doc.getElementById('handleBar').style.width);
        if (Doc.getElementById('handleBar').style.width == "1000px") {
            clearInterval(inv);
            btn.click();
            mc2();
            return;
        }
    }, 1000);
}
mc2();