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

// matchingDaysFactory.getDateOne(dateOne.value)
// matchingDaysFactory.getDateTwo(dateTwo.value)

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
// {
//     matchingDaysFactory.getDateOne(dateOne.value)
//     matchingDaysFactory.getDateTwo(dateTwo.value)
//     templateDisplay.innerHTML = userTemplate({day: matchingDaysFactory.checkDays()})
//    console.log(matchingDaysFactory.returnDayWeek().weekday1)
//    var day1 = matchingDaysFactory.returnDayWeek().weekday1
    // var list = document.getElementsByTagName("li")
    
    // for(i=0; i<list.length; i++){
    //     list[i] = list[i].innerHTML.trim()
    //     list[i].classList.remove('purple')
    //     list[i].classList.remove('red')
    //     // list[i].classList.remove('green')
    //     // console.log(list[i].innerHTML.trim())
    //     var day1 = matchingDaysFactory.returnDayWeek().weekday1
    //         // console.log(list[i])
    //         // console.log(list[i].innerHTML)
    //     // console.log(day1)
        
    //     if(matchingDaysFactory.getDateOne(dateOne.value) === matchingDaysFactory.getDateTwo(dateTwo.value)&& day1 === list[i].innerHTML.trim()){
    //         // if(day1 === list[i]){
    //             // console.log(list[i].innerHTML.trim())
    //             list[i].classList.remove('purple')
    //             list[i].classList.add('green')  
    //         // }
    //         return  
    //     }
    //    else if(matchingDaysFactory.getDateOne(dateOne.value) === day1 && list[i].innerHTML.trim()){
    //             // if(day1 === list[i].innerHTML){
    //                 // console.log(list[i].innerHTML)
    //                 // console.log(list[i].innerHTML.trim())
    //                 // console.log(day1)
    //                 list[i].classList.remove('green')
    //                 list[i].classList.add('purple') 
    //             // }
    //         return    
    //     }
    // }
// })

dateTwo.addEventListener('change', dateOneAndTwo)
// {
//     matchingDaysFactory.returnDayWeek().weekday2
//     // var list = document.getElementsByClassName("weekdayLi")
   
//     var list = document.getElementsByTagName("li")
    
//     for(i=0; i<list.length; i++){
//         list[i] = list[i].innerHTML.trim()
//         list[i].classList.remove('purple')
//         list[i].classList.remove('green')
//         list[i].classList.remove('red')
//         // console.log(listTrim.innerHTML)
        
//         if(matchingDaysFactory.getDateOne(dateOne.value) === matchingDaysFactory.getDateTwo(dateTwo.value) && matchingDaysFactory.returnDayWeek().weekday1 === list[i].innerHTML ){
//             list[i].classList.remove('purple')
//             list[i].classList.add('green')
            
//         }
//         else if(matchingDaysFactory.getDateOne(dateOne.value) === matchingDaysFactory.returnDayWeek().weekday1 && list[i].innerHTML){
//             list[i].classList.remove('green')
//             list[i].classList.add('red')
//         }

//     }
        


// })

