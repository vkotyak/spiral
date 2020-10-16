let oldy = 0
let oldx = 0
let N = 0
let x = 0
let y = 0
let r = 0
let d = 0
let k = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    oldy = 0
    oldx = 0
    N = 5
    x = -1
    y = 0
    r = 1
    d = 1
    while (d < 2 * N) {
        k = 0
        while (k < N - d / 2) {
            y += (d % 4 - 1) % 2
            x += 0 - (d % 4 - 2) % 2
            r += 1
            led.plot(y, x)
            basic.pause(100)
            if (!(x == 0 && y == 0)) {
                led.unplot(oldy, oldx)
            }
            oldy = y
            oldx = x
            k += 1
        }
        d += 1
    }
})
basic.forever(function () {
	
})
