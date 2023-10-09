const daysElement = document.querySelector(".days")
const hourElement = document.querySelector(".hours")
const minElement = document.querySelector(".minutes")
const secElement = document.querySelector(".seconds")


const second = 1000,
minute= 60 * second,
hour = 60 * minute ,
day = 24* hour;
const timerFunction =  ()=>{

    let now = new Date();

    let dd= String(now.getDate()).padStart(2,"0"),
        mm= String(now.getMonth()+1).padStart(2, "0"),
    yyyy = now.getFullYear();

    const enterMonth  = prompt("Enter the Month : ").padStart(2, "0");
    const enterDate= prompt("Enter the Date : ").padStart(2, "0");
    now= `${mm}/${dd}/${yyyy}`;
    let targetDate = `${enterMonth}/${enterDate}/${yyyy}`;

    if(now > targetDate){
        targetDate = `${enterMonth}/${enterDate}/${yyyy +1 }`;

    }
    setInterval(()=>{

        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();

        const difference = timer - today;
        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftmin = Math.floor((difference % hour) / minute);
        const leftSecond= Math.floor((difference % minute) / second);


        daysElement.innerText= leftDay;
        hourElement.innerText= leftHour;
        minElement.innerText= leftmin;
        secElement.innerText= leftSecond;

        console.log("I'am running")

    }, 0)
};

timerFunction()