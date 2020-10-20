basic.forever(function () {
    for (let A = 0; A <= 4; A++) {
        for (let B = 0; B <= 4; B++) {
            if ((A + B) % 2 == 0) {
                led.plot(A, B)
            } else {
                led.unplot(A, B)
            }
        }
    }
})
