function createDashes(){
    for (let i = 0; i < 360 ; i+=6) {
        let svg1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        svg.appendChild(svg1);
        svg1.setAttribute('transform', 'rotate('+ i +' 50 50)')
        svg1.setAttribute('x1', '50');
        svg1.setAttribute('y1', '11');
        svg1.setAttribute('x2', '50');
        svg1.setAttribute('y2', '8.5');
        svg1.setAttribute('stroke', 'black');

        if(i % 30 === 0 ){
            svg1.setAttribute('stroke', 'red');
            svg1.setAttribute('y1', '13');
            svg1.setAttribute('x2', '50');
            svg1.setAttribute('stroke-width', '1.5');
        }
    }
}

function rotate(el, deg) {
    el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
}




