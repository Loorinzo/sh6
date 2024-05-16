age = 0
old = 0

def on_forever():
    global age, old
    age = 5
    old = 10
    if old >= age:
        basic.show_icon(IconNames.YES)
    else:
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)
