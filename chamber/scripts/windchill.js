let temp = parseFloat(document.querySelector("#wind-temperature").textContent.trim());
let speed = parseFloat(document.querySelector("#wind-speed").textContent.trim());
const chill = document.querySelector("#wind-chill");

/*Convert Celsius to Fareinheit*/
temp = (temp * 9/5) + 32;

if (temp <= 50 && speed > 3) {
  chill.textContent = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(2) + "ºF";
} else {
  chill.textContent = "N/A";
}


