"use strict";
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd91adaa64emshd68f39fa627fc59p147aa2jsn26802af4fb6e',
        'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
    }
};
fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0', options)
    .then(response => response.json())
    .then(data => {
    const tableBody = document.querySelector('#data');
    data.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.make}</td>
        <td>${item.model}</td>
        <td>${item.type}</td>
        <td>${item.year}</td>
      `;
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(row);
    });
})
    .catch(error => console.log(error));
//# sourceMappingURL=index.js.map