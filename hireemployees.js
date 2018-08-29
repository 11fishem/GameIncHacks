function makeGame {
    let hireButton = document.querySelector('.hireTalentButton')
    createGame()
    finishCreateGame(0)
    hireButton.click()
    let employeeList = document.querySelector('tbody')
    let employeeInfoList = employeeList.querySelectorAll('.infoHolder')
}
