function suebot() {
    setTimeout(function () {
    	createLawsuit();
    	var topbitch = document.getElementById("createLawsuitTargets").lastElementChild.getAttribute("value");
    	document.getElementById("createLawsuitTargets").value = topbitch;
    	console.log(topbitch);
    	finishCreateLawsuit(2);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
		document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
    	document.querySelector('.hireTalentButton').click();
    	finishHireTalent(-1);
        suebot();
    }, 100);
}
 suebot();
