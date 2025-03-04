const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes();
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
const paddedHours = hours.toString().padStart(2, "0");
const paddedMinutes = minutes.toString().padStart(2, "0");
console.log(paddedHours, paddedMinutes, ampm);
const time = getid("time");
time.innerHTML = `
<div class="w-[70px] h-[70px] bg-white rounded-lg flex items-center justify-center">
          <h2 class="dosis-font text-3xl">${paddedHours}</h2>

        </div>
        <div class="dosis-font w-[70px] h-[70px] bg-white rounded-lg flex items-center justify-center">
          <h2 class="dosis-font text-3xl">${paddedMinutes}</h2>

        </div>
        <div class="dosis-font w-[70px] h-[70px] bg-white rounded-lg flex items-center justify-center">
          <h2 class="dosis-font text-3xl">${ampm}</h2>

        </div>
`;
