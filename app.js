const menu = [
  {
    id: 1,
    title: "item #1",
    category: "category",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate totam quas minima laudantium deserunt pariatur autem at cupiditate repellendus iste?`,
  },
  {
    id: 2,
    title: "item #2",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate totam quas minima laudantium deserunt pariatur autem at cupiditate repellendus iste?`,
  },
  {
    id: 3,
    title: "item #3",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate totam quas minima laudantium deserunt pariatur autem at cupiditate repellendus iste?`,
  },
  {
    id: 4,
    title: "item #4",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate totam quas minima laudantium deserunt pariatur autem at cupiditate repellendus iste?`,
  },
  {
    id: 5,
    title: "item #5",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate totam quas minima laudantium deserunt pariatur autem at cupiditate repellendus iste?`,
  },
  {
    id: 6,
    title: "item #6",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate totam quas minima laudantium deserunt pariatur autem at cupiditate repellendus iste?`,
  },
  {
    id: 7,
    title: "item #7",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate totam quas minima laudantium deserunt pariatur autem at cupiditate repellendus iste?`,
  },
  {
    id: 8,
    title: "item #8",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate totam quas minima laudantium deserunt pariatur autem at cupiditate repellendus iste?`,
  },
  {
    id: 9,
    title: "item #9",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate totam quas minima laudantium deserunt pariatur autem at cupiditate repellendus iste?`,
  },
];

const sectionCenter = document.querySelector(".sectionCenter");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
