const menu = [
  {
    id: 1,
    title: "Beef",
    chinese: "大眾牛肉鍋",
    category: "meet",
    price: 285,
    img: "./images/main1.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables. `,
  },
  {
    id: 2,
    title: "Beef Belly",
    chinese: "培根牛肉鍋",
    category: "meet",
    price: 275,
    img: "./images/main2.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables. `,
  },
  {
    id: 3,
    title: "Pork Shoulder",
    chinese: "梅花豬肉鍋",
    category: "meet",
    price: 269,
    img: "./images/main3.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables.`,
  },
  {
    id: 4,
    title: "Pork",
    chinese: "上選豬肉鍋",
    category: "meet",
    price: 259,
    img: "./images/main4.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables. `,
  },
  {
    id: 5,
    title: "Beef Belly",
    chinese: "培根牛肉鍋",
    category: "meet",
    price: 275,
    img: "./images/main5.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables. `,
  },
  {
    id: 6,
    title: "Pork Belly",
    chinese: "培根豬肉鍋",
    category: "meet",
    price: 275,
    img: "./images/main6.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables.`,
  },
  {
    id: 7,
    title: "Lamb",
    chinese: "上選羊肉鍋",
    category: "meet",
    price: 275,
    img: "./images/main7.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables.`,
  },
  {
    id: 8,
    title: "Chicken Breast",
    chinese: "雞胸肉片鍋",
    category: "meet",
    price: 265,
    img: "./images/main8.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables.  `,
  },
  {
    id: 9,
    title: "Duck Drumstick",
    chinese: "鴨腿肉片鍋",
    category: "meet",
    price: 259,
    img: "./images/main9.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables.`,
  },
   {
    id: 10,
    title: "Beef Sirloin",
    chinese: "沙朗牛肉鍋",
    category: "meet",
    price: 335,
    img: "./images/main10.jpg",
    desc: ``,
  },
  {
    id: 11,
    title: "Pork Cheek",
    chinese: "松阪豬肉鍋",
    category: "meet",
    price: 390,
    img: "./images/main11.jpg",
    desc: ``,
  },
  {
    id: 12,
    title: "Flat Iron Steak",
    chinese: "霜降牛肉鍋",
    category: "meet",
    price: 440,
    img: "./images/main12.jpg",
    desc: ``,
  },
  {
    id: 13,
    title: "Clams",
    chinese: "蛤蜊鍋",
    category: "seafood",
    price: 330,
    img: "./images/hotpot1.jpg",
    desc: ``,
  },
  {
    id: 14,
    title: "Oysters",
    chinese: "鮮蚵鍋",
    category: "seafood",
    price: 330,
    img: "./images/hotpot2.jpg",
    desc: ``,
  },
  {
    id: 15,
    title: "2-Kinds of Seafood",
    chinese: "海鮮雙拼鍋",
    category: "seafood",
    price: 390,
    img: "./images/hotpot3.jpg",
    desc: ``,
  },
  {
    id: 16,
    title: "Shrimp",
    chinese: "鮮蝦鍋",
    category: "seafood",
    price: 340,
    img: "./images/hotpot5.jpg",
    desc: ``,
  },
  {
    id: 17,
    title: "Fish Fillet",
    chinese: "魚片鍋",
    category: "seafood",
    price: 340,
    img: "./images/41.jpg",
    desc: ``,
  },
  {
    id: 17,
    title: "3-Kinds of Seafood",
    chinese: "三鮮鍋",
    category: "seafood",
    price: 380,
    img: "./images/42.jpg",
    desc: ``,
  },
  {
    id: 18,
    title: "Oysters With Choice of Meat",
    chinese: "鮮蚵肉片鍋",
    category: "seafood+meet",
    price: 349,
    img: "./images/hotpot10.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables.`,
  },
  {
    id: 19,
    title: "Fish Fillet with Choice of Meat",
    chinese: "鮮魚肉片鍋",
    category: "seafood+meet",
    price: 349,
    img: "./images/33.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables.`,
  },
  {
    id: 20,
    title: "Shrimp with Choice of Meat",
    chinese: "鮮蝦肉片鍋",
    category: "seafood+meet",
    price: 349,
    img: "./images/hotpot12.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables.`,
  },
  {
    id: 21,
    title: "3-Kinds of Seafood with Choice of Meat",
    chinese: "三鮮肉片鍋",
    category: "seafood+meet",
    price: 415,
    img: "./images/36.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables.`,
  },
  {
    id: 22,
    title: "Clams with Choice of Meat",
    chinese: "蛤蜊肉片鍋",
    category: "seafood+meet",
    price: 349,
    img: "./images/hotpot14.jpg",
    desc: `Can choose A or B <br>A is more meat <br>B is more vegetables.`,
  },
];


const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    console.log('item', item);
    
    return `
          <article class="menu-item">
          <img src=${item.img} alt="menu-item" class="photo" />

          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4>${item.chinese}</h4>
              <h4 class="price">NT$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>
    
    `
  })

  displayMenu = displayMenu.join("");

  console.log('displayMenu', displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

const displayMenuButtons = () => {
  const categories = menu.reduce((values, item) => {
    if( ! values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  }, ['all']);

  console.log('categories',categories);

  const categoryBtns = categories.map((category) => {
    return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
  })
  .join('');

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll('.filter-btn');
  console.log('filter-btn', filterBtns);
  filterBtns.forEach(  (btn) => {
    btn.addEventListener('click', (e) => {
      console.log('data-id', e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter( (menuItem) => {
        if(menuItem.category === category){
          return menuItem;
        }
      });
      if(category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

