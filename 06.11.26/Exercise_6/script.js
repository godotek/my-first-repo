let urls = [
    'https://wttr.in/Moscow?format=j1',
    'https://wttr.in/London?format=j1',
    'https://wttr.in/Paris?format=j1'
];

let requests = urls.map(function(url) {
    return fetch(url).then(function(response) {
        return response.json();
    });
});

Promise.all(requests)
    .then(function(results) {
        console.log('Москва: ' + results[0].current_condition[0].temp_C + '°C');
        console.log('Лондон: ' + results[1].current_condition[0].temp_C + '°C');
        console.log('Париж: ' + results[2].current_condition[0].temp_C + '°C');
    })
    .catch(function(error) {
        console.log('Ошибка: ' + error.message);
    });
