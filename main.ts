basic.showLeds(`
    . # # . #
    . # # . #
    . # # . #
    # # # # .
    # # # # .
    `)
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 40) {
        basic.showIcon(IconNames.Pitchfork)
        basic.showString("¡Qué calorrrrrr!")
    } else {
        basic.showIcon(IconNames.Fabulous)
        basic.showString("Ahora està mejor!")
    }
})
