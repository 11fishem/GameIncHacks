function makeGame {
    let hireButton = document.querySelector('.hireTalentButton')
    createGame()
    finishCreateGame(0)
    hireButton.click()
    let employeeList = document.querySelector('tbody')
    let employeeInfo = employeeList.querySelectorAll('.infoHolder')
    let employee = []
    for( i = 0 ; i < employeeInfo.length ; i++){
       employeeID = config.employees.findIndex(i=> i.name === employeeInfo[0].querySelector('.label').innerHTML)
       employee[i] = Object.assign({}, config.employees[employeeID])
    }
}
