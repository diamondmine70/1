input.onSound(DetectedSound.Loud, function () {
    כככ = !(כככ)
    if (כככ) {
        basic.showIcon(IconNames.Snake)
        music.playMelody("C C5 A F D B E G ", 120)
    } else {
        basic.clearScreen()
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
let כככ = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.forever(function () {
	
})
