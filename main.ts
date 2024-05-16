let age = 0
let old = 0
basic.forever(function on_forever() {
    
    age = 5
    old = 10
    if (old >= age) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
