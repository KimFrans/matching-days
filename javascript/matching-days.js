var errorMessage = document.querySelector(".errorMessage")
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

matchingDaysFactory.getDateOne(dateOne.value)
matchingDaysFactory.getDateTwo(dateTwo.value)

dateOne.addEventListener('change', function(){
    matchingDaysFactory.returnDayWeek().weekday1
   
    var list = document.getElementsByClassName("weekdayLi")
    
    for(i=0; i<matchingDaysFactory.returnDayWeek().daysOfTheWeek.length;i++){
        
        // if(matchingDaysFactory.getDateOne(dateOne.value) == "Sunday"){

            if(matchingDaysFactory.checkDays()){
                list[i].classList.remove('purple')
                list[i].classList.add('green')
                
            }
            else{
                list[i].classList.remove('green')
                list[i].classList.add('purple')
            }
        // } 

    }


})

dateTwo.addEventListener('change', function(){
    matchingDaysFactory.returnDayWeek().weekday2
    var list = document.getElementsByClassName("weekdayLi")

    // if(matchingDaysFactory.getDateOne(dateTwo.value) == "Sunday"){
    //     if(matchingDaysFactory.checkDays()){
    //         list.classList.add('green')
            
    //     }
    //     else{
    //         list.classList.remove('green')
    //         list.classList.add('red')
    //     }
    // }

    for(i=0; i<matchingDaysFactory.returnDayWeek().daysOfTheWeek.length;i++){
        
        // if(matchingDaysFactory.getDateOne(dateTwo.value) == "Sunday"){

            if(matchingDaysFactory.checkDays()){
                list[i].classList.remove('red')
                list[i].classList.remove('purple')
                list[i].classList.add('green')
                
            }
            else{
                list[i].classList.remove('green')
                list[i].classList.add('red')
            }
        // } 

    }
        


})

