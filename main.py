def on_forever():
    if input.light_level() < 5:
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 255)
    else:
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
    basic.pause(1000)
basic.forever(on_forever)
