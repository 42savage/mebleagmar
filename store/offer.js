export const state = () => ({
  offerList: [
    {
      id: 0,
      name: 'meble_kuchenne',
      title: 'Meble kuchenne',
      subTitle: 'Szeroka oferta',
      textContent: 'W skład naszej oferty wchodzi lorem ipsum dolor sit amen.',
      bg: require('~/assets/offer/kitchen.jpg'),
      bgColor: '#ca6602',
      images: [
        {
          id: 0,
          src: require('~/assets/offer/sub/kitchen1.jpg'),
          desc: 'Zdjęcie przedstawiające meble kuchenne w modernistycznym stylu',
        },
        {
          id: 1,
          src: require('~/assets/offer/sub/kitchen2.jpg'),
          desc: 'Zdjęcie przedstawia meble kuchenne w klasycznym stylu',
        },
        {
          id: 2,
          src: require('~/assets/offer/sub/kitchen3.jpg'),
          desc: 'Zdjęcie przedstawiające drewnianą kuchnię',
        },
      ],
      header: 'Nagłówek, a do tego lista.',
      list: ['Element 1', 'Element 2', 'Element 3'],
      extrass: [
        { id: 0, name: 'szklo_grafika' },
        { id: 1, name: 'fronty_mdf' },
        { id: 2, name: 'fronty_drewniane' },
      ],
    },
    {
      id: 1,
      name: 'meble_pokojowe',
      title: 'Meble pokojowe',
      subTitle: 'Szeroka oferta',
      textContent: 'W skład naszej oferty wchodzi lorem ipsum dolor sit amen.',
      bg: require('~/assets/offer/salon.jpg'),
      bgColor: '#008b8b',
      images: [
        {
          id: 0,
          src: require('~/assets/offer/sub/salon1.jpg'),
          desc: 'Zdjęcie przedstawiające salon w stylu nowoczesnym',
        },
        {
          id: 1,
          src: require('~/assets/offer/sub/salon2.jpg'),
          desc: 'Zdjęcie przedstawiające salon w stylu klasycznym',
        },
      ],
      header: 'Nagłówek, a do tego lista.',
      list: ['Element 1', 'Element 2', 'Element 3'],
      extrass: ['fronty_mdf'],
    },
    {
      id: 2,
      name: 'meble_lazienkowe',
      title: 'Meble łazienkowe',
      subTitle: 'Szeroka oferta',
      textContent: 'W skład naszej oferty wchodzi lorem ipsum dolor sit amen.',
      bg: require('~/assets/offer/bathroom.jpg'),
      bgColor: '#9b2226',
      images: [
        {
          id: 0,
          src: require('~/assets/offer/sub/bathroom1.jpg'),
          desc: 'Zdjęcie przedstawiające łazienkę w stylu nowoczesnym',
        },
        {
          id: 1,
          src: require('~/assets/offer/sub/bathroom2.jpg'),
          desc: 'Zdjęcie przedstawiające łazienkę w stylu klasycznym',
        },
      ],
      header: 'Nagłówek, a do tego lista.',
      list: ['Element 1', 'Element 2', 'Element 3'],
      extrass: ['fronty_mdf'],
    },
    {
      id: 3,
      name: 'loza_sypialniane',
      title: 'Łoża sypialniane',
      subTitle: 'Szeroka oferta',
      textContent: 'W skład naszej oferty wchodzi lorem ipsum dolor sit amen.',
      bg: require('~/assets/offer/bed.jpg'),
      bgColor: '#94d2bd',
      images: [
        {
          id: 0,
          src: require('~/assets/offer/sub/bedroom1.jpg'),
          desc: 'Zdjęcie przedstawiające sypialnie w stylu nowoczesnym',
        },
        {
          id: 1,
          src: require('~/assets/offer/sub/bedroom2.jpg'),
          desc: 'Zdjęcie przedstawiające sypialnie w stylu klasycznym',
        },
      ],
      header: 'Nagłówek, a do tego lista.',
      list: ['Element 1', 'Element 2', 'Element 3'],
    },
  ],
  systems: [
    {
      id: 0,
      name: 'Blum',
      img: 'blum.jpg',
    },
    {
      id: 1,
      name: 'Schwinn',
      img: 'schwinn.jpg',
    },
    {
      id: 2,
      name: 'Gamet',
      img: 'gamet.jpg',
    },
    {
      id: 3,
      name: 'Siro',
      img: 'siro.jpg',
    },
  ],
  extrass: [
    {
      id: 0,
      name: 'fronty_drewniane',
      title: 'Fronty drewniane',
      bg: {
        image: 'offer/fronty_drewniane.jpg',
        color: 'crimson',
      },
    },
    {
      id: 1,
      name: 'fronty_mdf',
      title: 'Fronty MDF',
      bg: {
        image: 'offer/fronty_mdf.jpg',
        color: 'crimson',
      },
    },
    {
      id: 0,
      name: 'szklo_grafika',
      title: 'Szkło grafika',
      bg: {
        image: 'offer/szklo_grafika.jpg',
        color: 'crimson',
      },
    },
  ],
  fronty_drewniane: [
    {
      id: 0,
      name: 'front1',
      img: 'front1.jpg',
    },
    {
      id: 1,
      name: 'front2',
      img: 'front2.jpg',
    },
    {
      id: 2,
      name: 'front3',
      img: 'front3.jpg',
    },
  ],
  fronty_mdf: [
    {
      id: 0,
      name: 'mdf1',
      img: 'mdf1.jpg',
    },
    {
      id: 1,
      name: 'mdf2',
      img: 'mdf2.jpg',
    },
    {
      id: 2,
      name: 'mdf3',
      img: 'mdf3.jpg',
    },
  ],
  szklo_grafika: [
    {
      id: 0,
      name: 'szklo1',
      img: 'szklo1.jpg',
    },
    {
      id: 1,
      name: 'szklo2',
      img: 'szklo2.jpg',
    },
    {
      id: 2,
      name: 'szklo2',
      img: 'szklo2.jpg',
    },
  ],
})

export const mutations = {}

export const actions = {}

export const getters = {
  offer(state) {
    return state.offerList
  },
  systems(state) {
    return state.systems
  },
  extrass(state) {
    return state.extrass
  },
  specifiedOffer(state, getters, rootState) {
    return state.offerList.find(
      (offer) => offer.name === rootState.route.params.id
    )
  },
  specifiedExtrass(state, getters, rootState) {
    return state.extrass.find((extrass) => {})
  },
}
