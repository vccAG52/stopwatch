let Start = 0
let Elapsed_Time = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    Elapsed_Time = input.runningTime() - Start
    basic.showNumber(Elapsed_Time / 1000)
})
basic.forever(function () {
	
})
