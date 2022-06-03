export const state = () => ({
  offerList: [
    {
      id: 0,
      name: 'meble_kuchenne',
      title: 'Meble kuchenne',
      subTitle: 'Z myślą o Tobie.',
      textContent:
        'Meble kuchenne wykonujemy z dbałością o każdy szczegół. Bierzemy pod uwagę rozmieszenie gniazdek ściennych, rozmieszczenie rur i wymiary pomieszczenia.',
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
      header: 'Dodatkowo do wyboru',
      list: ['Projekt 3D pomieszczenia', 'Systemy', 'Szkło-grafika'],
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
      subTitle: 'Skrojone na miarę Twoich potrzeb',
      textContent:
        'W naszych działaniach nie ograniczamy się tylko do mebli kuchennych. Stawiamy na różnorodność, dlatego w skład naszej oferty wchodzą również meble pokojowe',
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
      header: 'Do wyboru masz',
      list: ['Zastosowane systemy', 'Projekt 3D pomieszczenia', 'Fronty'],
      extrass: ['fronty_mdf'],
    },
    {
      id: 2,
      name: 'meble_lazienkowe',
      title: 'Meble łazienkowe',
      subTitle: 'Nowoczesne lub żywe',
      textContent:
        'Oferujemy szerokiej gamy meble w tym meble łazienkowe. Począwszy od astetycznego i minimalistycznego wykończenia po żywe i jaskrawe, które ożywi twoją łazienkę.',
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
      header: 'Do wyboru masz',
      list: ['Projekt 3D pomieszczenia', 'Zastosowane systemy', 'Fronty'],
      extrass: ['fronty_mdf'],
    },
    {
      id: 3,
      name: 'loza_sypialniane',
      title: 'Łoża sypialniane',
      subTitle: 'W których wreszcie się wyśpisz!',
      textContent: 'Wisienką na torcie w naszej ofercie są łoża sypialniane',
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
      bgImg: require('~/assets/offer/systemy_blum.jpg'),
    },
    {
      id: 1,
      name: 'Schwinn',
      img: 'schwinn.jpg',
      bgImg: require('~/assets/offer/systemy_schwinn.jpg'),
    },
    {
      id: 2,
      name: 'Gamet',
      img: 'gamet.jpg',
      bgImg: require('~/assets/offer/systemy_gamet.jpg'),
    },
    {
      id: 3,
      name: 'Siro',
      img: 'siro.jpg',
      bgImg: require('~/assets/offer/systemy_siro.jpg'),
    },
  ],
  extrass: [
    {
      id: 0,
      name: 'fronty_drewniane',
      title: 'Fronty drewniane',
      bg: {
        image: require('~/assets/offer/fronty_drewniane.jpg'),
      },
    },
    {
      id: 1,
      name: 'fronty_mdf',
      title: 'Fronty MDF',
      bg: {
        image: require('~/assets/offer/fronty_mdf.jpg'),
      },
    },
    {
      id: 2,
      name: 'fronty_lakierowane',
      title: 'Fronty lakierowane',
      bg: {
        image: require('~/assets/offer/fronty_lakierowane.jpg'),
      },
    },
    {
      id: 3,
      name: 'fronty_akrylowe',
      title: 'Fronty akrylowe',
      bg: {
        image: require('~/assets/offer/fronty_akrylowe.jpg'),
      },
    },
  ],
  szkloGrafika: [
    {
      id: 0,
      name: 'Fraktale',
      bg: require('~/assets/offer/szklo_grafika_fraktale.jpg'),
    },
    {
      id: 1,
      name: 'Tekstury',
      bg: require('~/assets/offer/szklo_grafika_tekstury.jpg'),
    },
    {
      id: 2,
      name: 'Zwierzęta',
      bg: require('~/assets/offer/szklo_grafika_zwierzeta.jpg'),
    },
    {
      id: 3,
      name: 'Krajobrazy',
      bg: require('~/assets/offer/szklo_grafika_krajobrazy.jpg'),
    },
    {
      id: 4,
      name: 'Morskie',
      bg: require('~/assets/offer/szklo_grafika_morskie.jpg'),
    },
    {
      id: 5,
      name: 'Pojazdy',
      bg: require('~/assets/offer/szklo_grafika_fraktale_pojazdy.jpg'),
    },
    {
      id: 6,
      name: 'Szklane',
      bg: require('~/assets/offer/szklo_grafika_szklane.jpg'),
    },
    {
      id: 7,
      name: 'Obrazy',
      bg: require('~/assets/offer/szklo_grafika_obrazy.jpg'),
    },
    {
      id: 8,
      name: 'Las',
      bg: require('~/assets/offer/szklo_grafika_las.jpg'),
    },
    {
      id: 9,
      name: 'Architektura',
      bg: require('~/assets/offer/szklo_grafika_architektura.jpg'),
    },
    {
      id: 10,
      name: 'Niebo',
      bg: require('~/assets/offer/szklo_grafika_niebo.jpg'),
    },
    {
      id: 11,
      name: 'Woda',
      bg: require('~/assets/offer/szklo_grafika_woda.jpg'),
    },
    {
      id: 12,
      name: 'Jedzenie',
      bg: require('~/assets/offer/szklo_grafika_jedzenie.jpg'),
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
  meble(state) {
    const arr = []
    state.offerList.forEach((element) => {
      arr.push({
        id: element.id,
        title: element.title,
        route: `oferta/${element.name}`,
        bg: element.bg,
        bgColor: element.bgColor,
      })
    })
    return arr
  },
  frontyMeblowe(state) {
    const arr = []
    state.extrass.forEach((element) => {
      arr.push({
        id: element.id,
        title: element.title,
        route: `oferta/${element.name}`,
        bg: element.bg.image,
        bgColor: element.bg.color,
      })
    })
    return arr
  },
  systemyMeblowe(state) {
    const arr = []

    state.systems.forEach((element) => {
      arr.push({
        id: element.id,
        bg: element.bgImg,
        title: element.name,
        route: element.name.toLowerCase(),
      })
    })
    return arr
  },
  szkloGrafika(state) {
    const arr = []
    state.szkloGrafika.forEach((element) => {
      arr.push({
        id: element.id,
        bg: element.bg,
        title: element.name,
        route: element.name.toLowerCase(),
      })
    })
    return arr
  },
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
