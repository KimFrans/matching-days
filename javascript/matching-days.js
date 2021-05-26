var errorMessage = document.querySelector(".errorMessage")
var dateOne = document.getElementById("dateOne")
var dateTwo = document.getElementById("dateTwo")
var days = document.getElementsByClassName(".weekdays")

var matchingDaysFactory = factoryMatching()

matchingDaysFactory.getDateOne(dateOne.value)
matchingDaysFactory.getDateTwo(dateTwo.value)

dateOne.addEventListener('change', function(){
    matchingDaysFactory.returnDayWeek().weekday1
    var daysSunday = document.getElementsByClassName(".weekdays")
    var dayCheckSunday = document.getElementById("day1")
    var dayCheckMonday = document.getElementById("day2")
    var dayCheckTuesday = document.getElementById("day3")
    var dayCheckWednesday = document.getElementById("day4")
    var dayCheckThursday = document.getElementById("day5")
    var dayCheckFriday = document.getElementById("day6")
    var dayCheckSaturday = document.getElementById("day7")

    // dayCheckSunday.classList.remove("daysNoMatch2")
    dayCheckSunday.classList.remove("daysNoMatch1")
    // dayCheckSunday.classList.remove("daysMatch")

    // dayCheckMonday.classList.remove("daysNoMatch2")
    dayCheckMonday.classList.remove("daysNoMatch1")
    // dayCheckMonday.classList.remove("daysMatch")
    
    // dayCheckTuesday.classList.remove("daysNoMatch2")
    dayCheckTuesday.classList.remove("daysNoMatch1")
    // dayCheckTuesday.classList.remove("daysMatch")

    // dayCheckWednesday.classList.remove("daysNoMatch2")
    dayCheckWednesday.classList.remove("daysNoMatch1")
    // dayCheckWednesday.classList.remove("daysMatch")

    // dayCheckThursday.classList.remove("daysNoMatch2")
    dayCheckThursday.classList.remove("daysNoMatch1")
    // dayCheckThursday.classList.remove("daysMatch")

    // dayCheckFriday.classList.remove("daysNoMatch2")
    dayCheckFriday.classList.remove("daysNoMatch1")
    // dayCheckFriday.classList.remove("daysMatch")

    // dayCheckSaturday.classList.remove("daysNoMatch2")
    dayCheckSaturday.classList.remove("daysNoMatch1")
    // dayCheckSaturday.classList.remove("daysMatch")


    if(matchingDaysFactory.getDateOne(dateOne.value) == "Sunday"){
        
        if(matchingDaysFactory.checkDays()){
            
            dayCheckSunday.classList.remove("daysNoMatch1")
            dayCheckSunday.classList.remove("daysNoMatch2")
            dayCheckSunday.classList.add("daysMatch")
            
        }
        else{
            dayCheckSunday.classList.remove("daysMatch")
            dayCheckSunday.classList.add("daysNoMatch1")  
        }
        
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Monday"){
        
        if(matchingDaysFactory.checkDays()){
            dayCheckMonday.classList.remove("daysNoMatch1")
            dayCheckMonday.classList.remove("daysNoMatch2")
            dayCheckMonday.classList.add("daysMatch")
            
        }
        else{
            dayCheckMonday.classList.remove("daysMatch")
            dayCheckMonday.classList.add("daysNoMatch1")  
        }
    
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Tuesday"){
        if(matchingDaysFactory.checkDays()){
            dayCheckTuesday.classList.remove("daysNoMatch1")
            dayCheckTuesday.classList.remove("daysNoMatch2")
            dayCheckTuesday.classList.add("daysMatch")
            
        }
        else{
            dayCheckTuesday.classList.remove("daysMatch")
            dayCheckTuesday.classList.add("daysNoMatch1")  
        }
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Wednesday"){
        if(matchingDaysFactory.checkDays()){
            dayCheckWednesday.classList.remove("daysNoMatch1")
            dayCheckWednesday.classList.remove("daysNoMatch2")
            dayCheckWednesday.classList.add("daysMatch")
        }
        else{
            dayCheckWednesday.classList.remove("daysMatch")
            dayCheckWednesday.classList.add("daysNoMatch1")  
        }
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Thursday"){
        if(matchingDaysFactory.checkDays()){
            dayCheckThursday.classList.remove("daysNoMatch1")
            dayCheckThursday.classList.remove("daysNoMatch2")
            dayCheckThursday.classList.add("daysMatch")
        }
        else{
            dayCheckThursday.classList.remove("daysMatch")
            dayCheckThursday.classList.add("daysNoMatch1")  
        }
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Friday"){
        if(matchingDaysFactory.checkDays()){
            dayCheckFriday.classList.remove("daysNoMatch1")
            dayCheckFriday.classList.remove("daysNoMatch2")
            dayCheckFriday.classList.add("daysMatch")
        }
        else{
            dayCheckFriday.classList.remove("daysMatch")
            dayCheckFriday.classList.add("daysNoMatch1")  
        }
    }
    if(matchingDaysFactory.getDateOne(dateOne.value) == "Saturday"){
        if(matchingDaysFactory.checkDays()){
            dayCheckSaturday.classList.remove("daysNoMatch1")
            dayCheckSaturday.classList.remove("daysNoMatch2")
            dayCheckSaturday.classList.add("daysMatch")
        }
        else{
            dayCheckSaturday.classList.remove("daysMatch")
            dayCheckSaturday.classList.add("daysNoMatch1")  
        }
    }

})

dateTwo.addEventListener('change', function(){
    matchingDaysFactory.returnDayWeek().weekday2

    var dayCheckSunday = document.getElementById("day1")
    var dayCheckMonday = document.getElementById("day2")
    var dayCheckTuesday = document.getElementById("day3")
    var dayCheckWednesday = document.getElementById("day4")
    var dayCheckThursday = document.getElementById("day5")
    var dayCheckFriday = document.getElementById("day6")
    var dayCheckSaturday = document.getElementById("day7")

    dayCheckSunday.classList.remove("daysNoMatch2")
    // dayCheckSunday.classList.remove("daysNoMatch1")
    // dayCheckSunday.classList.remove("daysMatch")

    dayCheckMonday.classList.remove("daysNoMatch2")
    // dayCheckMonday.classList.remove("daysNoMatch1")
    // dayCheckMonday.classList.remove("daysMatch")
    
    dayCheckTuesday.classList.remove("daysNoMatch2")
    // dayCheckTuesday.classList.remove("daysNoMatch1")
    // dayCheckTuesday.classList.remove("daysMatch")

    dayCheckWednesday.classList.remove("daysNoMatch2")
    // dayCheckWednesday.classList.remove("daysNoMatch1")
    // dayCheckWednesday.classList.remove("daysMatch")

    dayCheckThursday.classList.remove("daysNoMatch2")
    // dayCheckThursday.classList.remove("daysNoMatch1")
    // dayCheckThursday.classList.remove("daysMatch")

    dayCheckFriday.classList.remove("daysNoMatch2")
    // dayCheckFriday.classList.remove("daysNoMatch1")
    // dayCheckFriday.classList.remove("daysMatch")

    dayCheckSaturday.classList.remove("daysNoMatch2")
    // dayCheckSaturday.classList.remove("daysNoMatch1")
    // dayCheckSaturday.classList.remove("daysMatch")


    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Sunday"){
        
        if(matchingDaysFactory.checkDays()){

            dayCheckSunday.classList.remove("daysNoMatch1")
            dayCheckSunday.classList.remove("daysNoMatch2")
            dayCheckSunday.classList.add("daysMatch")

            // dayCheck.classList.remove("daysNoMatch1")

            // dayCheck.classList.add("daysMatch")
        }
        else{
            dayCheckSunday.classList.remove("daysMatch")
            dayCheckSunday.classList.add("daysNoMatch2") 
        }
        
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Monday"){
        
        if(matchingDaysFactory.checkDays()){

            dayCheckMonday.classList.remove("daysNoMatch1")
            dayCheckMonday.classList.remove("daysNoMatch2")
            dayCheckMonday.classList.add("daysMatch")

            // dayCheck.classList.remove("daysNoMatch1")
            // dayCheck.classList.add("daysMatch")
        }
        else{
            dayCheckMonday.classList.remove("daysMatch")
            dayCheckMonday.classList.add("daysNoMatch2") 
        }
        
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Tuesday"){
        if(matchingDaysFactory.checkDays()){
            dayCheckTuesday.classList.remove("daysNoMatch1")
            dayCheckTuesday.classList.remove("daysNoMatch2")
            dayCheckTuesday.classList.add("daysMatch")


            // dayCheck.classList.remove("daysNoMatch1")
            // dayCheck.classList.add("daysMatch")
        }
        else{
            dayCheckTuesday.classList.remove("daysMatch")
            dayCheckTuesday.classList.add("daysNoMatch2") 
        }
    
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Wednesday"){
        if(matchingDaysFactory.checkDays()){

            dayCheckWednesday.classList.remove("daysNoMatch1")
            dayCheckWednesday.classList.remove("daysNoMatch2")
            dayCheckWednesday.classList.add("daysMatch")
            
            // dayCheck.classList.remove("daysNoMatch1")
            // dayCheck.classList.add("daysMatch")
        }
        else{
            dayCheckWednesday.classList.remove("daysMatch")
            dayCheckWednesday.classList.add("daysNoMatch2") 
        }
    
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Thursday"){
        if(matchingDaysFactory.checkDays()){
            dayCheckThursday.classList.remove("daysNoMatch1")
            dayCheckThursday.classList.remove("daysNoMatch2")
            dayCheckThursday.classList.add("daysMatch")


            // dayCheck.classList.remove("daysNoMatch1")
            // dayCheck.classList.add("daysMatch")
        }
        else{
            
            dayCheckThursday.classList.remove("daysMatch")
            dayCheckThursday.classList.add("daysNoMatch2") 
        }
    
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Friday"){
        if(matchingDaysFactory.checkDays()){
            dayCheckFriday.classList.remove("daysNoMatch1")
            dayCheckFriday.classList.remove("daysNoMatch2")
            dayCheckFriday.classList.add("daysMatch")

            // dayCheck.classList.remove("daysNoMatch1")
            // dayCheck.classList.add("daysMatch")
        }
        else{
            dayCheckFriday.classList.remove("daysMatch")
            dayCheckFriday.classList.add("daysNoMatch2") 
        }
    
    }
    if(matchingDaysFactory.getDateTwo(dateTwo.value) == "Saturday"){
        if(matchingDaysFactory.checkDays()){
            dayCheckSaturday.classList.remove("daysNoMatch1")
            dayCheckSaturday.classList.remove("daysNoMatch2")
            dayCheckSaturday.classList.add("daysMatch")
            

            // dayCheck.classList.remove("daysNoMatch1")
            // dayCheck.classList.add("daysMatch")
        }
        else{
            
            dayCheckSaturday.classList.remove("daysMatch")
            dayCheckSaturday.classList.add("daysNoMatch2") 
        }
    
    }

})

