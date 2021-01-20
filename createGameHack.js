let loopOn = true

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

function getSalary(array){
    let inputString = ""
    for(let i=0;i<array.length;i++){
        if(array[i].includes("$")){
            inputString = array[i]
            i = 20
        }
    }
    return parseInt(inputString.replace(/\D/g, ""))
}

function getSpeed(array){
    let inputString = ""
    for(let i=0;i<array.length;i++){
        if(parseInt(array[i])>-100000000){
            inputString = array[i]
            i = 20
        }
    }
    return parseInt(inputString)
}

function getHype(array){
    let inputString = ""
    for(let i=0;i<array.length;i++){
        if(array[i].includes("Hype")){
            inputString = array[i+1]
            i = 20
        }
    }
    let multiplier = 1
    if(inputString.includes("k")){
        multiplier = 1000
    } else  if(inputString.includes("m")){
        multiplier = 1000000
    }
    let baseValue = parseInt(inputString.split(".")[0])
    return baseValue*multiplier
}

function getChoices(){
  // Get choice nodes
  let choiceNodes = document.querySelectorAll(".employeeHolder")
  let choices = []
  for(let i=0;i<2;i++){
    let traitsArr = choiceNodes[i].outerText.split(" ")
    console.log(traitsArr)
    let salary = getSalary(traitsArr)
    let speed = getSpeed(traitsArr)
    let hype = getHype(traitsArr)
    choices.push([salary,speed,hype])
  }
  return choices
}

function makeGame(){
    // Click New Game button
    createGame()
    // Select Web Game
    finishCreateGame(0)
    // Click get talent button
    sleep(500).then(()=>{
        document.querySelector(".hireTalentButton").click()
    })
    // Get choices [[salary,speed,hype],[...]]
    let choices = []
    sleep(3000).then(()=>{
        choices = getChoices()
        console.log("Choices:")
        console.log(choices)
    })
}

while(loopOn){
    makeGame()
    loopOn = false
}
