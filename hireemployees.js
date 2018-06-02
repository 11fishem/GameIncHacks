///For making games
var goodNames = [
    "Prodigy",
    "Scotty",
    "Jeff Basil",
    "Steve Poz",
    "Mr. Robot",
    "Mannuci",
    "Hype Lord",
    "Jack Morsey",
    "Venture Capitalist",
    "Nathan Flurry",
    "Matt",
    "Stanly",
    "Vince de Vries",
    "Captain Sarah",
    "Richard",
    "Yang",
    "Charles",
    "Nicholas Kissel",
    "Winnie",
    "Chester",
    "Shane",
    "MasterPtato",
    "Devin",
    "Jeff",
    "Chris",
    "Lizard Man",
    "Helena",
];

function hireSingleEmployee() {
    var namesAvailable = [];
    var availableIndex = -1;
    var employeeNames = [];
    var employeeNames = document.querySelectorAll('.name');
    console.log(employeeNames);
    var legthofemployeeNames = employeeNames.length - 1;
    console.log(legthofemployeeNames);
    for (i = 0; i < 3; i++) {
        var employeeNameArray = employeeNames[legthofemployeeNames - i];
        console.log(employeeNameArray);
        var employeeName = employeeNameArray.innerHTML;
        namesAvailable.push(employeeName);
        console.log(namesAvailable);
    }

    for (i = 0; i <= goodNames.length - 1; i++) {
        name = goodNames[i];
        availableIndex = namesAvailable.indexOf(name);
        if (availableIndex != -1) break;
    }
    console.log(availableIndex);
    if (availableIndex === 1) {
        finishHireTalent(1);
    } else if (availableIndex === 2) {
        finishHireTalent(0);
    } else {
        finishHireTalent(-1);
    }
    console.log(availableIndex);
};

function makeGame() {
    createGame();
    finishCreateGame(0);
};

function MakeandHire() {
    makeGame();
    hireThree();
}

function hireThree() {
    document.querySelector('.hireTalentButton').click();
    setTimeout(function() {
        hireSingleEmployee();
        document.querySelector('.hireTalentButton').click();
    }, 1500);
    setTimeout(function() {
        hireSingleEmployee();
        document.querySelector('.hireTalentButton').click();
    }, 3000);
    setTimeout(function() {
        hireSingleEmployee();
        document.querySelector('.hireTalentButton').click();
    }, 4500);
    setTimeout(function() {
        hireSingleEmployee();
    }, 6000);
}

function infiniteHire() {
    setTimeout(function() {
        MakeandHire();
        infiniteHire();
    }, 10000);
}
