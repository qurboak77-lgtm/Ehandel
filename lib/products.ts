import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "sommarklanning",
    title: "Sommarklänning",
    shortDescription: "Luftig och elegant klänning för varma dagar.",
    description: "En vacker sommarklänning i lätt bomull med blommönster. Perfekt för fester, strandpromenader eller vardagsbruk.",
    features: ["100% bomull", "Luftig passform", "Blommönster", "Maskintvättbar"],
    basePrice: 799,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=640&h=420&fit=crop&crop=center", alt: "Sommarklänning huvudbild" },
      { id: "detail1", url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=640&h=420&fit=crop&crop=center", alt: "Sommarklänning detalj" },
      { id: "back", url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=640&h=420&fit=crop&crop=center", alt: "Sommarklänning baksida" }
    ],
    variantGroups: [
      {
        id: "size",
        name: "Storlek",
        variants: [
          { id: "s", name: "S", value: "Small" },
          { id: "m", name: "M", value: "Medium" },
          { id: "l", name: "L", value: "Large" },
          { id: "xl", name: "XL", value: "Extra Large" }
        ]
      },
      {
        id: "color",
        name: "Färg",
        variants: [
          { id: "blue", name: "Blå", value: "Blue" },
          { id: "pink", name: "Rosa", value: "Pink" },
          { id: "white", name: "Vit", value: "White" }
        ]
      }
    ]
  },
  {
    id: "skinny-jeans",
    title: "Skinny Jeans",
    shortDescription: "Slimma jeans som formar kroppen.",
    description: "Högkvalitativa skinny jeans i stretchmaterial som sitter perfekt. Komfortabla för hela dagen och lätta att kombinera.",
    features: ["Stretchmaterial", "Hög midja", "5 fickor", "Slim passform"],
    basePrice: 599,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=640&h=420&fit=crop&crop=center", alt: "Skinny Jeans huvudbild" },
      { id: "detail1", url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=640&h=420&fit=crop&crop=center", alt: "Skinny Jeans detalj" },
      { id: "model", url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=640&h=420&fit=crop&crop=center", alt: "Skinny Jeans på modell" }
    ],
    variantGroups: [
      {
        id: "size",
        name: "Storlek",
        variants: [
          { id: "26", name: "26", value: "26" },
          { id: "27", name: "27", value: "27" },
          { id: "28", name: "28", value: "28" },
          { id: "29", name: "29", value: "29" },
          { id: "30", name: "30", value: "30" }
        ]
      },
      {
        id: "color",
        name: "Färg",
        variants: [
          { id: "blue", name: "Mörkblå", value: "Dark Blue" },
          { id: "black", name: "Svart", value: "Black" },
          { id: "grey", name: "Grå", value: "Grey" }
        ]
      }
    ]
  },
  {
    id: "silkesblus",
    title: "Silkesblus",
    shortDescription: "Elegant blus i mjuk silke.",
    description: "En tidlös silkesblus med knäppning framtill. Perfekt för kontoret eller en romantisk middag.",
    features: ["100% silke", "Knäppning framtill", "Långärmad", "Elegant design"],
    basePrice: 899,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=640&h=420&fit=crop&crop=center", alt: "Silkesblus huvudbild" },
      { id: "detail1", url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=640&h=420&fit=crop&crop=center", alt: "Silkesblus detalj" },
      { id: "closeup", url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=640&h=420&fit=crop&crop=center", alt: "Silkesblus närbild" }
    ],
    variantGroups: [
      {
        id: "size",
        name: "Storlek",
        variants: [
          { id: "s", name: "S", value: "Small" },
          { id: "m", name: "M", value: "Medium" },
          { id: "l", name: "L", value: "Large" }
        ]
      },
      {
        id: "color",
        name: "Färg",
        variants: [
          { id: "white", name: "Vit", value: "White" },
          { id: "black", name: "Svart", value: "Black" },
          { id: "navy", name: "Mörkblå", value: "Navy" }
        ]
      }
    ]
  },
  {
    id: "sneakers",
    title: "Vita Sneakers",
    shortDescription: "Klassiska vita sneakers för vardag och sport.",
    description: "Bekväma sneakers i vitt läder med gummisula. Perfekta för promenader, träning eller som vardagsskor.",
    features: ["Läderöverkropp", "Gummisula", "Snörning", "Vattentåliga"],
    basePrice: 699,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=640&h=420&fit=crop&crop=center", alt: "Vita Sneakers huvudbild" },
      { id: "side", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=640&h=420&fit=crop&crop=center", alt: "Vita Sneakers sidasyn" },
      { id: "detail", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=640&h=420&fit=crop&crop=center", alt: "Vita Sneakers detalj" }
    ],
    variantGroups: [
      {
        id: "size",
        name: "Storlek",
        variants: [
          { id: "36", name: "36", value: "36" },
          { id: "37", name: "37", value: "37" },
          { id: "38", name: "38", value: "38" },
          { id: "39", name: "39", value: "39" },
          { id: "40", name: "40", value: "40" },
          { id: "41", name: "41", value: "41" }
        ]
      }
    ]
  },
  {
    id: "bomullstopp",
    title: "Bomullstopp",
    shortDescription: "Bekväm bomullstopp för vardagen.",
    description: "Mjuk och andas bomullstopp med kort ärm. Perfekt för avslappnade dagar eller som basplagg.",
    features: ["100% bomull", "Kort ärm", "Rund halsringning", "Bekväm passform"],
    basePrice: 249,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=640&h=420&fit=crop&crop=center", alt: "Bomullstopp huvudbild" },
      { id: "detail1", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=640&h=420&fit=crop&crop=center", alt: "Bomullstopp detalj" },
      { id: "back", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=640&h=420&fit=crop&crop=center", alt: "Bomullstopp baksida" }
    ],
    variantGroups: [
      {
        id: "size",
        name: "Storlek",
        variants: [
          { id: "s", name: "S", value: "Small" },
          { id: "m", name: "M", value: "Medium" },
          { id: "l", name: "L", value: "Large" },
          { id: "xl", name: "XL", value: "Extra Large" }
        ]
      },
      {
        id: "color",
        name: "Färg",
        variants: [
          { id: "white", name: "Vit", value: "White" },
          { id: "black", name: "Svart", value: "Black" },
          { id: "grey", name: "Grå", value: "Grey" }
        ]
      }
    ]
  },
  {
    id: "cardigan",
    title: "Ullcardigan",
    shortDescription: "Varm och mysig cardigan i ull.",
    description: "Elegant cardigan i mjuk ull som håller dig varm under kyliga dagar. Perfekt över en blus eller ensam.",
    features: ["100% ull", "Knäppning framtill", "Långärmad", "Klassisk design"],
    basePrice: 1299,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=640&h=420&fit=crop&crop=center", alt: "Ullcardigan huvudbild" },
      { id: "detail1", url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=640&h=420&fit=crop&crop=center", alt: "Ullcardigan detalj" },
      { id: "closeup", url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=640&h=420&fit=crop&crop=center", alt: "Ullcardigan närbild" }
    ],
    variantGroups: [
      {
        id: "size",
        name: "Storlek",
        variants: [
          { id: "s", name: "S", value: "Small" },
          { id: "m", name: "M", value: "Medium" },
          { id: "l", name: "L", value: "Large" },
          { id: "xl", name: "XL", value: "Extra Large" }
        ]
      },
      {
        id: "color",
        name: "Färg",
        variants: [
          { id: "beige", name: "Beige", value: "Beige" },
          { id: "grey", name: "Grå", value: "Grey" },
          { id: "navy", name: "Mörkblå", value: "Navy" }
        ]
      }
    ]
  },
  {
    id: "pennykjol",
    title: "Pennykjol",
    shortDescription: "Klassisk pennykjol i tweed.",
    description: "Tidlös pennykjol i kvalitativ tweed. Perfekt för kontoret eller fester med en elegant touch. Figursydd passform som smickrar silhuetten.",
    features: ["100% tweed material", "Knäppning framtill", "Midikjol (knälång)", "Figursydd passform", "Bekväm midja", "Maskintvättbar"],
    basePrice: 899,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?w=640&h=420&fit=crop&crop=center", alt: "Pennykjol huvudbild" },
      { id: "side", url: "https://images.unsplash.com/photo-1587307604615-12af6177ecf5?w=640&h=420&fit=crop&crop=center", alt: "Pennykjol sidasyn" },
      { id: "detail", url: "https://images.unsplash.com/photo-1591565015571-e8fb88e82e2b?w=640&h=420&fit=crop&crop=center", alt: "Pennykjol tweed-detalj" },
      { id: "model", url: "https://images.unsplash.com/photo-1606927881806-e08b1ee0f6b5?w=640&h=420&fit=crop&crop=center", alt: "Pennykjol på modell" }
    ],
    variantGroups: [
      {
        id: "size",
        name: "Storlek",
        variants: [
          { id: "s", name: "S", value: "Small", priceModifier: 0 },
          { id: "m", name: "M", value: "Medium", priceModifier: 0 },
          { id: "l", name: "L", value: "Large", priceModifier: 0 }
        ]
      },
      {
        id: "color",
        name: "Färg",
        variants: [
          { id: "black", name: "Svart tweed", value: "Black", priceModifier: 0 },
          { id: "grey", name: "Grå tweed", value: "Grey", priceModifier: 50 },
          { id: "navy", name: "Mörkblå tweed", value: "Navy", priceModifier: 50 }
        ]
      }
    ]
  },
  {
    id: "skinnjacka",
    title: "Läderjacka",
    shortDescription: "Stilren läderjacka för alla tillfällen.",
    description: "Klassisk läderjacka i mjukt läder. Ger en tuff look och passar perfekt över många outfits.",
    features: ["Äkta läder", "Blixtlås framtill", "Flera fickor", "Slim passform"],
    basePrice: 1999,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=640&h=420&fit=crop&crop=center", alt: "Läderjacka huvudbild" },
      { id: "detail1", url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=640&h=420&fit=crop&crop=center", alt: "Läderjacka detalj" },
      { id: "back", url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=640&h=420&fit=crop&crop=center", alt: "Läderjacka baksida" }
    ],
    variantGroups: [
      {
        id: "size",
        name: "Storlek",
        variants: [
          { id: "s", name: "S", value: "Small" },
          { id: "m", name: "M", value: "Medium" },
          { id: "l", name: "L", value: "Large" },
          { id: "xl", name: "XL", value: "Extra Large" }
        ]
      }
    ]
  },
  {
    id: "sjal",
    title: "Siden Sjal",
    shortDescription: "Elegant siden sjal för extra stil.",
    description: "Ljuvlig siden sjal som kan användas som accessoar till många outfits. Ger en sofistikerad och elegant touch till vilken outfit som helst. Perfekt för halvformela tillfällen.",
    features: ["100% siden (charmeuse)", "Storlek 180x90 cm", "Fluffig frangé-kant", "Glansig finish", "Multifunktionell", "Lättvärdad"],
    basePrice: 499,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1601762603332-db5e4b90cc5d?w=640&h=420&fit=crop&crop=center", alt: "Siden Sjal huvudbild" },
      { id: "drape", url: "https://images.unsplash.com/photo-1414235077418-3a2e48d0fb12?w=640&h=420&fit=crop&crop=center", alt: "Siden Sjal på axlar" },
      { id: "detail", url: "https://images.unsplash.com/photo-1611591365069-1cb28d56fcd1?w=640&h=420&fit=crop&crop=center", alt: "Siden Sjal detalj" },
      { id: "texture", url: "https://images.unsplash.com/photo-1535303511164-a575216ee9f5?w=640&h=420&fit=crop&crop=center", alt: "Siden Sjal textur" }
    ],
    variantGroups: [
      {
        id: "color",
        name: "Färg",
        variants: [
          { id: "red", name: "Röd", value: "Red", priceModifier: 0 },
          { id: "blue", name: "Blå", value: "Blue", priceModifier: 0 },
          { id: "black", name: "Svart", value: "Black", priceModifier: 0 },
          { id: "emerald", name: "Smaragdgrön", value: "Emerald", priceModifier: 100 }
        ]
      }
    ]
  },
  {
    id: "hogklackat",
    title: "Högklackade Pumps",
    shortDescription: "Eleganta högklackade skor för fest.",
    description: "Klassiska högklackade pumps i svart läder. Perfekta för fester, bröllop eller viktiga möten.",
    features: ["Läder", "10cm klack", "Spetsig tå", "Komfortsula"],
    basePrice: 1299,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=640&h=420&fit=crop&crop=center", alt: "Högklackade Pumps huvudbild" },
      { id: "side", url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=640&h=420&fit=crop&crop=center", alt: "Högklackade Pumps sidasyn" },
      { id: "heel", url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=640&h=420&fit=crop&crop=center", alt: "Högklackade Pumps klackdetalj" }
    ],
    variantGroups: [
      {
        id: "size",
        name: "Storlek",
        variants: [
          { id: "36", name: "36", value: "36" },
          { id: "37", name: "37", value: "37" },
          { id: "38", name: "38", value: "38" },
          { id: "39", name: "39", value: "39" },
          { id: "40", name: "40", value: "40" }
        ]
      }
    ]
  },
  {
    id: "handvaska",
    title: "Läder Handväska",
    shortDescription: "Elegant läderväska för vardag och fest.",
    description: "Kvalitativ läderväska med justerbart axelband. Tillräckligt stor för det viktigaste men fortfarande elegant.",
    features: ["Äkta läder", "Justerbart band", "Flera fickor", "Vattentålig"],
    basePrice: 1599,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=640&h=420&fit=crop&crop=center", alt: "Läder Handväska huvudbild" },
      { id: "detail1", url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=640&h=420&fit=crop&crop=center", alt: "Läder Handväska detalj" },
      { id: "inside", url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=640&h=420&fit=crop&crop=center", alt: "Läder Handväska insida" }
    ],
    variantGroups: [
      {
        id: "color",
        name: "Färg",
        variants: [
          { id: "brown", name: "Brun", value: "Brown" },
          { id: "black", name: "Svart", value: "Black" },
          { id: "red", name: "Röd", value: "Red" }
        ]
      }
    ]
  },
  {
    id: "orhangen",
    title: "Guld Örhängen",
    shortDescription: "Eleganta guldörhängen med pärla.",
    description: "Vackra örhängen i 18k guld med små pärlor. Perfekta för vardag eller festliga tillfällen.",
    features: ["18k guld", "Pärldetaljer", "Lätt design", "Nickelfri"],
    basePrice: 799,
    images: [
      { id: "main", url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=640&h=420&fit=crop&crop=center", alt: "Guld Örhängen huvudbild" },
      { id: "detail1", url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=640&h=420&fit=crop&crop=center", alt: "Guld Örhängen detalj" },
      { id: "closeup", url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=640&h=420&fit=crop&crop=center", alt: "Guld Örhängen närbild" }
    ],
    variantGroups: [
      {
        id: "style",
        name: "Stil",
        variants: [
          { id: "pearl", name: "Pärla", value: "Pearl" },
          { id: "crystal", name: "Kristall", value: "Crystal" },
          { id: "plain", name: "Enkla", value: "Plain" }
        ]
      }
    ]
  }
];
