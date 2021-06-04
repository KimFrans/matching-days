var dateOne = document.getElementById("dateOne")
var dateTwo = document.getElementById("dateTwo")

var matchingDaysFactory = factoryMatching()

// get a reference to the template script tag
var templateSource = document.querySelector(".matching").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

var templateDisplay = document.querySelector(".weekdays")
var userData = {day: matchingDaysFactory.returnDayWeek().daysOfTheWeek}

var userDataHTML = userTemplate(userData)
templateDisplay.innerHTML = userDataHTML


function dateOneAndTwo(){
    var dateOne = document.getElementById("dateOne")
    var dateTwo = document.getElementById("dateTwo")

    if (dateOne.value){
        matchingDaysFactory.getDateOne(dateOne.value)
        // matchingDaysFactory.getDateTwo(dateTwo.value)
        templateDisplay.innerHTML = userTemplate({day: matchingDaysFactory.checkDays()})
    }

    if (dateTwo.value){
        // matchingDaysFactory.getDateOne(dateOne.value)
        matchingDaysFactory.getDateTwo(dateTwo.value)
        templateDisplay.innerHTML = userTemplate({day: matchingDaysFactory.checkDays()})
    }
}

dateOne.addEventListener('change', dateOneAndTwo)

dateTwo.addEventListener('change', dateOneAndTwo)


