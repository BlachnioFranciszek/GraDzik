let number = 1;
let score=0;
let last=-1;
const boar = document.getElementById("boar");
const numberDisplay = document.getElementById("number");
const scoreElement = document.getElementById("score");
const czasReakcjiP = document.getElementById("czasReakcji");
const sredniCzasReakcjiP = document.getElementById("sredniCzasReakcji");
const listaTrudnosci = document.getElementById("listaWybierana");
const startbutton=document.getElementById("start");
const stopbutton=document.getElementById("stop");
const img = document.getElementById('boar');
var interwalCzasowy;
var started=false;
var startTime = performance.now();
var czasReakcji = new Array(0, 0);
var interwal = 1000;



function updateNumber() {
    if (started==true)
    {
        if (listaTrudnosci.value == 4 || listaTrudnosci.value == 5)
        {
            startTime = performance.now();
            number = Math.floor(Math.random()*1000+1);
            numberDisplay.textContent = number;
            if (number % 7 === 0 || number.toString().includes('7')) {
                boar.style.backgroundColor = "yellow";  
            } else {
                boar.style.backgroundColor = "";  
            }
        }
        else 
        {
            startTime = performance.now();
            number++;
            numberDisplay.textContent = number;
            if (number % 7 === 0 || number.toString().includes('7')) {
                boar.style.backgroundColor = "yellow";  
            } else {
                boar.style.backgroundColor = "";  
            }
        }

    }
  
}


stopbutton.addEventListener("click",()=> {
    clearInterval(interwalCzasowy);
    started = false;
    img.style.filter = 'brightness(1) saturate(1) contrast(1) hue-rotate(30deg)';
    document.body.style.backgroundColor='rgb(239, 243, 189)';
    scoreElement.textContent=0;
    scoreElement.style.color = "gray";
    czasReakcjiP.textContent='';
    sredniCzasReakcjiP.textContent='';
    czasReakcji[0] = 0;
    last=-1;
    score = 0;
    number = 0;
}  
)


startbutton.addEventListener("click",()=> {
    if (started==false)
    {
        switch (listaTrudnosci.value)
        {
            case '1':
                interwal = 1000;
                document.body.style.backgroundColor='rgb(192, 252, 252)';
                break;
            case "2":
                interwal = 500;
                document.body.style.backgroundColor='yellow';
                img.style.filter = 'brightness(1) saturate(0.3) contrast(1) hue-rotate(30deg)';
                break;
            case "3":
                interwal = 250;
                document.body.style.backgroundColor='rgb(255, 51, 0)';
                img.style.filter = 'brightness(1) saturate(0.5) contrast(2.3) hue-rotate(30deg)';
                break;
            case "4":
                interwal = 300;
                document.body.style.backgroundColor='rgb(80, 2, 80)';
                img.style.filter = 'brightness(1) saturate(1.5) contrast(3.3) hue-rotate(30deg)';
                break;
                
            case "5":
                document.body.style.backgroundColor='rgb(0, 0, 0)';
                interwal = Math.floor(Math.random()*300+200);

                img.style.filter = 'brightness(0.8) saturate(1.5) contrast(5.3) hue-rotate(30deg)';
                break;
        }
        started=true;
        interwalCzasowy = setInterval(updateNumber, interwal);
        }
        
        }
)

boar.addEventListener("click", () => {
    if (started==true)
    {
        if (number % 7 === 0 || number.toString().includes('7')) {
            if (last!=number)
            {
                var endTime = performance.now();
                var timeTaken = endTime - startTime;
                czasReakcji[0] += 1;
                czasReakcji[1] += timeTaken;
                score+=1;
                scoreElement.textContent=score;
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
    }
    
});