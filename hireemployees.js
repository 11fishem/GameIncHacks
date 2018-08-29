function makeGame() {
    createGame()
    finishCreateGame(0)
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
        console.log(employee)
    }
    hireEmployees()
}
