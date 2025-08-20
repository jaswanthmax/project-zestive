const events = [
  {
    id: 1,
    image: "/eventsimg/g7r88aczclxd74fkwfng.jpg",
    image2: "/eventsimg/c_crop,g_custom_v1754906162_ashx4jhaptb3oowphdge1.jpg", 
    date: "Sat, 23 Aug | 6 PM onwards",
    title: "Hukum World Tour | Chennai",
    venue: "Marg Swarnabhoomi, Kuvathur, ECR, Chennai",
    price: "₹1700 onwards",
  },
  {
    id: 2,
    image: "/eventsimg/uw7i63aggwcnp88qdvtd.jpg",
    image2: "/eventsimg/c_crop,g_custom_v1752645561_sxhhczf56xm5yjkcgqaa2.jpg",
    date: "8 Nov, 7PM",
    title: "The Wonderment Hyderabad | A.R. Rahman Live",
    venue: "Ramoji Film City, Hyderabad",
    price: "₹1799 onwards",
  },
  {
    id: 3,
    image: "/eventsimg/mbcu46oikqymuob3sgjr.jpg", 
    image2: "/eventsimg/c_crop,g_custom_v1749964042_ue5vhyjoflzjz5jutc7v3.jpg",
    date: "Sat, 23 Aug | 6:30 PM onwards",
    title: "Hiphop Tamizha's - Return Of The Dragon Machi (Home Edition) - Live In Bengaluru",
    venue: "NICE Grounds, Bengaluru",
    price: "₹1,199onwards",
  },
  {
    id: 4,
    image: "/eventsimg/dwbm5h5hsti9jfnk4pji4.jpg", 
    image2: "/eventsimg/c_crop,g_custom_v1754656220_uioxw0ddksktfeeqv6na4.jpg",
    date: "19 Aug - 31 Aug | 9 AM onwards",
    title: "VGP Marine Kingdom | Chennai",
    venue: "VGP Marine Kingdom, Chennai",
    price: "₹575 onwards",
  },
  {
    id: 5,
    image: "/eventsimg/u9utueq2iypselpwla0l5.jpg", 
    image2: "/eventsimg/c_crop,g_custom_v1753722228_rhlymkhfqeekxng1fdwv.jpg",
    date: "10 Aug, 6PM",
    title: "Sid Sriram Live in Concert | Chennai",
    venue: "Sat, 29 Nov | 5 PM onwards",
    price: "₹2,000",
  },
];


export function initEvents() {
  return events;
}


export function getEvents() {
  return events;
}


export function getEventById(id) {
  return events.find((event) => event.id === Number(id));
}
