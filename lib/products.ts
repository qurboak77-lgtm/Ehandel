import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "sommarklanning",
    title: "Sommarklänning",
    shortDescription: "Luftig och elegant klänning för varma dagar.",
    description: "En vacker sommarklänning i lätt bomull med blommönster. Perfekt för fester, strandpromenader eller vardagsbruk.",
    features: ["100% bomull", "Luftig passform", "Blommönster", "Maskintvättbar"],
    price: 799,
    image: "https://via.placeholder.com/640x420?text=Sommarklanning",
  },
  {
    id: "skinny-jeans",
    title: "Skinny Jeans",
    shortDescription: "Slimma jeans som formar kroppen.",
    description: "Högkvalitativa skinny jeans i stretchmaterial som sitter perfekt. Komfortabla för hela dagen och lätta att kombinera.",
    features: ["Stretchmaterial", "Hög midja", "5 fickor", "Slim passform"],
    price: 599,
    image: "https://via.placeholder.com/640x420?text=Skinny+Jeans",
  },
  {
    id: "silkesblus",
    title: "Silkesblus",
    shortDescription: "Elegant blus i mjuk silke.",
    description: "En tidlös silkesblus med knäppning framtill. Perfekt för kontoret eller en romantisk middag.",
    features: ["100% silke", "Knäppning framtill", "Långärmad", "Elegant design"],
    price: 899,
    image: "https://via.placeholder.com/640x420?text=Silkesblus",
  },
  {
    id: "sneakers",
    title: "Vita Sneakers",
    shortDescription: "Klassiska vita sneakers för vardag och sport.",
    description: "Bekväma sneakers i vitt läder med gummisula. Perfekta för promenader, träning eller som vardagsskor.",
    features: ["Läderöverkropp", "Gummisula", "Snörning", "Vattentåliga"],
    price: 699,
    image: "https://via.placeholder.com/640x420?text=Vita+Sneakers",
  },
];
