var firstInput = document.querySelector('#inputOne');
var secondInput = document.querySelector('#inputTwo');
var weekdays = document.querySelectorAll('.box');


var matchingDays = function()
{
  if (inputDateOne !== "")
  {
    var inputDateOne = new Date(firstInput.value);
    var dayOne = inputDateOne.getDay();
  }

  else
  {
    inputDateOne = "";
  }

  if (inputDateTwo !== "")
  {
    var inputDateTwo = new Date(secondInput.value);
    var dayTwo = inputDateTwo.getDay();
  }
  else
  {
    inputDateTwo = "";
  }

  for (var i = 0; i < weekdays.length; i++)
  {
    weekdays[i].classList.remove('firstInputEntered');
    weekdays[i].classList.remove('secondInputEntered');
    weekdays[i].classList.remove('matchingDaysEntered');
  }

  if (dayOne === dayTwo)
  {
    weekdays[dayOne].classList.add('matchingDaysEntered');

  }

  else
  {
    weekdays[dayOne].classList.add('firstInputEntered');
    weekdays[dayTwo].classList.add('secondInputEntered');
  }


 firstInput.value = '';
 secondInput.value = '';
}


firstInput.addEventListener('change', matchingDays);
secondInput.addEventListener('change', matchingDays);
