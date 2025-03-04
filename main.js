const maincontainer = getid("weather-info");
const searchbtn = getid("search-btn");
searchbtn.addEventListener("click", (e) => {
  let loc = getText("location");
  e.preventDefault();
  console.log("click button");
  getdata(loc);
  console.log(loc);
  console.log(maincontainer.children);
});


// const city='dhaka';
const apikey = "39919a7fd62aff4dea334d37a7352b4a";

// function getData() {
//     let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.log('Oops! Something went wrong:', error);
//         });
// }
// there is a new way to extract data from api link using async and await
async function getdata(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
  );
  const data = await response.json();
  console.log(data.main.humidity.unit);
  showData(data);
}

const arrowf = () => {
  console.log("this is arrow function");
};

const showData = (data) => {
  maincontainer.innerHTML = "";
  let temperature = Math.ceil(data.main.temp - 273);
  let city_name = data.name;
  let wind_speed = data.wind.speed;
  let icon = data.weather[0].icon;
  let cloud = data.weather[0].description;
  let humidity = data.main.humidity;
  console.log(temperature, city_name, wind_speed, icon, cloud, humidity);
  maincontainer.insertAdjacentHTML(
    "beforeend",
    `
        <div class="all-info w-[20rem] h-[25rem] md:w-[25rem] md:h-[27.5rem]  bg-[#fafafa] rounded-lg md:p-3 p-5">
          <h1 class="dosis-font  text-[#4DA1A9] text-3xl text-center ">${city_name.toUpperCase()}</h1>
          <h2 class=" text-[#41644A] mt-3 text-[1.5rem] dosis-font text-center">${cloud.toUpperCase()}</h2>
          <div class="flex items-center gap-5">
          
            
            
            <h1 class="dosis-font text-[#4DA1A9] text-[7rem] md:text-[8rem] ">${temperature}&deg</h1>
            <div class="space-y-0">
              <div>
                <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="">
              </div>
              <div class="flex items-center gap-2">
                
                <i class="ri-cloud-windy-line text-6xl text-[#627495]"></i>
                <h2 class="dosis-font text-xl text-[#457565]">${wind_speed} mph</h2>

              </div>
              <div class="flex items-center gap-5 mt-4">
              <i class="ri-drop-line text-4xl text-[#75456d]"></i>
              <h2 class="dosis-font text-2xl text-[#343362]">${humidity}%</h2>

            </div>
            </div>

          </div>
          
          
          
          

        </div>
        
    `
  );
};
