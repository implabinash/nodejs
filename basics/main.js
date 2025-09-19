import { greet } from "./greet.js";

const names = process.argv[2];

const hour = new Date().getHours();

console.log(`${greet(hour)}, ${names}`);
