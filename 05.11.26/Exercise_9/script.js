let btnRegular = document.querySelector("#regular");
let btnArrow = document.querySelector("#arrow");

btnRegular.addEventListener("click", function(event) {
    console.log("Обычная this:", this);
    console.log("Обычная event.currentTarget:", event.currentTarget);
});

btnArrow.addEventListener("click", (event) => {
    console.log("Стрелочная this:", this);
    console.log("Стрелочная event.currentTarget:", event.currentTarget);
});
