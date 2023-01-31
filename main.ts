input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    Player_A += 1
    Rounds += 1
    update_scoreboard()
    basic.clearScreen()
})
function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + Player_A)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + Player_B)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    Ties += 1
    Rounds += 1
    update_scoreboard()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    Player_B += 1
    Rounds += 1
    update_scoreboard()
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("You better win")
    Rounds = 0
    Player_A = 0
    Player_B = 0
    Ties = 0
    basic.pause(2000)
    update_scoreboard()
}
let Ties = 0
let Player_B = 0
let Rounds = 0
let Player_A = 0
Reset()
