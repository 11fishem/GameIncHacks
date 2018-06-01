//WORK IN PROGRESS

//get the employee hiring options
var employeeOptions = document.querySelectorAll(".name");

//loop through and get innerHTML
[].forEach.call(employeeOptions, function() {
  employee.innerHTML = '';
});

//We'll have to make a sorted list of the innerHTML values ranked in terms of how good they are, and then have the function pick the best option going down the list
//TODO
