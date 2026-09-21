const container = document.getElementById("container")
const startButton = document.getElementById("startBtn")

startButton.innerText = "Start game!"
let element = document.createElement("div")

element.id = "box"

let cards = []
const farger = [
    "#264653", // dyp teal
    "#2A9D8F", // sjøgrønn
    "#E9C46A", // sennepsgul
    "#F4A261", // aprikos
    "#E76F51", // terrakotta
    "#8E7DBE", // dus lilla
    "#5C8DFF", // klar blå
    "#F2E9E4"  // varm hvit
];
const startGame = (cards) => {


    for (const child of container.children) {
        child.style.backgroundColor = "#000000"
        console.log(child.value)
    }
    // cards.forEach((value) => {
    //     value.currentCollor = "#000000"
    //     console.log(value)
    // })
}

for (let i = 1; i < 9; i++) {

}
farger.forEach(element => {
    cards.push(element)
    cards.push(element)
})
let i = 1
let kortListe = []

cards.forEach(element => {
    let tmp = {
        num: i,
        value: element,
        currentCollor: element,
        flipped: false,
        scored: false
    }
    i += 1
    kortListe.push(tmp)
});
const timeoutId = setTimeout(() => {
    console.log("This runs after 2 seconds.");
}, 2000);
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const flippBack = (cards) => {
    for (const child of container.children) {
        if (child.value.scored == true) {
            console.log(child.value)
        }
        else {
            child.style.backgroundColor = "#000000"
        }
    }
}
const children = []
let pair = []
const checkPair = () => {
    console.log("checkpair")
    if (pair.length > 1) {

        if (pair[0].value.value == pair[1].value.value & pair[0].value.num != pair[1].value.num) {
            pair[0].value.scored = true
            pair[1].value.scored = true
        } else {
            pair[0].value.flipped = false
            pair[1].value.flipped = false

            flippBack(kortListe)
        }
        pair = []
        console.log("to parr!")
    }

}
const checkWin = () => {
    let score = 0
    for (const child of container.children) {
        if (child.value.scored == true) {
            score += 1
        }
    }
    if (score == cards.length) {
        console.log("You won!!!")
    }
}
console.log(kortListe)
const shuffleQuick = arr => arr.sort(() => Math.random() - 0.5);
shuffleQuick(kortListe)
kortListe.forEach(elem => {
    let kort = document.createElement("div")
    // console.log(elem)
    kort.id = "box"
    kort.value = elem
    kort.style.backgroundColor = elem.value

    kort.addEventListener('click', async (event) => {
        console.log(elem.value)
        elem.flipped = true
        console.log(kortListe)

        kort.style.backgroundColor = elem.value
        pair.push(kort)
        await delay(1000)
        checkPair(pair)
        checkWin()

    })
    container.appendChild(kort)
    children.push(kort)

});
console.log(children)

startButton.addEventListener('click', () => {
    flippBack(kortListe)
})