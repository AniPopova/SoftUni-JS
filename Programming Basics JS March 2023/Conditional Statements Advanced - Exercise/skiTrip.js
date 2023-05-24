// •	Първи ред - дни за престой - цяло число в интервала [0...365]
// •	Втори ред - вид помещение - "room for one person", "apartment" или "president apartment"
// •	Трети ред - оценка - "positive"  или "negative"


function skiTrip(input) {
    let stayDays = Number(input[0]);
    let roomType = input[1];
    let impression = input[2];

    let nights = stayDays - 1;
    let totalPrice = 0;
    switch (roomType) {
        case "room for one person":
            totalPrice = nights * 18;
            break;
        case "apartment":
            totalPrice = nights * 25;
            if (nights < 10) {
                totalPrice *= 0.7;
            } else if (nights <= 15) {
                totalPrice *= 0.65;
            } else {
                totalPrice *= 0.5;
            }
            break;
        case "president apartment":
            totalPrice = nights * 35;
            if (nights < 10) {
                totalPrice *= 0.9;
            } else if (nights <= 15) {
                totalPrice *= 0.85;
            } else {
                totalPrice *= 0.8;
            }
            break;
    }

    if (impression === "positive") {
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.9;
    }

    console.log(totalPrice.toFixed(2));

}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);