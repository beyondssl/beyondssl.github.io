// #################################################################
// For testing only! Should be implemented in base js from Walter
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function getConfig() {
    document.querySelector('.config-prompt').style.display = "none";
    document.querySelector('.config-content').style.display = "block";
}
function addServerWizard() {
    document.querySelector('.server-modal').style.display = "block";
}
var sparkConfig = {
    editServer() {
        document.querySelector('.server-modal').style.display = "block";
    }
};
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// For testing only! Should be implemented in base js from Walter
// #################################################################


if ((cryear = document.getElementById("cryear")) !== null) {
    cryear.innerHTML = new Date().getFullYear();
}


var inlineCodes = document.getElementsByClassName('inlinecode'), i;
for (var i = 0; i < inlineCodes.length; i++) {
    inlineCodes[i].onclick = function(){
        var sel, range;
        var el = this;
        if (window.getSelection && document.createRange) {
        sel = window.getSelection();
        if(sel.toString() == ''){
            window.setTimeout(function(){
                range = document.createRange();
                range.selectNodeContents(el);
                sel.removeAllRanges();
                sel.addRange(range);
            },1);
        }
        } else if (document.selection) {
            sel = document.selection.createRange();
            if(sel.text == ''){
                range = document.body.createTextRange();
                range.moveToElementText(el);
                range.select();
            }
        }
    };
}


var tabs = document.getElementsByClassName('tab'), t;
var tabContents = document.getElementsByClassName('tab-content'), tc;
for (var tc = 0; tc < tabContents.length; tc++) {
    tabContents[tc].setAttribute('data-index', [tc]);
}
for (var t = 0; t < tabs.length; t++) {
    tabs[t].setAttribute('data-index', [t]);
    tabs[t].onclick = function(){
        var currentTab = this;
        Array.prototype.forEach.call(tabs, tab => {
            tab.classList.remove('active');
        });
        currentTab.classList.add('active');
        Array.prototype.forEach.call(tabContents, tabC => {
            tabC.classList.remove('active');
            if (tabC.getAttribute('data-index') === currentTab.getAttribute('data-index')) {
                tabC.classList.add('active');
            }
        });
    };
}


var tabButtons = document.getElementsByClassName('tab-button'), tb;
var tabButtonsContents = document.getElementsByClassName('tab-button-content'), tbc;
for (var tbc = 0; tbc < tabButtonsContents.length; tbc++) {
    tabButtonsContents[tbc].setAttribute('data-index', [tbc]);
}
for (var tb = 0; tb < tabButtons.length; tb++) {
    tabButtons[tb].setAttribute('data-index', [tb]);
    tabButtons[tb].onclick = function(){
        var currentTabButton = this;
        Array.prototype.forEach.call(tabButtons, tabButton => {
            tabButton.classList.remove('active');
        });
        currentTabButton.classList.add('active');
        Array.prototype.forEach.call(tabButtonsContents, tabBC => {
            tabBC.classList.remove('active');
            if (tabBC.getAttribute('data-index') === currentTabButton.getAttribute('data-index')) {
                tabBC.classList.add('active');
            }
        });
    };
}


var serverModal = document.querySelector('.server-modal');
if (serverModal) {
    window.onclick = function(event) {
        if (event.target == serverModal) {
            serverModal.style.display = "none";
        }
     }
}


var radios = document.getElementsByName('protocolVal'), r;
var radioContents = document.getElementsByClassName('server-modal-config-inner'), rc;
for (var rc = 0; rc < radioContents.length; rc++) {
    radioContents[rc].setAttribute('data-index', [rc]);
}
for (var r = 0; r < radios.length; r++) {
    radios[r].setAttribute('data-index', [r]);
    radios[r].onclick = function(){
        var currentRadio = this;
        Array.prototype.forEach.call(radioContents, radioC => {
            radioC.classList.remove('active');
            if (radioC.getAttribute('data-index') === currentRadio.getAttribute('data-index')) {
                radioC.classList.add('active');
            }
        });
    };
}