const product = { name: 'Наушники', price: 5000 };

function showProduct(discount, city) {
    let finalPrice = this.price - (this.price * discount / 100);
    console.log("Товар: " + this.name);
    console.log("Цена со скидкой: " + finalPrice);
    console.log("Город: " + city);
}

showProduct.call(product, 10, 'Москва');

showProduct.apply(product, [15, 'Санкт Петербург']);