function drawClock() {

     let date = new Date();
     let hours = date.getHours();
     let minutes = date.getMinutes();
     let seconds = date.getSeconds();
    //Contour
    ctx.clearRect(0,0,500,500);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.arc(250, 250, 245, 0, 2 * pi);
    ctx.fill();
    ctx.stroke();

    //Center point
    ctx.beginPath();
    ctx.arc(250, 250, 15, 0, 2 * pi);
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.translate(250, 250);

    //dashes
    for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        if(i % 5 ===  0){
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'red';
        }
        ctx.moveTo(220, 0);
        ctx.lineTo(230, 0);
        ctx.rotate((2 * pi) / 60);
        ctx.stroke();
    }

    //numbers
    for (num = 1; num < 13; num++) {
        ctx.beginPath();
        ctx.font = "50px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        segment = num * pi / 6;//1 hour (30 grad)
        ctx.rotate(segment);
        ctx.translate(0, -radius * 0.75);
        ctx.rotate(-segment);
        ctx.fillText(num, 0, 5);
        ctx.rotate(segment);
        ctx.translate(0, radius * 0.75);
        ctx.rotate(-segment);
        ctx.stroke();
    }

    ctx.translate(-250, -250);

    //draw hours
    ctx.beginPath();
    ctx.translate(250, 250);
    ctx.rotate(2 * pi / 12 * hours);
    ctx.stroke();
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.lineTo(0,-110);
    ctx.stroke();

    //draw minutes
    ctx.beginPath();
    ctx.rotate(2 * pi / 12 * (12 - hours));
    ctx.lineWidth = 10;
    ctx.rotate(2 * pi / 60 * (minutes));
    ctx.moveTo(0,0);
    ctx.lineTo(0,-180);
    ctx.stroke();

    ctx.beginPath();
    ctx.rotate(2 * pi / 60 * (60 - minutes));
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.rotate(2 * pi / 60 * seconds);
    ctx.moveTo(0,0);
    ctx.lineTo(0,-210);
    ctx.stroke();
    ctx.rotate(2 * pi / 60 * (60 - seconds ));
    ctx.translate(-250,-250)
}


