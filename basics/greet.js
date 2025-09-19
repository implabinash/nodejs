const names = process.argv[2];

const hour = new Date().getHours();

const greet = (hour) => {
    if (hour > 6 && hour < 12) {
        return "Good Morning";
    } else if (hour < 16) {
        return "Good Afternoon";
    } else if (hour < 20) {
        return "Good Evening";
    } else {
        return "Good Night";
    }
};

console.log(`${greet(hour)}, ${names}`);
