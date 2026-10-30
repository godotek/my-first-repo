

const products = [
  { name: "Ноутбук", price: 75000, category: "Техника" },
  { name: "Мышь", price: 1500, category: "Аксессуары" },
  { name: "Клавиатура", price: 3500, category: "Аксессуары" },
  { name: "Монитор", price: 22000, category: "Техника" },
  { name: "Наушники", price: 5000, category: "Аксессуары" }
];

products.forEach(function(product) {
  console.log(product.name + " - " + product.price + " руб.");
});

const cheapProducts = products.filter(function(product) {
  return product.price < 5000;
});
console.log(cheapProducts);

const namesArray = products.map(function(product) {
  return product.name;
});
console.log(namesArray);

const firstTechnique = products.find(function(product) {
  return product.category === "Техника";
});
console.log(firstTechnique);

const discountedPrices = products.map(function(product) {
  return product.price * 0.9;
});
console.log(discountedPrices);

const accessories = products.filter(function(product) {
  return product.category === "Аксессуары" && product.price <= 4000;
});
const accessoryNames = accessories.map(function(product) {
  return product.name;
});
console.log(accessoryNames);