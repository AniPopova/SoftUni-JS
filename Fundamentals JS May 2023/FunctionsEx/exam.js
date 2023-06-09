
console.log('1st task');

function examPrep(input) {

    let employeeOne = Number(input.shift());
    let employeeTwo = Number(input.shift());
    let employeeThree = Number(input.shift());
    let people = Number(input.shift());

    let answersPerHour = employeeOne + employeeTwo + employeeThree;
    let neededHour = 0;

    while (people > 0) {
        neededHour++;
        people -= answersPerHour;

        if (neededHour % 4 === 0) {
            neededHour++;
        }
    }
    console.log(`Time needed: ${neededHour}h. `);

}
examPrep(['5', '6', '4', '20']);

console.log('----------------------');


console.log('2nd task');

function examPrep(arr) {
    let arrayOfNumbers = arr.shift().split(" ").map(Number);
    let arrLength = arr.length;
    

    for (let index = 0; index < arrLength; index++) {
        let currentCommand = arr[index].split(" ");
        let command = currentCommand.shift();
        let indexOne = Number(currentCommand.shift());
        let indexTwo = Number(currentCommand.shift());
        // let [command,indexOne,indexTwo] = arr[index].split(' ');

       

        switch (command) {
            case "swap":
                let temp = arrayOfNumbers[indexOne];
                arrayOfNumbers[indexOne] = arrayOfNumbers[indexTwo];
                arrayOfNumbers[indexTwo] = temp;
                break;
            case "multiply":
                let result = arrayOfNumbers[indexOne] * arrayOfNumbers[indexTwo];
                arrayOfNumbers[indexOne] = result;
                break;
            case "decrease":
                arrayOfNumbers = arrayOfNumbers.map(n => n - 1);
                break;
            case "end":
                break;
        }

    }

    console.log(arrayOfNumbers.join(', '));

}

console.log('----------------------');


console.log('3rd task');


function examPrep(arr) {

    let firstLine = arr.shift().split('@');
    let nextLine = arr.shift();
    let total = 0;

    while (nextLine !== 'Love!') {
        let result = nextLine.split(' ');
        total += Number(result[1]);

        if (total > firstLine.length - 1) {
            total = 0;
        }

        if (firstLine[total] === 0) {
            console.log(`Place ${total} already had Valentine's day.`);
        } else {
            firstLine[total] = firstLine[total] - 2;
            if (firstLine[total] === 0) {
                console.log(`Place ${total} has Valentine's day.`);

            }
        }
        nextLine = arr.shift();

    }

    console.log(`Cupid's last position was ${total}.`);

    let resultArr = [];
    let resultFlag = true;

    firstLine.forEach(element => {
        if (element !== 0) {
            resultFlag = false;
            resultArr.push(element);
        }
    });

    if (resultFlag) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${resultArr.length} places.`);
    }

}
