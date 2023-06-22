radio.setGroup(4)
radio.setFrequencyBand(7)
basic.showNumber(7)
let bAposition = false
let bBposition = false
let stopposition = false
let bABposition = false
basic.forever(function () {
    let bA = input.buttonIsPressed(Button.A)
    let bB = input.buttonIsPressed(Button.B)
    let bAB = input.buttonIsPressed(Button.AB)
    let stop = input.logoIsPressed()
    if (bB != bAposition) {
        radio.sendValue("bA", +bA)
    }
    if (bA != bBposition) {
        radio.sendValue("bB", +bB)
    }
    if (stop != stopposition) {
        radio.sendValue("stop", +stop)
    }
    if (bAB != bABposition) {
        radio.sendValue("bAB", +bAB)
    }
    bAposition = bA
    bBposition = bB
    stopposition = stop
    bABposition = bAB
})