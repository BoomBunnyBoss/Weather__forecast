fetch("http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no")
    .then(function (resp) { return resp.json()})
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-region').innerHTML = data.location.region;
        document.querySelector('.package-name').innerHTML = data.location.name;
        document.querySelector('.price').innerHTML = (data.current.temp_c) + '&deg  ';
        document.querySelector('.disclaimer').innerHTML = data.current.condition.text;
        document.querySelector('.fitures').innerHTML = '<img scr="https://cdn.weatherapi.com/weather/64x64/day/113.png">';
    })
    .catch(function () {

    });

// неудачные попытки
// const promise = fetch("http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no");

// let weatherList = [];

// promise
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     weatherList = data.results;
//     render();
//   });

// function render() {
//   const weather = weatherList.filter(function (elm) {
//     const isWeather = elm.name === "Kiev";
//     return isWeather;
//   });

//   weather.forEach(function (element) {
//     document.getElementById("app").insertAdjacentHTML(
//       "beforeend",
//       `
//         <tr>
//         <td>${element.name}</td>
//         <td>  
//           <div>${element.region}</div>
//           <div>${element.country}</div>
//         </td>
//         </tr>
//         `
//     );
//   });
// }

// console.log(weatherList);

// const promise = fetch('http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no')

// let list = [];

// promise
//   .then(function (response) {
//     return response.json();
//   })
//   .then((data) => {
//     list = data.results;
//     render ();
//   });

// function render () {
//   list.forEach(function (element) {
//     document.getElementById("app").insertAdjacentHTML(
//       "beforeend",
//       `
//         <tr>
//         <td>${element.name}</td>
//         <td>  
//           <div>${element.species}</div>
//           <div>${element.status}</div>
//         </td>
//         <td>
//           <div>${element.gender}</div>
//           <div>${element.type}</div>
//         </td>
//         </tr>
//         `
//     );
//   });
// }
//   console.log(list);


