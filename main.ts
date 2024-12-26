basic.forever(function on_forever() {
    if (input.lightLevel() < 5) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 255)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
    }
    
    basic.pause(1000)
})
