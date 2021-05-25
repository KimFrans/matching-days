var errorMessage = document.querySelector(".errorMessage")
var dateOne = document.getElementById("dateOne")
var dateTwo = document.getElementById("dateTwo")
var days = document.getElementsByClassName(".weekdays")

var matchingDaysFactory = factoryMatching()

matchingDaysFactory.getDateOne(dateOne.value)
matchingDaysFactory.getDateTwo(dateTwo.value)

dateOne.addEventListener('change', function(){
    matchingDaysFactory.returnDayWeek().weekday1
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Sunday"){
        
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day1")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.remove("daysNoMatch2")
            dayCheck.classList.add("daysMatch")
            
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day1")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch1")  
        }
        
        
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Monday"){
        
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day2")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.remove("daysNoMatch2")
            dayCheck.classList.add("daysMatch")
            
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day2")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch1")  
        }
    
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Tuesday"){
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day3")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.remove("daysNoMatch2")
            dayCheck.classList.add("daysMatch")
            
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day3")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch1")  
        }
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Wednesday"){
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day4")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.remove("daysNoMatch2")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day4")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch1")  
        }
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Thursday"){
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day5")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.remove("daysNoMatch2")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day5")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch1")  
        }
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Friday"){
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day6")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.remove("daysNoMatch2")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day6")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch1")  
        }
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Saturday"){
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day7")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.remove("daysNoMatch2")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day7")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch1")  
        }
    }


})

dateTwo.addEventListener('change', function(){
    matchingDaysFactory.returnDayWeek().weekday2
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Sunday"){
        
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day1")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day1")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch2") 
        }
        
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Monday"){
        
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day2")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day2")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch2") 
        }
        
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Tuesday"){
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day3")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day3")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch2") 
        }
    
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Wednesday"){
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day4")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day4")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch2") 
        }
    
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Thursday"){
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day5")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day5")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch2") 
        }
    
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Friday"){
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day6")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day6")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch2") 
        }
    
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Saturday"){
        if(matchingDaysFactory.checkDays()){
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day7")
            dayCheck.classList.remove("daysNoMatch1")
            dayCheck.classList.add("daysMatch")
        }
        else{
            var days = document.getElementsByClassName(".weekdays")
            var dayCheck = document.getElementById("day7")
            dayCheck.classList.remove("daysMatch")
            dayCheck.classList.add("daysNoMatch2") 
        }
    
    }

})

