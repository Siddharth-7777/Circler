    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var cx;
    var cy;
    
    var mouseEvent = "";
    var color = "blue"
    var width = 2;
    var radius = 60;

    canvas.addEventListener("mousedown", mymousedown);

    function mymousedown() {
        color = document.getElementById("color").value
        width = document.getElementById("width").value
        radius = document.getElementById("radius").value
        mouseEvent = "mouseDown"
    }

    canvas.addEventListener("mouseup", mymouseup);

    function mymouseup() {
        mouseEvent = "mouseUP"
    }

    canvas.addEventListener("mouseleave", mymouseleave);

    function mymouseleave() {
        mouseEvent = "mouseUP"
    }
    
    canvas.addEventListener("mousemove", mymousemove);

    function mymousemove(e) {
        cx = e.clientX - canvas.offsetLeft;
        cy = e.clientY - canvas.offsetTop;

        if (mouseEvent = "mouseDown") {
            ctx.beginPath()
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.arc(cx,cy,radius,0,2 * Math.PI)
            ctx.stroke()
        }
        
    }

    function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }



    
    