let startTime = 10;
const finishTime = 0;

const timer = setInterval(() => {
    console.log(startTime--);

    if (startTime < finishTime) {
        clearInterval(timer);
    }
}, 500);