const cityNameSearch = document.getElementById('cityNameSearch');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const city_name = document.getElementById('city_name');
const hide = document.querySelector('.middle_layer');   //DOM for data hiding
const submitBtn = document.getElementById('submitBtn');



const getInfo = async(event) =>{
    event.preventDefault();
    let cityValue = cityNameSearch.value; 

    if(cityValue == ""){
        city_name.innerText = `Please Write your city name before search !`;
        hide.classList.add('data_hide');  //adding css property to hide data

    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=451c84800e9412b73f1b98dc8839c593`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

        temp_kelv = arrData[0].main.temp-273.15;
        temp_celc = temp_kelv.toFixed(2) + `°C`;
        temp.innerText = temp_celc;

        temp_status.innerText = arrData[0].weather[0].main;

        const tempMood = arrData[0].weather[0].main;
        //condition of weather icon sunny or cloudy
        if (tempMood == "Clear") {
            temp_status.innerHTML = `${
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>"} ${tempMood} `;
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML = `${
                "<i class='fas  fa-cloud' style='color: #8B8B8B;'></i>"} ${tempMood} `;
            } else if (tempMood == "Rain") {
            temp_status.innerHTML = `${
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>"} ${tempMood} `;
            }else if (tempMood == "Light-rain") {
                temp_status.innerHTML = `${
                    "<i class='fas fa-tint' style='color: #a4b0be;'></i>"} ${tempMood} `;
            }else if (tempMood == "Mist") {
                temp_status.innerHTML = `${
                    "<i class='fas fa-tint' style='color: #a4b0be;'></i>"} ${tempMood} `;
            }else if (tempMood == "Fog") {
                temp_status.innerHTML = `${
                    "<i class='fas fa-smog' style='color: #a4b0be;'></i>"} ${tempMood} `;
            }else if (tempMood == "Haze") {
                temp_status.innerHTML = `${
                    "<i class='fas fa-smog' style='color: #8B8B8B;'></i>"} ${tempMood} `;
            } else {
            temp_status.innerHTML = `${
                "<i class='fas  fa-sun' style='color:#eccc68;'></i>"} ${tempMood} `;
            }
            hide.classList.remove('data_hide'); // remove data hide if confition are ok

        

        }catch{
            city_name.innerText = `Please enter the city name Properly ❌`;
            hide.classList.add('data_hide');
        
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);