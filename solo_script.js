// ! ! !
// Three Bugs

function Person (name, employeeNumber, baseSalary, reviewScore) {
          this.name = name;
          this.employeeNumber = employeeNumber;
          this.baseSalary = baseSalary;
          this.reviewScore = reviewScore;
        }
//defined a function to create 'Person' objects
var Atticus = new Person("Atticus", "2405", "47000", 3);
var Jem = new Person("Jem", "62347", "63500", 4);
var Boo = new Person("Boo", "11435", "54000", 3);
var Scout = new Person("Scout", "6243", "74750", 5);
//passed new person Objects through the Person function
var employeeList = [Atticus, Jem, Boo, Scout];
//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');
//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < employeeList.length; i++){
  employeeList[i] = calculateSTI(employeeList).join(", ");
  newEl = document.createElement('li');
  newText = document.createTextNode(employeeList[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}

function calculateSTI(object){
  var newArray = [];

  newArray[0] = employeeList[i].name; //added the [0] indicating the array index, to fix an issue where the first array's "name" was being repeated

  var employeeNumber = employeeList[i].employeeNumber;//added [i] to allow the 'for' loop to correctly loop through 'array' grabbing values from the correct index
  var baseSalary = employeeList[i].baseSalary;
  var reviewScore = employeeList[i].reviewScore;
                            //changed array indices to the object key names to pull peoper values
  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus * 100;//multiplied bonus * 100 to get a clean percentage number w/o affecting totals
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));//added Math.round to round up bonus amounts to the nearest dollar, due to FLOAT POINT issues
  newArray[3] = Math.round(baseSalary * bonus);//added Math.round to round up bonus amounts to the nearest dollar
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
    default:
      basePercent = 0;
      break;
      //added a default
  }
  return basePercent;
  //removed the "-1" from the returned basePercent
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length === 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}