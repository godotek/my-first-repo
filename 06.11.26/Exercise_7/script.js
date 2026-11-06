let urls = [
    'https://wttr.in/Moscow?format=j1',
    'https://wttr.inn/Moscow?format=j1',
    'https://wttr.in/Paris?format=j1'
];

let requests = urls.map(function(url) {
    return fetch(url).then(function(response) {
        if (!response.ok) {
            throw new Error('Ошибка сервера');
        }
        return response.json();
    });
});

Promise.allSettled(requests)
    .then(function(results) {
        results.forEach(function(result, index) {
            if (result.status === 'fulfilled') {
                let temp = result.value.current_condition[0].temp_C;
                console.log('Город ' + (index + 1) + ' (успех): Температура ' + temp + '°C');
            } else {
                console.log('Город ' + (index + 1) + ' (ошибка): ' + result.reason.message);
            }
        });
    });
