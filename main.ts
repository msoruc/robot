hummingbird.startHummingbird()
basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1024
    )
    led.plotBarGraph(
    input.acceleration(Dimension.Y),
    1024
    )
    if (input.logoIsPressed()) {
        hummingbird.setPositionServo(FourPort.Two, input.rotation(Rotation.Pitch) + 3)
    } else {
        hummingbird.setPositionServo(FourPort.One, input.rotation(Rotation.Pitch) + 3)
    }
    if (input.buttonIsPressed(Button.AB)) {
        hummingbird.setRotationServo(FourPort.Three, 100)
        hummingbird.setRotationServo(FourPort.Four, 100)
    } else if (input.buttonIsPressed(Button.A)) {
        hummingbird.setRotationServo(FourPort.Three, 100)
    } else if (input.buttonIsPressed(Button.B)) {
        hummingbird.setRotationServo(FourPort.Four, 100)
    } else {
        hummingbird.setRotationServo(FourPort.Three, 0)
        hummingbird.setRotationServo(FourPort.Four, 0)
    }
})
