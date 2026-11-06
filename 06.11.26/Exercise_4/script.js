function checkWeather(temperature) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (temperature > 0) {
                resolve("Тепло!");
            } else {
                reject(new Error("Холодно!"));
            }
        }, 1000);
    });
}

checkWeather(5)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error.message);
    });

checkWeather(-5)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error.message);
    });
