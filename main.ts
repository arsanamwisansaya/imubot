function SUPPER_IDOL () {
    music.setTempo(120)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        SUPPER_IDOL()
    }
    SUPPER_IDOL()
})
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
})
