let number = 1;
let score=0;
let last=-1;
const boar = document.getElementById("boar");
const numberDisplay = document.getElementById("number");
const scoreElement = document.getElementById("score");
const czasReakcjiP = document.getElementById("czasReakcji");
const sredniCzasReakcjiP = document.getElementById("sredniCzasReakcji");
const  = document.
var startTime = performance.now();
var czasReakcji = new Array(0, 0);

function updateNumber() {
    startTime = performance.now();
    number++;
    numberDisplay.textContent = number;
    if (number % 7 === 0 || number.toString().includes('7')) {
        boar.style.backgroundColor = "yellow";  
    } else {
        boar.style.backgroundColor = "";  
    }
}


setInterval(updateNumber, 1000); 

boar.addEventListener("click", () => {
    if (number % 7 === 0 || number.toString().includes('7')) {
        if (last!=number)
        {
            var endTime = performance.now();
            var timeTaken = endTime - startTime;
            czasReakcji[0] += 1;
            czasReakcji[1] += timeTaken;
            score+=1;
            scoreElement.textContent=score;
            //Math.round(timeTaken, 3);
            //console.log(endTime + ' ' + startTime + ' ' + timeTaken + ' ' + czasReakcji);
            czasReakcjiP.textContent=Math.round(timeTaken)+'ms';
            sredniCzasReakcjiP.textContent=Math.round(czasReakcji[1]/czasReakcji[0])+'ms';
        }

        last=number;
       
    } else {
        score-=1;
        scoreElement.textContent=score;
    }
    if (score<0)    
    {
        scoreElement.style.color = "red";
    }
    else if (score==0)
    {
        scoreElement.style.color = "gray";
    }
    else
    {
        scoreElement.style.color = 'rgb(69, 221, 22)';
    }

    if (timeTaken>350)    
    {
        czasReakcjiP.style.color = "red";
    }
    else if (timeTaken>180)
    {
        czasReakcjiP.style.color = "gray";
    }
    else
    {
        czasReakcjiP.style.color = "green";
    }

    if (czasReakcji[1]/czasReakcji[0]>350)    
    {
        sredniCzasReakcjiP.style.color = "red";
    }
    else if (czasReakcji[1]/czasReakcji[0]>180)
    {
        sredniCzasReakcjiP.style.color = "gray";
    }
    else
    {
        sredniCzasReakcjiP.style.color = "green";
    }
});