// All text + data for Melt House. Prices in GBP.
// Photos: `photo` is empty until the real image is in public/images/melt/; the <Photo> placeholder shows `tone` + `hint` meanwhile.

export const STUDIO = "Melt House";

/** Flavour fills (never used for buttons: the UI accent is always strawberry). */
export const FLAVOUR = {
  pistachio: "#bfe3a6",
  mango: "#ffcf4d",
  strawberry: "#ffc2d4",
  coffee: "#ecd3b4",
  cocoa: "#6b3a2a",
  meetha: "#ffe2ad",
  blueberry: "#a9bfff",
};

export type PhotoSlot = { photo?: string; tone: string; hint: string };

export const nav = {
  logo: "Melt House",
  links: [
    { label: "Flavours", href: "#flavours" },
    { label: "Coffee", href: "#coffee" },
    { label: "Sundaes", href: "#sundaes" },
    { label: "Shakes", href: "#shakes" },
    { label: "Deals", href: "#deals" },
    { label: "Parlours", href: "#parlours" },
  ],
  cta: { label: "Order", href: "#build" },
};

export const hero = {
  word: "MELT",
  pill: { label: "Flavour of the week", value: "Salted Caramel Cheesecake" },
  heading: ["Late-night desserts", "*&* gelato"],
  text: "Hand-crafted desserts, premium gelato and artisan coffee. Open late, always fresh, always indulgent.",
  ctas: [
    { label: "Explore menu", href: "#flavours" },
    { label: "Visit us", href: "#parlours" },
  ],
  cone: "/images/melt/cone-hero.webp",
  toppings: [
    { src: "/images/melt/topping-strawberry.webp", alt: "", className: "left-[2%] top-[33%] w-[clamp(70px,10vw,170px)] rotate-[-12deg] md:left-[6%] md:top-[22%]", depth: 0.35 },
    { src: "/images/melt/topping-pistachio.webp", alt: "", className: "right-[4%] top-[30%] w-[clamp(56px,7vw,120px)] rotate-[10deg] md:right-[9%] md:top-[18%]", depth: 0.55 },
    { src: "/images/melt/topping-waffle.webp", alt: "", className: "right-[3%] top-[54%] w-[clamp(60px,8vw,140px)] rotate-[18deg] md:top-auto md:right-[4%] md:bottom-[30%]", depth: 0.25 },
    { src: "/images/melt/topping-chocolate.webp", alt: "", className: "left-[5%] top-[57%] w-[clamp(50px,6vw,110px)] rotate-[-20deg] md:top-auto md:left-[12%] md:bottom-[34%]", depth: 0.45 },
  ],
};

export const wave = {
  top: ["Salted Caramel", "Brownie Melt", "Hazelnut Mocha", "Strawberry Bliss", "Belgian Cocoa", "Premium Gelato"],
  bottom: ["Hand-crafted daily", "Premium quality", "Made in Hounslow", "Late-night hours"],
};

export type Flavour = {
  id: string;
  name: string;
  note: string;
  price: number;
  tag?: string;
  fill: string;
  ink: string; // text colour on the fill
  image: string;
};

export const flavours: Flavour[] = [
  { id: "pistachio", name: "Salted Caramel Cheesecake", note: "Silky vanilla bean cheesecake with salted caramel finish", price: 8.50, tag: "Bestseller", fill: FLAVOUR.pistachio, ink: "#2b1233", image: "/images/melt/scoop-pistachio.webp" },
  { id: "mango", name: "Brownie Sundae Melt", note: "Warm chocolate brownie, vanilla gelato, hot fudge drizzle", price: 9.00, tag: "Late-night pick", fill: FLAVOUR.mango, ink: "#2b1233", image: "/images/melt/scoop-mango.webp" },
  { id: "strawberry", name: "Strawberry Cream", note: "Fresh berries with homemade jam ripple", price: 7.80, tag: "Fresh daily", fill: FLAVOUR.strawberry, ink: "#2b1233", image: "/images/melt/scoop-strawberry.webp" },
  { id: "coffee", name: "Hazelnut Mocha", note: "Dark chocolate mocha with hazelnut and creamy cocoa foam", price: 4.70, tag: "Coffee lover", fill: FLAVOUR.coffee, ink: "#2b1233", image: "/images/melt/scoop-coffee.webp" },
  { id: "cocoa", name: "Belgian Cocoa", note: "70% dark chocolate with fudgy chunks", price: 8.00, tag: "Premium", fill: FLAVOUR.cocoa, ink: "#fff1e6", image: "/images/melt/scoop-cocoa.webp" },
  { id: "meetha", name: "Vanilla Gelato", note: "Classic creamy indulgence", price: 7.50, tag: "Timeless", fill: FLAVOUR.meetha, ink: "#2b1233", image: "/images/melt/scoop-meetha.webp" },
];

export const shelf = {
  eyebrow: "Today's counter",
  heading: ["Today's", "*scoops*"],
  text: "Six flavours on the counter today. Fresh gelato and desserts made daily.",
  unit: "/ scoop",
};

const byId = (id: string) => flavours.find((f) => f.id === id)!;

export const builder = {
  eyebrow: "Build your cone",
  heading: ["Build your", "*cone*"],
  text: "Pick three scoops. We stack them on a waffle cone baked the same morning.",
  cone: "/images/melt/cone-empty.webp",
  coneLine: { name: "Waffle cone", price: "Free" },
  scoops: [byId("pistachio"), byId("mango"), byId("cocoa")],
  tints: ["#fff1f4", "#e9f5e0", "#fff2c9", "#f6e3d8"], // empty cone, then one per scoop
  cta: "Add to order",
};

export const slow = {
  eyebrow: "How it's made",
  heading: ["Made the", "*slow* way"],
  text: "No premix, no powder. Milk comes in at 6 AM and the first batch is on the counter by noon.",
  frames: "/frames/melt-pour",
  alt: "Warm chocolate poured over a vanilla scoop, topped with pistachios",
  panel: "linear-gradient(180deg, #e2c4c6, #ebd7dd)", // the video's own background, so the panel and the video blend
  // [scroll progress, scoop centre as a fraction of the frame width]: the crop follows the scoop as the camera pushes in
  focus: [
    [0, 0.74],
    [0.33, 0.66],
    [0.66, 0.57],
    [1, 0.52],
  ] as [number, number][],
  // stickers stay on the pink left side (desktop) / in a row above the video (phone), never over the scoop
  captions: [
    { title: "Fresh milk", text: "every single morning", at: 0.1, pos: "md:left-[4%] md:bottom-[24%]", fill: "#ffffff" },
    { title: "40 minutes", text: "of slow churning", at: 0.35, pos: "md:left-[13%] md:bottom-[6%]", fill: FLAVOUR.mango },
    { title: "20 litres", text: "max per batch", at: 0.6, pos: "md:left-[21%] md:bottom-[33%]", fill: FLAVOUR.pistachio },
  ],
};

export const coffees = {
  eyebrow: "Artisan coffee",
  heading: ["Premium", "*brews*"],
  text: "Hand-pulled espresso shots, specialty lattes, and signature hot drinks.",
  unit: "/ cup",
  items: [
    { id: "espresso", name: "Double Espresso", note: "Rich, bold, perfectly pulled", price: 3.50, tag: "Classic", fill: FLAVOUR.coffee, ink: "#2b1233", image: "/images/melt/scoop-coffee.webp" },
    { id: "latte", name: "Hazelnut Latte", note: "Silky milk with hazelnut and espresso", price: 4.50, tag: "Bestseller", fill: FLAVOUR.meetha, ink: "#2b1233", image: "/images/melt/scoop-coffee.webp" },
    { id: "cappuccino", name: "Cappuccino", note: "Creamy foam and rich espresso blend", price: 4.20, tag: "Popular", fill: FLAVOUR.coffee, ink: "#2b1233", image: "/images/melt/scoop-coffee.webp" },
    { id: "mocha", name: "Chocolate Mocha", note: "Espresso, steamed milk, chocolate", price: 4.80, tag: "Decadent", fill: FLAVOUR.cocoa, ink: "#fff1e6", image: "/images/melt/scoop-coffee.webp" },
    { id: "cortado", name: "Cortado", note: "Equal parts espresso and steamed milk", price: 3.80, tag: "Smooth", fill: FLAVOUR.mango, ink: "#2b1233", image: "/images/melt/scoop-coffee.webp" },
    { id: "macchiato", name: "Macchiato", note: "Espresso marked with milk foam", price: 4.10, tag: "Light", fill: FLAVOUR.pistachio, ink: "#2b1233", image: "/images/melt/scoop-coffee.webp" },
  ],
};

export const sundaes = {
  eyebrow: "Indulgent sundaes",
  heading: ["Warm", "*sundaes*"],
  text: "Hand-scooped gelato on warm desserts with hot toppings and syrups.",
  unit: "/ sundae",
  items: [
    { id: "brownie", name: "Warm Brownie Sundae", note: "Hot brownie, vanilla gelato, fudge sauce", price: 8.50, tag: "Classic", fill: FLAVOUR.cocoa, ink: "#fff1e6", image: "/images/melt/cat-sundae.webp" },
    { id: "waffle", name: "Belgian Waffle", note: "Crispy waffle, three scoops, caramel drizzle", price: 9.50, tag: "Indulgent", fill: FLAVOUR.mango, ink: "#2b1233", image: "/images/melt/cat-sundae.webp" },
    { id: "pancake", name: "Warm Pancakes", note: "Fluffy stack with gelato and berry compote", price: 8.00, tag: "Popular", fill: FLAVOUR.strawberry, ink: "#2b1233", image: "/images/melt/cat-sundae.webp" },
    { id: "chocolate", name: "Chocolate Lava", note: "Molten chocolate cake, vanilla ice cream", price: 9.00, tag: "Rich", fill: FLAVOUR.cocoa, ink: "#fff1e6", image: "/images/melt/cat-sundae.webp" },
    { id: "pistachio", name: "Pistachio Dream", note: "Pistachio gelato, hazelnut praline, whipped cream", price: 8.80, tag: "Premium", fill: FLAVOUR.pistachio, ink: "#2b1233", image: "/images/melt/cat-sundae.webp" },
    { id: "strawberry", name: "Strawberry Romance", note: "Fresh strawberries, vanilla gelato, raspberry sauce", price: 8.20, tag: "Fresh", fill: FLAVOUR.strawberry, ink: "#2b1233", image: "/images/melt/cat-sundae.webp" },
  ],
};

export const shakes = {
  eyebrow: "Thick shakes",
  heading: ["Creamy", "*shakes*"],
  text: "Blended gelato shakes thick enough to eat with a spoon.",
  unit: "/ shake",
  items: [
    { id: "vanilla", name: "Vanilla Bean Shake", note: "Classic vanilla gelato blend", price: 5.50, tag: "Classic", fill: FLAVOUR.meetha, ink: "#2b1233", image: "/images/melt/cat-shake.webp" },
    { id: "strawberry", name: "Strawberry Shake", note: "Fresh berries and cream gelato", price: 5.80, tag: "Fresh", fill: FLAVOUR.strawberry, ink: "#2b1233", image: "/images/melt/cat-shake.webp" },
    { id: "chocolate", name: "Chocolate Malt Shake", note: "Dark chocolate and malt, extra thick", price: 6.00, tag: "Indulgent", fill: FLAVOUR.cocoa, ink: "#fff1e6", image: "/images/melt/cat-shake.webp" },
    { id: "caramel", name: "Salted Caramel Shake", note: "Creamy caramel with sea salt", price: 5.80, tag: "Bestseller", fill: FLAVOUR.pistachio, ink: "#2b1233", image: "/images/melt/cat-shake.webp" },
    { id: "hazelnut", name: "Hazelnut Coffee Shake", note: "Espresso and hazelnut gelato", price: 6.20, tag: "Mocha lover", fill: FLAVOUR.coffee, ink: "#2b1233", image: "/images/melt/cat-shake.webp" },
    { id: "blueberry", name: "Blueberry Cheesecake", note: "Blueberry and cheesecake gelato", price: 6.00, tag: "Premium", fill: FLAVOUR.blueberry, ink: "#ffffff", image: "/images/melt/cat-shake.webp" },
  ],
};

export const treats = {
  eyebrow: "The menu",
  heading: ["Pick a", "*treat*"],
  items: [
    { name: "Scoops", count: "6 flavours", tone: FLAVOUR.strawberry, hint: "Scoops in a cup", photo: "/images/melt/cat-scoops.webp" },
    { name: "Sundaes", count: "6 sundaes", tone: FLAVOUR.mango, hint: "Sundae glass", photo: "/images/melt/cat-sundae.webp" },
    { name: "Coffee", count: "6 hot drinks", tone: FLAVOUR.coffee, hint: "Coffee cup", photo: "/images/melt/scoop-coffee.webp" },
    { name: "Thick shakes", count: "6 shakes", tone: FLAVOUR.meetha, hint: "Milkshake", photo: "/images/melt/cat-shake.webp" },
    { name: "Family tubs", count: "500 ml · 1 L", tone: FLAVOUR.pistachio, hint: "Tub, top-down", photo: "/images/melt/cat-tub.webp" },
    { name: "Ice-cream cakes", count: "Order 24 h ahead", tone: FLAVOUR.blueberry, hint: "Ice-cream cake", photo: "/images/melt/cat-cake.webp" },
  ],
};

export const deals = {
  eyebrow: "Sweet deals",
  heading: ["Treat", "*everyone*"],
  text: "Something for dessert lovers and late-night cravings. At Melt House.",
  items: [
    { id: "family", title: "Family tub night", text: "4 tubs of 500 ml, any flavours. Enough for everyone (maybe).", price: "£19.99", was: "£24.50", badge: "Weekdays", tone: FLAVOUR.pistachio, hint: "Perfect trio" },
    { id: "date", title: "Date-night sundae for two", text: "Two spoons, three scoops, warm brownie, hot fudge.", price: "£15.99", badge: "After 7 PM", tone: FLAVOUR.strawberry, hint: "Sundae for two" },
    { id: "happy", title: "Happy hour", text: "Second scoop free. Every day 4–6 PM.", price: "4–6 PM", badge: "Daily", tone: FLAVOUR.cocoa, hint: "" },
    { id: "late", title: "Late-night craving", text: "Any dessert with hot drink. Open till 11:30 PM.", price: "from £8.99", badge: "Every night", tone: FLAVOUR.blueberry, hint: "" },
  ],
};

export const notes = {
  eyebrow: "Love notes",
  heading: ["Sticky *fingers*,", "happy hearts"],
  items: [
    { name: "Ananya & friends", where: "Hounslow", text: "We came for one scoop. We left with a tub each.", rating: 5, tone: FLAVOUR.mango, hint: "Friends with cones", photo: "/images/melt/note-friends.webp" },
    { name: "Meher, age 7", where: "Hounslow", text: "Strawberry is the best colour AND the best flavour.", rating: 5, tone: FLAVOUR.strawberry, hint: "Kid with a scoop", photo: "/images/melt/note-kid.webp" },
    { name: "Rahul & Sana", where: "Hounslow", text: "Our Friday date is now a Melt House date.", rating: 5, tone: FLAVOUR.coffee, hint: "Couple at night", photo: "/images/melt/note-couple.webp" },
    { name: "The Reddys", where: "Hounslow", text: "Late-night indulgence after work. Perfection.", rating: 5, tone: FLAVOUR.pistachio, hint: "Family on a bench", photo: "/images/melt/note-family.webp" },
  ],
};

export const parlours = {
  eyebrow: "Our parlours",
  heading: ["Come say", "*hi*"],
  text: "One premium location in Hounslow. Walk in anytime.",
  photo: { photo: "/images/melt/parlour.webp", tone: FLAVOUR.pistachio, hint: "Parlour interior" },
  items: [
    { name: "Hounslow", note: "45 Kingsley Rd, TW3 1PA", hours: "10:00 AM – 11:30 PM", late: "Late-night desserts daily" },
  ],
};

export const footer = {
  word: "MELT HOUSE",
  newsletter: {
    title: "Get the new flavour first",
    text: "One email when a new flavour hits the counter. That's it.",
    placeholder: "you@email.com",
  },
  columns: [
    { title: "Eat", links: ["Flavours", "Sundaes", "Coffee", "Shakes"] },
    { title: "Visit", links: ["Hounslow", "Hours", "Directions"] },
    { title: "Hello", links: ["Instagram @melthouse", "WhatsApp Order", "Call 07824 063148"] },
  ],
  note: `Melt House is a design concept; flavours and prices are samples.`,
};
