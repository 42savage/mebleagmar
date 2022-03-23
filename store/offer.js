export const state = () => ({
  offer: [
    {
      id: 0,
      name: 'meble_kuchenne',
      title: 'Meble kuchenne',
      subTitle: 'Szeroka oferta',
      textContent: 'W skład naszej oferty wchodzi lorem ipsum dolor sit amen.',
      images: [
        'offer/kitchen1.jpg',
        'offer/kitchen2.jpg',
        'offer/kitchen3.jpg',
      ],
      header: 'Nagłówek, a do tego lista.',
      list: ['Element 1', 'Element 2', 'Element 3'],
      extrass: ['szklo_grafika', 'fronty_mdf', 'fronty_drewniane'],
    },
    {
      id: 1,
      name: 'meble_pokojowe',
      title: 'Meble pokojowe',
      subTitle: 'Szeroka oferta',
      textContent: 'W skład naszej oferty wchodzi lorem ipsum dolor sit amen.',
      images: ['offer/salon1.jpg', 'offer/salon2.jpg', 'offer/salon3.jpg'],
      header: 'Nagłówek, a do tego lista.',
      list: ['Element 1', 'Element 2', 'Element 3'],
      extrass: ['fronty_mdf'],
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
    return state.offer
  },
  systems(state) {
    return state.systems
  },
  extrass(state) {
    return state.extrass
  },
  specifiedOffer(state, getters, rootState) {
    return state.offer.find((offer) => offer.name === rootState.route.params.id)
  },
}
