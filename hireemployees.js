function makeGame() {
    createGame()
    finishCreateGame(0)
    hireEmployees()
}
function hireEmployees() {
        let hireButton = document.querySelector('.hireTalentButton')
        hireButton.click()
        let employeeList = document.querySelector('tbody')
        let employeeInfo = employeeList.querySelectorAll('.infoHolder')
        let employee = []
        for( i = 0 ; i < employeeInfo.length ; i++){
           var employeeName = employeeInfo[i].querySelector('.label').innerHTML
           let employeeID = config.employees.findIndex(i=> i.name === employeeName)
           employee[i] = Object.assign({}, config.employees[employeeID])
        }
        if(employee[0].workSpeed > -1 && employee[0].salary < 300000000 && employee[0].hype > -1){employee[0].safe = true} else {employee[0].safe = false}
        if(employee[1].workSpeed > -1 && employee[1].salary < 300000000 && employee[1].hype > -1){employee[1].safe = true} else {employee[1].safe = false}
        if(employee[0].safe && employee[1].safe){
            if(employee[0].rarity > employee[1].rarity){
                finishHireTalent(0)
            } else {
                finishHireTalent(1)
            }
        } else if(employee[0].safe){
            finishHireTalent(0) 
        } else if(employee[1].safe){
            finishHireTalent(1) 
        } else {
         finishHireTalent(2)
        }
}
