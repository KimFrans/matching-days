function factoryMatching(){

    var weekday1
    var weekday2 = ""
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    function getDateOne(dateDay1){
        var dateDayOne = new Date(dateDay1);
        var first = dateDayOne.getDay();
        weekday1 = daysOfTheWeek[first]
        // console.log(weekday2)
        return weekday1
    }

    function returnDayWeek(){
        return {
            weekday1,
            weekday2,
            daysOfTheWeek,
        }
    }


    function getDateTwo(dateDay2){
        var dateDayTwo = new Date(dateDay2);
        var second = dateDayTwo.getDay();
        weekday2 = daysOfTheWeek[second]
        // console.log(weekday1)
        return weekday2
    }

    function checkDays(){
        // console.log(weekday1)
        // console.log(weekday2)
        if(weekday1 === weekday2){
            console.log("dates match");
            return true;
            
        }
        else{
            console.log("dates does not match!");
            return false;
        }
    }

    return{
        getDateOne,
        getDateTwo,
        checkDays,
        returnDayWeek,
    }

}