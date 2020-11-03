radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    serial.writeValue("Wind", receivedNumber)
})
let Pitch = 0
radio.setGroup(1)
basic.showString("Wind!")
