// Создание с помощью переменных, let, const
// let store = "Grocery store Nfactorial"
// let reustarant = "Nfactorial restaurants network"
// const footballClub = "Nfactorial club"
// console.log(`Магазин: ${store}, Reustarants: ${reustarant}, Football Club: ${footballClub}`)

// // Используя объект
// const footballClub = {
//     name: "Nfactorial club",
//     playersNumber: 11,
//     inFirstPlace: true,
//     ownStadium: null,
//     nextGame: undefined,
//     deleteOnePlayer: function(){
//         return this.playersNumber - 1
//     }
// }
// console.log(footballClub)
// console.log(footballClub.playersNumber)
// console.log(footballClub.deleteOnePlayer())
// // Add
// footballClub.deleteAllPlayer = function() { return this.playersNumber - 11 }
// console.log(footballClub)
// // Change
// footballClub.inFirstPlace = false
// console.log(footballClub)
// // delete
// delete footballClub.deleteAllPlayer
// console.log(footballClub)

// Добавление vehicle
// const vehicle = {
//     brandName: "BMW",
//     model: "X5",
// }
// console.log(vehicle)
// vehicle.model = "M1"
// console.log(vehicle.model)
// delete vehicle.model
// console.log(vehicle)

// Просуммировать salaries
let salaries = {
    Aroo: 100,
	Dalida: 160,
	Samat: 130,
}

function sumSalaries(salaries){
    let all = 0
    for (key in salaries){
        all+=salaries[key]
    }
    return all
}

console.log(sumSalaries(salaries)) // 390





