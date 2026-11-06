let urls = ['https://wttr.in/Moscow?format=j1', 'https://wttr.inn/Moscow?format=j1', 'https://wttr.in/Paris?format=j1'];

let requests = urls.map(function(url) {
    return fetch(url).then(function(response) { return response.json(); });
});

Promise.allSettled(requests).then(function(results) {
    results.forEach(function(res, i) {
        if (res.status === 'fulfilled') {
            console.log('Город ' + (i + 1) + ': ' + res.value.current_condition[0].temp_C + '°C');
        } else {
            console.log('Город ' + (i + 1) + ': Ошибка');
        }
    });
});
