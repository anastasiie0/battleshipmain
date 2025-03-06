radio.onReceivedValue(function (name, value) {
    if (name == "guess") {
        if (boats.indexOf(value) < 0) {
            radio.sendValue("result", 0)
        } else {
            radio.sendValue("result", 1)
            led.unplot(value / 5, value % 5)
        }
    }
    if (name == "results") {
        basic.showNumber(value)
    }
})
let y = 0
let x = 0
let boats: number[] = []
boats = []
for (let index = 0; index <= 4; index++) {
    x = randint(0, 4)
    y = randint(0, 4)
    if (led.point(x, y) == true) {
        index += -1
    } else {
        led.plot(x, y)
        boats.push(x * 5 + y)
    }
}
radio.sendValue("ready", 0)
