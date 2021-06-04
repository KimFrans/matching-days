function factoryMatching(){

    var weekday1 = ''
    var weekday2 = ""
    var first = undefined
    var second = undefined
    var daysOfTheWeek = [{day:"Sunday", color:""}, {day:"Monday", color:""}, {day:"Tuesday", color:""}, {day:"Wednesday", color:""}, {day:"Thursday", color:""}, {day:"Friday", color:""}, {day:"Saturday", color:""}]

    function getDateOne(dateDay1){
        var dateDayOne = new Date(dateDay1);
        first = dateDayOne.getDay();
        // weekday1 = daysOfTheWeek[first]
        // // console.log(weekday2)
        // return weekday1
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
        second = dateDayTwo.getDay();
        // weekday2 = daysOfTheWeek[second]
        // // console.log(weekday1)
        // return weekday2
    }

    function checkDays(){
        daysOfTheWeek = [{day:"Sunday", color:""}, {day:"Monday", color:""}, {day:"Tuesday", color:""}, {day:"Wednesday", color:""}, {day:"Thursday", color:""}, {day:"Friday", color:""}, {day:"Saturday", color:""}]
        
        // console.log(daysOfTheWeek[second].color)
        if (first == second && (first != undefined && second != undefined)){
            daysOfTheWeek[second].color = "green"
            return daysOfTheWeek
        } 
        if (first != undefined && second == undefined){
            // console.log(first)
            daysOfTheWeek[first].color = "purple"
            return daysOfTheWeek
        } 
        if (second != undefined && first == undefined){
            daysOfTheWeek[second].color = "red"
            return daysOfTheWeek
        } 
        else {
            daysOfTheWeek[first].color = "purple"
            daysOfTheWeek[second].color = "red"
            return daysOfTheWeek

        }
        
    }

    return{
        getDateOne,
        getDateTwo,
        checkDays,
        returnDayWeek,
    }

}