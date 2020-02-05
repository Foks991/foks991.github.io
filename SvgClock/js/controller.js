createDashes();

setInterval(function() {
    let date = new Date()
    rotate(secondArrow, 6*date.getSeconds())
    rotate(minuteArrow, 6*date.getMinutes())
    rotate(hourArrow, 30*(date.getHours()%12) + date.getMinutes()/2)
}, 1)
