<!DOCTYPE html>
<html>
<head>
    <title>Jiggle Into JavaScript</title>
    <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> -->
</head>
<body>

    <p>Press the buttons to change the box!</p>

    <div id="box" style="height:150px; width:150px; background-color:orange; margin:25px"></div>

    <button id="button1">Grow</button>
    <button id="button2">Blue</button>
    <button id="button3">Fade</button>
    <button id="button4">Reset</button>

    <script type="text/javascript" src="javascript.js">
    
        {document.getElementById("button1").addEventListener("click", function(Grow){
            
            document.getElementById("box").style.height = "250px"
        })

        document.getElementById("button2")addEventListener("click", function(){

            document.getElementById("box").style.color = "Blue"});

        document.getElementById("button3").addEventListener("click", function (var opacity = "0"){

            document.getElementById("box").style.var opacity = 9)}

        document.getElementById("button4").addEventListener("click", function(reset){

            document.getElementById("box").style.reset})

    </script>

</body>
</html>
