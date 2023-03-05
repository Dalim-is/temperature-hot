const API_KEY ='0ef3da558662b630a64e88a867f60b33'

const loadTemperature = city =>{
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
 fetch(url)
.then(res => res.json())
.then(data => displayTemperature(data));
}
const displayTemperature = data =>{

    setinnerTextById('temperature',data.main.temp )
    setinnerTextById('condition', data.weather[0].main)
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;

}
const setinnerTextById = (id, text)=>{
    const temperature = document.getElementById(id);
    temperature.innerText = text; 
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('input-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})


loadTemperature('dhaka');