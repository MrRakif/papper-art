var main = document.querySelector("main")
var btn = document.querySelector("button")

btn.addEventListener("click",function(){
    
    var div = document.createElement("div")
       

    var x = Math.random()*85
    var y = Math.random()*85
    var z = Math.random()*85
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    console.log(c1,c2,c3
    );
    
   
    
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.backgroundColor = "red";
    div.style.position = "absolute";
    div.style.left = x + "%"
    div.style.top = y + "%"
    div.style.rotate = z + "deg"
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    


    main.appendChild(div)

})