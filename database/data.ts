const data: Record<TProductId, TProduct> = {
  '2zd33b8c': {
    name: 'Maluma Hass Avocado',
    id: '2zd33b8c',
    sku: 'NUR72KCM',
    price: 1.15,
    // image: '/images/maluma.jpg',
    image: 'data:image/jpeg;base64,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',
    attributes: {
      description:
        'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
      shape: 'Oval',
      hardiness: '1 °C',
      taste: 'Catchy, is an avocado',
    },
  },
  '6trfgkkj': {
    name: 'Fuerte Avocado',
    id: '6trfgkkj',
    sku: 'AX4M8SJV',
    price: 1.21,
    image: '/images/fuerte.jpg',
    attributes: {
      description:
        'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
      shape: 'Pear',
      hardiness: '-1 °C',
      taste: 'Magnificent, is a strong avocado',
    },
  },
  '7bcr49em': {
    name: 'Gwen Hass Avocado',
    id: '7bcr49em',
    sku: 'HYA78F6J',
    price: 1.25,
    image: '/images/gwen.jpg',
    attributes: {
      description:
        "A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)",
      shape: 'Plump',
      hardiness: '−1 °C',
      taste: 'Superb, is an avocado',
    },
  },
  '098323ks': {
    name: 'Bacon Avocado',
    id: '098323ks',
    sku: 'BXD100BLK',
    price: 1.51,
    image: '/images/bacon.jpg',
    attributes: {
      description:
        'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',
      shape: 'Oval',
      hardiness: '−5 °C',
      taste: 'Creamy, is an avocado',
    },
  },
  b8uthe2y: {
    name: 'Hass Avocado',
    id: 'b8uthe2y',
    sku: 'RMRCZN7E',
    price: 1.39,
    image: '/images/hass.jpg',
    attributes: {
      description:
        "The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)",
      shape: 'Oval',
      hardiness: '−1 °C',
      taste: 'Gorgeous, is an avocado',
    },
  },
  ewxsd6xb: {
    name: 'Lamb Hass Avocado',
    id: 'ewxsd6xb',
    sku: 'N55229ZA',
    price: 1.34,
    image: '/images/lamb.jpg',
    attributes: {
      description:
        'The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.',
      shape: 'Obovate',
      hardiness: '-2 °C',
      taste: 'Great, is an avocado',
    },
  },
  fpr72m9k: {
    name: 'Pinkerton Avocado',
    id: 'fpr72m9k',
    sku: 'B4HZ42TM',
    price: 1.27,
    image: '/images/pinkerton.jpg',
    attributes: {
      description:
        "First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics",
      shape: 'Long pear',
      hardiness: '−1 °C',
      taste: 'Marvelous, is an avocado',
    },
  },
  t9dv25gs: {
    name: 'Reed Avocado',
    id: 't9dv25gs',
    sku: 'ZY3T9XXC',
    price: 1.18,
    image: '/images/reed.jpg',
    attributes: {
      description:
        'Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)',
      shape: 'Round',
      hardiness: '−1 °C',
      taste: 'Exquisite, is an avocado',
    },
  },
  t345w48y: {
    name: 'Zutano Avocado',
    id: 't345w48y',
    sku: 'MW79ZZ6Y',
    price: 1.25,
    image: '/images/zutano.jpg',
    attributes: {
      description:
        'The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.',
      shape: 'Pear',
      hardiness: '-5 °C',
      taste: 'Splendid, is an avocado',
    },
  },
}

export default data
