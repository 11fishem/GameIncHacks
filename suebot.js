function suebot() {
    setTimeout(function () {
    	createLawsuit();
    	var topbitch = document.getElementById("createLawsuitTargets").lastElementChild.getAttribute("value");
    	document.getElementById("createLawsuitTargets").value = topbitch;
    	console.log(topbitch);
    	finishCreateLawsuit(2);
	setTimeout(hireLawyer(10), 1000)
    }, 100);
}
function hireLawyer(lawsuitSize) {
	for(i = 0; i < lawsuitSize; i++){
	document.querySelector('.hireTalentButton').click();
	let employeeList = document.querySelector('tbody')
	let employeeInfo = employeeList.querySelectorAll('.infoHolder')
	let employee = []
	for( i = 0 ; i < employeeInfo.length ; i++){
	   var employeeName = employeeInfo[i].querySelector('.label').innerHTML
	   let employeeID = config.lawyers.findIndex(i=> i.name === employeeName)
	   employee[i] = Object.assign({}, config.employees[employeeID])
	}
	if(employee[0].workSpeed > employee[1].workSpeed){finishHireTalent(0)} else if(employee[1].workSpeed > employee[0].workSpeed){finishHireTalent(1)} else {finishHireTalent(-1)}
	}
}
 suebot();
