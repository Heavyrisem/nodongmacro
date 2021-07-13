let stopmc = false;

function mc1() {
    let iframe = document.getElementsByName('contentsMain')[0];
    let Doc = iframe.contentDocument || iframe.contentWindow.document;
    let time;
    let btn;
    

    let inv = setInterval(() => {
        if (stopmc) clearInterval(inv);

        time = Doc.getElementById('time');
        btn = Doc.getElementById('nextBtn');
        console.log(time.innerText.split(' / ')[0], time.innerText.split(' / ')[1]);
        if (time.innerText.split(' / ')[0] == time.innerText.split(' / ')[1] && time.innerText.split(' / ')[0] != '00:00') {
            clearInterval(inv);
            btn.click();
            mc1();
            return;
        }
    }, 500);
}
mc1();