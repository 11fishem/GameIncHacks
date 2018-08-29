function makeGame {
    let hireButton = document.querySelector('.hireTalentButton')
    createGame()
    finishCreateGame(0)
    hireButton.click()
    let employeeList = document.querySelector('tbody')
    let employeeInfo = employeeList.querySelectorAll('.infoHolder')
    for( i = 0 ; i < employeeInfo.length ; i++){
        
    }
}
