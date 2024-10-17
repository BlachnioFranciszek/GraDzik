let number = 1;
let score=0;
let last=-1;
const boar = document.getElementById("boar");
const numberDisplay = document.getElementById("number");
const scoreElement = document.getElementById("score");
function updateNumber() {
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
            score+=1;
            scoreElement.textContent=score;
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
        scoreElement.style.color = "greenyellow";
    }
});

/*
\
// Start timing
let startTime = performance.now();

// Your code or function to time
// Example: A loop
for (let i = 0; i < 1000000; i++) {
    // Looping
}

// End timing
let endTime = performance.now();

// Calculate the time difference
let timeTaken = endTime - startTime;
console.log(`Time taken: ${timeTaken} milliseconds`);


*/