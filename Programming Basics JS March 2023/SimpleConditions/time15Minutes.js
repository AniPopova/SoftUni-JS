function plusFifteen(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let minutesFromHours = hours * 60;
    let totalTime = minutesFromHours + minutes + 15;
    let totalHours = Math.floor(totalTime / 60);
    let totalMinutes = totalTime % 60;
    if(totalHours >= 24){
        totalHours = 0;
    }
    if(totalMinutes < 10){
    console.log(`${totalHours}:0${totalMinutes}`);
} else{
    console.log(`${totalHours}:${totalMinutes}`);
}

}

plusFifteen(["1", "46"]);
plusFifteen(["0", "01"]);
plusFifteen(["23", "59"]);
plusFifteen(["11", "08"]);
plusFifteen(["12", "49"]);
