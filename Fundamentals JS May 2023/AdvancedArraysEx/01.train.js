function train(input) {

    let wagons = input[0].split(' ').map(Number);
    let wagonCapacity = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let current = input[i].split(' ');

        if (current[0] === 'Add') {
            wagons.push(Number(current[1]));

        } else {
            let passengers = Number(current[0]);

            for (let j = 0; j < wagons.length; j++) {
                if (wagonCapacity - wagons[j] >= passengers){
                    wagons[j] += passengers;
                break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}


// function train(input) {
//     let wagons = input[0].split(' ').map(Number);
//     let wagonCapacity = Number(input[1]);

//     for (let i = 2; i < input.length; i++) {
//         let current = input[i].split(' ');

//         if (current[0] === 'Add') {
//             wagons.push(Number(current[1]));
//         } else {
//             let passengers = Number(current[0]);

//             for (let j = 0; j < wagons.length; j++) {
//                 if (wagonCapacity - wagons[j] >= passengers) {
//                     wagons[j] += passengers;
//                     break;
//                 }
//             }
//         }
//     }

//     console.log(wagons.join(' '));
// }
train(['32 54 21 12 4 0 23',
    '75', 'Add 10', 'Add 0', '30', '10', '75']);