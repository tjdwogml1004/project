input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
})
basic.clearScreen()
let 기준값 = 100
let LED꺼짐 = 0
let 음악정지 = 0
basic.forever(function () {
    if (input.lightLevel() > 기준값) {
        if (!(음악정지)) {
            music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        }
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        basic.showIcon(IconNames.Diamond)
    } else {
        if (!(LED꺼짐)) {
            pins.digitalWritePin(DigitalPin.P13, 1023)
            pins.digitalWritePin(DigitalPin.P14, 1023)
            pins.digitalWritePin(DigitalPin.P15, 1023)
            음악정지 = 0
        }
        basic.showIcon(IconNames.SmallDiamond)
    }
})
