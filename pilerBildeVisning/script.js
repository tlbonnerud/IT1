const LA = document.getElementById("LA")
const RA = document.getElementById("RA")
const figur = document.getElementById("figur")

const bilder = ["media/femkant.png", "media/firkant.png", "media/hjerte.png", "media/kryss.png"]

bilder.unshift(bilder.pop());

const nesteBilde = (retning) => {
    console.log("hello?")
    if (retning == "L") {
        bilder.unshift(bilder.pop());
        console.log(bilder)
        figur.src = bilder[0]
    } else if (retning == "R") {
        bilder.push(bilder.shift());
        console.log(bilder)
        figur.src = bilder[0]
    }

}
LA.addEventListener("click", () => {
    console.log("venstre pil!")
    nesteBilde("L")

})
RA.addEventListener("click", () => {
    console.log("høyre pil")
    nesteBilde("R")

})