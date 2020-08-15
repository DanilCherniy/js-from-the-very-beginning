const countryName = "Аргентина";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName.toUpperCase()[0] + countryName.toLowerCase().slice(1); // Write code on this line
  switch (country) {
    case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    // Write code under this line
  }
}
if (price) {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else if (countryName == null) {
  message = CANCELED_BY_USER;
} else {
  message = NO_DELIVERY;
}
console.log(message);
