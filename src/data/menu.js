export const menu = {
  burgers: {
    filters: [
      {
        filterName: "Wołowina",
        filterId: "beef",
      },
      {
        filterName: "Kurczak",
        filterId: "chicken",
      },
      {
        filterName: "Wege",
        filterId: "vege",
      },
    ],
    categoryMenu: [
      {
        itemName: "Big Mac",
        itemId: "bigmac",
        itemPrice: 20.5,
        itemImage: "burgers/bigmac.png",
        tag: "beef",
      },
      {
        itemName: "WieśMac Podwójny",
        itemId: "wiesmac-double",
        itemPrice: 25.9,
        itemImage: "burgers/wiesmac-double.png",
        tag: "beef",
      },
      {
        itemName: "WieśMac",
        itemId: "wiesmac",
        itemPrice: 22.2,
        itemImage: "burgers/wiesmac.png",
        tag: "beef",
      },
      {
        itemName: "McRoyal Podwójny",
        itemId: "mcroyal-double",
        itemPrice: 25.9,
        itemImage: "burgers/mcroyal-double.png",
        tag: "beef",
      },
      {
        itemName: "McRoyal",
        itemId: "mcroyal",
        itemPrice: 20.2,
        itemImage: "burgers/mcroyal.png",
        tag: "beef",
      },
      {
        itemName: "McCrispy Supreme",
        itemId: "mccrispy-supreme",
        itemPrice: 24.9,
        itemImage: "burgers/mccrispy-supreme.png",
        tag: "chicken",
      },
      {
        itemName: "McCrispy",
        itemId: "mccrispy",
        itemPrice: 20.5,
        itemImage: "burgers/mccrispy.png",
        tag: "chicken",
      },
      {
        itemName: "McChicken",
        itemId: "mcchicken",
        itemPrice: 18.9,
        itemImage: "burgers/mcchiken.png",
        tag: "chicken",
      },
      {
        itemName: "Veggie Burger",
        itemId: "veggie-burger",
        itemPrice: 19.6,
        itemImage: "burgers/veggie-burger.png",
        tag: "vege",
      },
      {
        itemName: "McDouble",
        itemId: "mcdouble",
        itemPrice: 9.5,
        itemImage: "burgers/mcdouble.png",
        tag: "beef",
      },
      {
        itemName: "Cheeseburger",
        itemId: "cheeseburger",
        itemPrice: 6.9,
        itemImage: "burgers/cheeseburger.png",
        tag: "beef",
      },
      {
        itemName: "Hamburger",
        itemId: "hamburger",
        itemPrice: 6.5,
        itemImage: "burgers/hamburger.png",
        tag: "beef",
      },
      {
        itemName: "Jalapeno Burger",
        itemId: "jalapenoburger",
        itemPrice: 6.9,
        itemImage: "burgers/jalapenoburger.png",
        tag: "beef",
      },
      {
        itemName: "Chikker",
        itemId: "chikker",
        itemPrice: 6.9,
        itemImage: "burgers/chikker.png",
        tag: "chicken",
      },
      {
        itemName: "RedChikker",
        itemId: "redchikker",
        itemPrice: 6.9,
        itemImage: "burgers/red-chikker.png",
        tag: "chicken",
      },
    ],
  },
  mccafe: {
    filters: [
      {
        filterName: "Mrożona",
        filterId: "iced",
      },
      {
        filterName: "Klasyczna",
        filterId: "classic",
      },
      {
        filterName: "Smakowa",
        filterId: "flavored",
      },
      {
        filterName: "Herbata",
        filterId: "tea",
      },
    ],
    categoryMenu: [
      {
        itemName: "Iced Raspberry & White Choco Latte",
        itemId: "iced-raspberry-latte",
        itemPrice: 15.9,
        itemImage: "mccafe/iced-raspberry-latte.png",
        tag: "iced",
      },
      {
        itemName: "Iced Caramel Latte",
        itemId: "iced-caramel-latte",
        itemPrice: 15.9,
        itemImage: "mccafe/iced-latte.png",
        tag: "iced",
      },
      {
        itemName: "Iced Latte",
        itemId: "iced-latte",
        itemPrice: 14.9,
        itemImage: "mccafe/iced-latte.png",
        tag: "iced",
      },
      {
        itemName: "Café Latte",
        itemId: "cafe-latte",
        itemPrice: 12.9,
        itemImage: "mccafe/cafe-latte.png",
        tag: "classic",
        size: "s",
        capacity: 0.2,
        options: [
          {
            size: "s",
            sizeName: "small",
            capacity: 0.2,
            itemPrice: 12.9,
          },
          {
            size: "m",
            sizeName: "medium",
            capacity: 0.3,
            itemPrice: 13.9,
          },
          {
            size: "l",
            sizeName: "large",
            capacity: 0.4,
            itemPrice: 14.9,
          },
        ],
      },
      {
        itemName: "Cappuccino",
        itemId: "cappuccino",
        itemPrice: 6.6,
        itemImage: "mccafe/cappuccino.png",
        tag: "classic",
        size: "s",
        capacity: 0.2,
        options: [
          {
            size: "s",
            sizeName: "small",
            capacity: 0.2,
            itemPrice: 6.6,
          },
          {
            size: "m",
            sizeName: "medium",
            capacity: 0.3,
            itemPrice: 11.6,
          },
          {
            size: "l",
            sizeName: "large",
            capacity: 0.4,
            itemPrice: 12.6,
          },
        ],
      },
      {
        itemName: "Flat White",
        itemId: "flat-white",
        itemPrice: 12.9,
        itemImage: "mccafe/flat-white.png",
        tag: "classic",
        size: "s",
        capacity: 0.2,
        options: [
          {
            size: "s",
            sizeName: "small",
            capacity: 0.2,
            itemPrice: 12.9,
          },
          {
            size: "m",
            sizeName: "medium",
            capacity: 0.3,
            itemPrice: 13.9,
          },
        ],
      },
      {
        itemName: "Kawa z mlekiem",
        itemId: "coffee-milk",
        itemPrice: 10.2,
        itemImage: "mccafe/coffee-milk.png",
        tag: "classic",
        size: "s",
        capacity: 0.2,
        options: [
          {
            size: "s",
            sizeName: "small",
            capacity: 0.2,
            itemPrice: 10.2,
          },
          {
            size: "m",
            sizeName: "medium",
            capacity: 0.3,
            itemPrice: 11.2,
          },
          {
            size: "l",
            sizeName: "large",
            capacity: 0.4,
            itemPrice: 12.2,
          },
        ],
      },
      {
        itemName: "Kawa czarna",
        itemId: "coffee-black",
        itemPrice: 9.2,
        itemImage: "mccafe/coffee-black.png",
        tag: "classic",
        size: "s",
        capacity: 0.2,
        options: [
          {
            size: "s",
            sizeName: "small",
            capacity: 0.2,
            itemPrice: 9.2,
          },
          {
            size: "m",
            sizeName: "medium",
            capacity: 0.3,
            itemPrice: 10.2,
          },
          {
            size: "l",
            sizeName: "large",
            capacity: 0.4,
            itemPrice: 11.2,
          },
        ],
      },
      {
        itemName: "Espresso",
        itemId: "espresso",
        itemPrice: 7.4,
        itemImage: "mccafe/espresso.png",
        tag: "classic",
        size: "s",
        options: [
          {
            size: "s",
            sizeName: "small",
            itemPrice: 7.4,
          },
          {
            size: "l",
            sizeName: "large",
            itemPrice: 9.4,
          },
        ],
      },
      {
        itemName: "Caramel Latte Macchiato",
        itemId: "caramel-latte-macchiato",
        itemPrice: 16.6,
        itemImage: "mccafe/caramel-latte-macchiato.png",
        tag: "flavored",
      },
      {
        itemName: "Choco Latte Macchiato",
        itemId: "choco-latte-macchiato",
        itemPrice: 16.6,
        itemImage: "mccafe/choco-latte-macchiato.png",
        tag: "flavored",
      },
      {
        itemName: "Herbata",
        itemId: "tea",
        itemPrice: 9.4,
        itemImage: "mccafe/tea.png",
        tag: "tea",
      },
    ],
  },
  fries: {
    filters: [
      {
        filterName: "Frytki",
        filterId: "fries",
      },
      {
        filterName: "Sosy",
        filterId: "sauces",
      },
      {
        filterName: "Inne",
        filterId: "other",
      },
    ],
    categoryMenu: [
      {
        itemName: "Chrupiące łódeczki z sosem",
        itemId: "lodeczki",
        itemPrice: 8.9,
        itemImage: "fries/lodeczki.png",
        tag: "fries",
      },
      {
        itemName: "Frytki",
        itemId: "fries",
        itemPrice: 8.9,
        itemImage: "fries/frytki.png",
        tag: "fries",
        size: "s",
        capacity: "",
        options: [
          {
            size: "S",
            sizeName: "small",
            itemPrice: 8.9,
            capacity: "",
          },
          {
            size: "M",
            sizeName: "medium",
            itemPrice: 9.7,
            capacity: "",
          },
          {
            size: "L",
            sizeName: "large",
            itemPrice: 9.9,
            capacity: "",
          },
        ],
      },
      {
        itemName: "Kubuś Mus",
        itemId: "kubus",
        itemPrice: 5.9,
        itemImage: "fries/kubus.png",
        tag: "other",
      },
      {
        itemName: "Chrupiące Marcheweczki",
        itemId: "marchewki",
        itemPrice: 4.9,
        itemImage: "fries/marchewki.png",
        tag: "other",
      },
      {
        itemName: "Soczyste Jabłuszka",
        itemId: "jablka",
        itemPrice: 6.9,
        itemImage: "fries/jablka.png",
        tag: "other",
      },
      {
        itemName: "Sriracha Mayo",
        itemId: "sriracha",
        itemPrice: 1.9,
        itemImage: "fries/sriracha.png",
        tag: "sauces",
      },
      {
        itemName: "Ketchup",
        itemId: "ketchup",
        itemPrice: 1.5,
        itemImage: "fries/ketchup.png",
        tag: "sauces",
      },
      {
        itemName: "Sos Czosnkowy",
        itemId: "czosnkowy",
        itemPrice: 1.9,
        itemImage: "fries/czosnkowy.png",
        tag: "sauces",
      },
      {
        itemName: "Sos Śmietanowy",
        itemId: "smietanowy",
        itemPrice: 1.9,
        itemImage: "fries/smietanowy.png",
        tag: "sauces",
      },
      {
        itemName: "Sos Barbeque",
        itemId: "barbeque",
        itemPrice: 1.9,
        itemImage: "fries/barbecue.png",
        tag: "sauces",
      },
      {
        itemName: "Sos Słodko-Kwaśny",
        itemId: "slodkokwasny",
        itemPrice: 1.9,
        itemImage: "fries/slodkokwasny.png",
        tag: "sauces",
      },
      {
        itemName: "Sos Vinegret",
        itemId: "vinegret",
        itemPrice: 1.9,
        itemImage: "fries/winegret.png",
        tag: "sauces",
      },
      {
        itemName: "Sos 1000 Wysp",
        itemId: "1000wysp",
        itemPrice: 1.9,
        itemImage: "fries/1000wysp.png",
        tag: "sauces",
      },
      {
        itemName: "Sos Koperkowy",
        itemId: "koperkowy",
        itemPrice: 1.9,
        itemImage: "fries/koperkowy.png",
        tag: "sauces",
      },
    ],
  },
};
