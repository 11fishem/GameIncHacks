var el = document.querySelector('#codePanelContainer');

var downEv = new KeyboardEvent('keydown', {view: window, cancelable: true, bubbles: true});
var upEv   = new KeyboardEvent('keyup', {view: window, cancelable: true, bubbles: true});

function getMoney() {
    setTimeout(function () {
		el.dispatchEvent(downEv);
		el.dispatchEvent(upEv);
        getMoney();
    }, 10);
}
 getMoney();
