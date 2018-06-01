function timeout() {
setTimeout(function () {
createGame();
finishCreateGame(0);

for(i=0; i < 3; i++){

var goodNames = ["Hype Lord",
"Venture Capitalist",
"Nathan Flurry",
"Matt",
"Vince de Vries",
"Richard",
"Charles",
"Nicholas Kissel",
"Winnie",
"Chester",
"Shane",
"MasterPtato",
"Devin",
"Jeff",
"Chris",
"Scrub Master",
"Karl"];
var namesAvailable = [];
var availableIndex = -1;
document.querySelector('.hireTalentButton').click();
document.querySelectorAll('.name').forEach(function(e) {
  var employeeName = e.innerHTML;
  namesAvailable.push(employeeName);
});

for(i=0; i <= goodNames.length - 1; i++){
  name = goodNames[i];
  availableIndex = namesAvailable.indexOf(name);
  if(availableIndex != -1) break;
}
 
 finishHireTalent(availableIndex);
var namesAvailable = [];
var availableIndex = -1;
};
    }, 1000);
}
timeout();
