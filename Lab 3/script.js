const listItemEl = document.getElementById("list-item");
console.log(listItemEl);

const listItem = [
  {
    id: 1,
    price: 100,
    name: "UT NY POP ART Archive Áo Thun Ngắn Tay",
    img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/473111/item/goods_09_473111.jpg?width=320",
  },
  {
    id: 2,
    price: 200,
    name: "UT NY POP ART Archive Áo Thun Ngắn Tay (Keith Haring)",
    img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/473108/item/goods_00_473108.jpg?width=320",
  },
];

listItem.map((item) => {
  const cardEl = document.createElement("div");

  const pName = document.createElement("p");
  pName.innerText = item.name;

  const pPrice = document.createElement("p");
  pPrice.innerText = item.price;

  const imgEl = document.createElement("img");
  imgEl.src = item.img;

  cardEl.appendChild(pName);
  cardEl.appendChild(pPrice);
  cardEl.appendChild(imgEl);

  listItemEl.appendChild(cardEl);
});
