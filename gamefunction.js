var colors=['Gold','White','Black'];

function StartGame(level)
   {
    var score= 0;
    document.getElementById("demo1").innerHTML=colors[0];
    score = document.getElementById("demo2").value

    var easy = document.getElementById("easy").value;
    var medium = document.getElementById("medium").value;
    var hard = document.getElementById("hard").value;
 console.log("start");

 switch (level) {
   case easy:
   console.log("easy");
   setInterval(randomize, 2500);
     break;

   case medium:
     console.log("medium");
     setInterval(randomize, 2000);
     break;

   case hard:
     console.log("hard");
     setInterval(randomize, 1500);
     break;
 }
}

function randomize()
   {
       shuffleArray();
       document.getElementById("demo1").innerHTML=colors[0];
   }

function shuffleArray()
   {
       for (var i = colors.length - 1; i > 0; i--) {
           var j = Math.floor(Math.random() * (i + 1));
           var temp = colors[i];
           colors[i] = colors[j];
           colors[j] = temp;
       }
   }

function game(val)
    {
    var score = 0;
    score = document.getElementById("demo2").value;
    var color=  document.getElementById("demo1").innerHTML;
    if (color == val)
        score++;
        else
        score--;
        document.getElementById("demo2").value=score;
    }
