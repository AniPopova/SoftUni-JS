function summerOutfit(input){
    let degrees = Number(input[0]);
    let dayTime = input[1];
    let outFit = "";
    let shoes = "";

    switch(dayTime){
        case "Morning":
        if(degrees >= 10 && degrees <= 18){
            outFit = "Sweatshirt";
            shoes = "Sneakers";
        } else if(degrees >= 18 && degrees <= 24){
            outFit = "Shirt";
            shoes = "Moccasins";
        } else{
            outFit = "T-Shirt";
            shoes = "Sandals";
        }
        break;
        case "Afternoon":
            if(degrees >= 10 && degrees <= 18){
                outFit = "Shirt";
                shoes = "Moccasins";
            } else if(degrees >= 18 && degrees <= 24){
                outFit = "T-Shirt";
                shoes = "Sandals";
            } else{
                outFit = "Swim Suit";
                shoes = "Barefoot";
            }
        break;
        case "Evening":
            outFit = "Shirt";
            shoes = "Moccasins";
        break;
    } 
    console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);
}

summerOutfit(["16","Morning"]);
summerOutfit(["22","Afternoon"]);