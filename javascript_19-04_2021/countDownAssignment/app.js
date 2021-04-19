const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');

const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
//console.log(items)
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate();
//let futureDate = new Date(2021, 3, 25, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
//console.log(futureDate)


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()]


giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

//future time in milliseconds

const futureTime = futureDate.getTime();
//console.log(futureTime)

function getRemainingTime() {
    const todayTime = new Date().getTime()
        // console.log(todayTime)
    const timeDifference = futureTime - todayTime
        //console.log(timeDifference)

    // 1s = 1000ms
    //1m = 60s
    //1hr = 60min
    //1 day = 24 hr

    //values in miliseconds

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    //calculate all value

    let days = timeDifference / oneDay;
    // console.log(days)
    days = Math.floor(days)
    let hours = Math.floor((timeDifference % oneDay) / oneHour)
        //console.log(hours)
    let minutes = Math.floor((timeDifference % oneHour) / oneMinute)
    let seconds = Math.floor((timeDifference % oneMinute) / 1000)

    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        } else {
            return item;
        }
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    })


    if (timeDifference < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, This giveaway has expired</h4>`
    }

}
//countdown

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime()