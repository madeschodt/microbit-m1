function getDirection (deg: number) {
    angle = 360 / (directionName.length - 1)
    basic.showString(convertToText(directionName[Math.round(deg / angle)]))
    if (Math.round(deg / angle) <= 0.5) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
}
function repos () {
    for (let index = 0; index < 6; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(500)
        basic.showIcon(IconNames.Target)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            # # # # #
            # # . # #
            # # # # #
            . # # # .
            `)
        basic.pause(3000)
        basic.showIcon(IconNames.Target)
        basic.pause(500)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(3000)
    }
    basic.clearScreen()
}
function working25min () {
    led.setBrightness(150)
    basic.clearScreen()
    basic.showString("25min")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let workY = 0; workY <= 4; workY++) {
        for (let workX = 0; workX <= 4; workX++) {
            led.unplot(workX, workY)
            if (workY == 4) {
                music.playTone(440, music.beat(BeatFraction.Whole))
            }
            basic.pause(60000)
        }
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.clearScreen()
}
// https://www.youtube.com/watch?v=WqZ5t7Rvevw
input.onButtonPressed(Button.A, function () {
    led.setBrightness(20)
    actionX += 1
    if (actionX >= 5) {
        actionX = 0
        if (actionY > 3) {
            actionX = -1
            actionY = 0
            basic.showString("Reset")
            basic.clearScreen()
        } else {
            actionY += 1
        }
    }
    led.plot(actionX, actionY)
})
function Soundbellaciao () {
    music.setBuiltInSpeakerEnabled(true)
    music.setTempo(150)
    for (let index = 0; index < 2; index++) {
        music.playTone(165, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Half))
    }
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Double))
    music.setBuiltInSpeakerEnabled(false)
}
function getActions (x: number, y: number) {
    if (y == 0) {
        if (x == 0) {
            led.setBrightness(255)
            basic.showNumber(input.temperature())
        } else if (x == 1) {
            led.setBrightness(255)
            getDirection(input.compassHeading())
        } else if (x == 2) {
            Soundbellaciao()
        } else if (x == 3) {
            repos()
        } else {
            working25min()
        }
    }
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    getActions(actionX, actionY)
    actionX = -1
    actionY = 0
    basic.clearScreen()
})
let angle = 0
let directionName: string[] = []
let actionY = 0
let actionX = 0
actionX = -1
actionY = 0
directionName = [
"N",
"NE",
"E",
"SE",
"S",
"SW",
"w",
"NW",
"N"
]
