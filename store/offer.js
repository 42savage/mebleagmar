export const state = () => ({
  offerList: [
    {
      id: 0,
      name: 'meble_kuchenne',
      title: 'Meble kuchenne',
      subTitle: 'Z myślą o Tobie.',
      textContent:
        'Meble kuchenne to tak na prawdę trzon naszej działalności. Od 20 lat w głównej mierze produkujemy właśnie meble kuchenne. Przez lata nabraliśmy doświadczenia, które pozwala nam dopasować się do preferencji każdego klienta. Przez te lata również nabraliśmy również więdzę, która pozwala nam dobrać odpowiednie systemy i akcesoria meblowe.',
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
      header:
        'Do każdego projektu podchodzimy indywidualnie, a w jego skład wchodzi',
      list: [
        'Indywidualny i niepowtarzalny projekt komputerowy 3D',
        'Dobór systemu w zależności od potrzeb klienta',
        'Ściana w najróżniejsze wzorki dzięki szkle z graficznym nadrukiem',
      ],
      extraTitle: 'Dodatkowo do wyboru: ',
      extra: [0, 1, 2, 3],
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
      header: 'Do wyboru',
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
      header: 'Do wyboru',
      list: ['Projekt 3D pomieszczenia', 'Zastosowane systemy', 'Fronty'],
      extrass: ['fronty_mdf'],
    },
    {
      id: 3,
      name: 'loza_sypialniane',
      title: 'Łoża sypialniane',
      subTitle: 'W których wreszcie się wyśpisz!',
      textContent: 'W naszej ofercie wisienką na torcie są łoża sypialniane',
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
      header: 'Do wyboru',
      list: ['Łoża tapicerowane', 'Łoża z pojemnikami', 'W stylu basic'],
    },
  ],
  systems: [
    {
      id: 0,
      name: 'Blum',
      img: 'blum.jpg',
      bgImg: require('~/assets/offer/systemy_blum.jpg'),
      subPage: {
        header: {
          title: 'Systemy meblowe Blum',
          bgImg: require('~/assets/offer/sub/systems/blum/blumBackground.jpg'),
        },
        body: {
          title: 'Rozwiązania firmy Blum',
          text: 'To wysokiej jakości systemy meblowe, sprawiające, że z twojej kuchni korzysta się wygodniej i przyjemniej',
          grid: {
            img1: {
              id: 0,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/blum/img1.jpg'),
              title: 'Łatwy dostęp',
              text: 'AVENTOS przez cały czas zapewnia użytkownikowi swobodę ruchu i wolną przestrzeń nad głową. Podczas pracy w kuchni front może bez przeszkód pozostać cały czas otwarty.',
            },
            img2: {
              id: 1,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/blum/img2.jpg'),
              title: 'Łatwe otwieranie i wygodne zamykanie',
              text: 'Połączenie lekkiego otwierania i zintegrowanego BLUMOTION to zupełnie nowa jakość otwierania i zamykania frontów górnych. Zastosowanie technologii ruchu SERVO-DRIVE lub TIP-ON to komfortowe otwieranie mebli bez uchwytów.',
            },
            img3: {
              id: 2,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/blum/img3.jpg'),
              title: 'Zatrzymuje się na dowolnej wysokości',
              text: 'Front zatrzymuje się na dowolnej wysokości pozostając zawsze w zasięgu ręki! Wystarczy wyregulować siłownik odpowiednio do wagi frontu.',
            },
            img4: {
              id: 3,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/blum/img4.jpg'),
              title: 'Identyczny design w szafkach dolnych i górnych',
              text: 'Poziome szczeliny definiują wygląd i nie powinny być zakłócane przez zbyt wiele pionowych szczelin. Dzięki systemom AVENTOS zachowamy taki sam design w szafkach górnych, jak i w dolnych.',
            },
          },
        },
      },
      extra: {
        first_title: 'Systemy podnośników do frontów górnych',
        first: [
          {
            id: 0,
            title: 'Aventos HF',
            subTitle: 'Dwuczęściowy front, składa się podczas otwierania',
            name: 'aventos_hf',
            image: require('~/assets/offer/sub/systems/blum/aventos_hf.jpg'),
          },
          {
            id: 1,
            title: 'Aventos HS',
            subTitle: 'Jednoczęściowy front nachodzi na korpus',
            name: 'aventos_hs',
            image: require('~/assets/offer/sub/systems/blum/aventos_hs.jpg'),
          },
          {
            id: 2,
            title: 'Aventos HL',
            subTitle:
              'Jednoczęściowy front jest unoszony równolegle do korpusu',
            name: 'aventos_hl',
            image: require('~/assets/offer/sub/systems/blum/aventos_hl.jpg'),
          },
          {
            id: 3,
            title: 'Aventos HK Top',
            subTitle: 'Mały podnośnik do frontów górnych',
            name: 'aventos_hk_top',
            image: require('~/assets/offer/sub/systems/blum/aventos_hk_top.jpg'),
          },
          {
            id: 4,
            title: 'Aventos HK-S',
            subTitle: 'Mały podnośnik do frontów górnych',
            name: 'aventos_hk_s',
            image: require('~/assets/offer/sub/systems/blum/aventos_hk_s.jpg'),
          },
          {
            id: 5,
            title: 'Aventos HK-XS',
            subTitle: 'Do małych frontów uchylnych w szafkach górnych',
            name: 'aventos_hl',
            image: require('~/assets/offer/sub/systems/blum/aventos_hk_xs.jpg'),
          },
        ],
        second_title: 'Systemy szuflad',
        second: [
          {
            id: 0,
            title: 'Legrabox',
            subTitle: 'Prosta linia, elegancja.',
            name: 'legrabox',
            image: require('~/assets/offer/sub/systems/blum/legrabox.jpg'),
          },
          {
            id: 1,
            title: 'Merivobox',
            subTitle: 'Jedna platforma, wiele możliwości.',
            name: 'Merivobox',
            image: require('~/assets/offer/sub/systems/blum/merivobox.jpg'),
          },
          {
            id: 2,
            title: 'Tandembox antaro',
            subTitle: 'Prosty i wyrazisty.',
            name: 'tandembox_antaro',
            image: require('~/assets/offer/sub/systems/blum/tandembox_antaro.jpg'),
          },
        ],
        third_title: 'Systemy zawiasów',
        third: [
          {
            id: 0,
            title: 'Clip top BLUMOTION',
            subTitle: 'Innowacyjna technika',
            name: 'cliptop_blumotion',
            image: require('~/assets/offer/sub/systems/blum/cliptop_blumotion.jpg'),
          },
          {
            id: 1,
            title: 'Clip top ',
            subTitle: 'Sprawdzone działanie i atrakcyjny design',
            name: 'cliptop',
            image: require('~/assets/offer/sub/systems/blum/cliptop.jpg'),
          },
          {
            id: 2,
            title: 'Modul',
            subTitle: 'Technika i wysoka efektywność',
            name: 'modul',
            image: require('~/assets/offer/sub/systems/blum/modul.jpg'),
          },
        ],
      },
    },
    {
      id: 1,
      name: 'Schwinn',
      img: 'schwinn.jpg',
      bgImg: require('~/assets/offer/systemy_schwinn.jpg'),
      subPage: {
        header: {
          title: 'Uchwyty Schwinn',
          bgImg: require('~/assets/offer/sub/systems/schwinn/schwinnBackground.jpg'),
        },
        body: {
          title: 'Rozwiązania firmy Schwinn',
          text: 'Innowacyjne rozwiązania w twojej kuchni. Designerski i nowoczesny wygląd.',
          grid: {
            img1: {
              id: 0,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w uchwyty renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/schwinn/img1.jpg'),
              title: 'Łatwy dostęp',
              text: 'AVENTOS przez cały czas zapewnia użytkownikowi swobodę ruchu i wolną przestrzeń nad głową. Podczas pracy w kuchni front może bez przeszkód pozostać cały czas otwarty.',
            },
            img2: {
              id: 1,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w uchwyty renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/schwinn/img2.jpg'),
              title: 'Łatwe otwieranie i wygodne zamykanie',
              text: 'Połączenie lekkiego otwierania i zintegrowanego BLUMOTION to zupełnie nowa jakość otwierania i zamykania frontów górnych. Zastosowanie technologii ruchu SERVO-DRIVE lub TIP-ON to komfortowe otwieranie mebli bez uchwytów.',
            },
            img3: {
              id: 2,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w uchwyty renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/schwinn/img3.jpg'),
              title: 'Zatrzymuje się na dowolnej wysokości',
              text: 'Front zatrzymuje się na dowolnej wysokości pozostając zawsze w zasięgu ręki! Wystarczy wyregulować siłownik odpowiednio do wagi frontu.',
            },
            img4: {
              id: 3,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w uchwyty renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/schwinn/img4.jpg'),
              title: 'Identyczny design w szafkach dolnych i górnych',
              text: 'Poziome szczeliny definiują wygląd i nie powinny być zakłócane przez zbyt wiele pionowych szczelin. Dzięki systemom AVENTOS zachowamy taki sam design w szafkach górnych, jak i w dolnych.',
            },
          },
        },
      },
      extra: {
        first_title: 'Uchwyty i gałki',
        first: [
          {
            id: 0,
            title: 'Uchwyt drewniany',
            subTitle: 'Dwuczęściowy front, składa się podczas otwierania',
            name: 'schwinn_uchwyt_drewniany',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_drewno.jpg'),
          },
          {
            id: 1,
            title: 'Uchwyt w wzór kwiatka',
            subTitle: 'Jednoczęściowy front nachodzi na korpus',
            name: 'schwinn_uchwyt_kwiatek',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_kwiatek.jpg'),
          },
          {
            id: 2,
            title: 'Uchwyt w wzór korony',
            subTitle:
              'Jednoczęściowy front jest unoszony równolegle do korpusu',
            name: 'schwinn_uchwyt_korona',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_korona.jpg'),
          },
          {
            id: 3,
            title: 'Uchwyt modern cienki',
            subTitle: 'Mały podnośnik do frontów górnych',
            name: 'schwinn_uchwyt_cienki',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_cienki.jpg'),
          },
          {
            id: 4,
            title: 'Uchwyt w kształcie gałki',
            subTitle: 'Mały podnośnik do frontów górnych',
            name: 'schwinn_galka_kwadrat',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_galka_kwadrat.jpg'),
          },
          {
            id: 5,
            title: 'Uchwyt okrągły',
            subTitle: 'Do małych frontów uchylnych w szafkach górnych',
            name: 'schwinn_okragly',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_okragly.jpg'),
          },
          {
            id: 6,
            title: 'Uchwyt modern',
            subTitle: 'Do małych frontów uchylnych w szafkach górnych',
            name: 'schwinn_modern',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_modern.jpg'),
          },
          {
            id: 7,
            title: 'Uchwyt listwa',
            subTitle: 'Do małych frontów uchylnych w szafkach górnych',
            name: 'schwinn_listwa',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_listwa.jpg'),
          },
          {
            id: 8,
            title: 'Uchwyt gałka',
            subTitle: 'Do małych frontów uchylnych w szafkach górnych',
            name: 'schwinn_galka',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_galka.jpg'),
          },
        ],
        second_title: 'Stopy i kółka meblowe',
        second: [
          {
            id: 0,
            title: 'Schwinn stopka drewniana',
            subTitle: 'Prosta linia, elegancja.',
            name: 'schwinn_stopka_drewniana',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_stopka_drewniana.jpg'),
          },
          {
            id: 1,
            title: 'Schwinn stopka kwadratowa',
            subTitle: 'Jedna platforma, wiele możliwości.',
            name: 'schwinn_stopka_kwadratowa',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_stopka_kwadrat.jpg'),
          },
          {
            id: 2,
            title: 'Schwinn stopka kwadratowa długa',
            subTitle: 'Prosty i wyrazisty.',
            name: 'schwinn_stopka_kwadratowa_dluga',
            image: require('~/assets/offer/sub/systems/schwinn/schwinn_stopka_kwadratowa_dlug.jpg'),
          },
        ],
      },
    },
    {
      id: 2,
      name: 'Gamet',
      img: 'gamet.jpg',
      bgImg: require('~/assets/offer/systemy_gamet.jpg'),
      subPage: {
        header: {
          title: 'Systemy meblowe Gamet',
          bgImg: require('~/assets/offer/sub/systems/gamet/gametBackground.jpg'),
        },
        body: {
          title: 'Rozwiązania firmy Gamet',
          text: 'To wysokiej jakości systemy meblowe, sprawiające, że z twojej kuchni korzysta się wygodniej i przyjemniej',
          grid: {
            img1: {
              id: 0,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/gamet/img1.jpg'),
              title: 'Łatwy dostęp',
              text: 'AVENTOS przez cały czas zapewnia użytkownikowi swobodę ruchu i wolną przestrzeń nad głową. Podczas pracy w kuchni front może bez przeszkód pozostać cały czas otwarty.',
            },
            img2: {
              id: 1,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/gamet/img2.jpg'),
              title: 'Łatwe otwieranie i wygodne zamykanie',
              text: 'Połączenie lekkiego otwierania i zintegrowanego BLUMOTION to zupełnie nowa jakość otwierania i zamykania frontów górnych. Zastosowanie technologii ruchu SERVO-DRIVE lub TIP-ON to komfortowe otwieranie mebli bez uchwytów.',
            },
            img3: {
              id: 2,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/gamet/img3.jpg'),
              title: 'Zatrzymuje się na dowolnej wysokości',
              text: 'Front zatrzymuje się na dowolnej wysokości pozostając zawsze w zasięgu ręki! Wystarczy wyregulować siłownik odpowiednio do wagi frontu.',
            },
          },
        },
      },
      extra: {
        first_title: 'Systemy i akcesoria',
        first: [
          {
            id: 0,
            title: 'Prowadnice dolne',
            subTitle: 'Dwuczęściowy front, składa się podczas otwierania',
            name: 'gamet_prowadnice_dolne',
            image: require('~/assets/offer/sub/systems/gamet/gamet_prowadnice_dolne.jpg'),
          },
          {
            id: 1,
            title: 'Prowadnice kulkowe',
            subTitle: 'Jednoczęściowy front nachodzi na korpus',
            name: 'gamet_prowadnice_kulkowe',
            image: require('~/assets/offer/sub/systems/gamet/gamet_prowadnice_kulkowe.jpg'),
          },
          {
            id: 2,
            title: 'Prowadnice rolkowe',
            subTitle:
              'Jednoczęściowy front jest unoszony równolegle do korpusu',
            name: 'gamet_prowadnice_rolkowe',
            image: require('~/assets/offer/sub/systems/gamet/gamet_prowadnice_rolkowe.jpg'),
          },
          {
            id: 3,
            title: 'Podnośniki',
            subTitle: 'Mały podnośnik do frontów górnych',
            name: 'gamet_wklad_podnosniki',
            image: require('~/assets/offer/sub/systems/gamet/gamet_wklad_podnosniki.jpg'),
          },
          {
            id: 4,
            title: 'Ścianki do szuflad',
            subTitle: 'Mały podnośnik do frontów górnych',
            name: 'gamet_sciany',
            image: require('~/assets/offer/sub/systems/gamet/gamet_sciany.jpg'),
          },
          {
            id: 5,
            title: 'Systemy szuflad',
            subTitle: 'Do małych frontów uchylnych w szafkach górnych',
            name: 'gamet_systemy_szuflad',
            image: require('~/assets/offer/sub/systems/gamet/gamet_systemy_szuflad.jpg'),
          },
          {
            id: 6,
            title: 'Wkład na sztućce',
            subTitle: 'Do małych frontów uchylnych w szafkach górnych',
            name: 'gamet_wklad_sztucce',
            image: require('~/assets/offer/sub/systems/gamet/gamet_wklad_sztucce.jpg'),
          },
        ],
      },
    },
    {
      id: 3,
      name: 'Siro',
      img: 'siro.jpg',
      bgImg: require('~/assets/offer/systemy_siro.jpg'),
      subPage: {
        header: {
          title: 'Systemy meblowe Siro',
          bgImg: require('~/assets/offer/sub/systems/blum/blumBackground.jpg'),
        },
        body: {
          title: 'Rozwiązania firmy Siro',
          text: 'To wysokiej jakości systemy meblowe, sprawiające, że z twojej kuchni korzysta się wygodniej i przyjemniej',
          grid: {
            img1: {
              id: 0,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/siro/img1.jpg'),
              title: 'Łatwy dostęp',
              text: 'AVENTOS przez cały czas zapewnia użytkownikowi swobodę ruchu i wolną przestrzeń nad głową. Podczas pracy w kuchni front może bez przeszkód pozostać cały czas otwarty.',
            },
            img2: {
              id: 1,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/siro/img2.jpg'),
              title: 'Łatwe otwieranie i wygodne zamykanie',
              text: 'Połączenie lekkiego otwierania i zintegrowanego BLUMOTION to zupełnie nowa jakość otwierania i zamykania frontów górnych. Zastosowanie technologii ruchu SERVO-DRIVE lub TIP-ON to komfortowe otwieranie mebli bez uchwytów.',
            },
            img3: {
              id: 2,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/siro/img3.jpg'),
              title: 'Zatrzymuje się na dowolnej wysokości',
              text: 'Front zatrzymuje się na dowolnej wysokości pozostając zawsze w zasięgu ręki! Wystarczy wyregulować siłownik odpowiednio do wagi frontu.',
            },
            img4: {
              id: 3,
              alt: 'Zdjęcie przedstawiające nowoczesną kuchnię wyposażoną w systemy renomowanego producenta Blum',
              src: require('~/assets/offer/sub/systems/siro/img4.jpg'),
              title: 'Identyczny design w szafkach dolnych i górnych',
              text: 'Poziome szczeliny definiują wygląd i nie powinny być zakłócane przez zbyt wiele pionowych szczelin. Dzięki systemom AVENTOS zachowamy taki sam design w szafkach górnych, jak i w dolnych.',
            },
          },
        },
      },
      extra: {
        first_title: 'Uchwyty meblowe',
        first: [
          {
            id: 0,
            title: 'Uchwyt #1',
            subTitle: 'Dwuczęściowy front, składa się podczas otwierania',
            name: 'aventos_hf',
            image: require('~/assets/offer/sub/systems/siro/uchwyt_1.jpg'),
          },
          {
            id: 1,
            title: 'Uchwyt #2',
            subTitle: 'Jednoczęściowy front nachodzi na korpus',
            name: 'aventos_hs',
            image: require('~/assets/offer/sub/systems/siro/uchwyt_2.jpg'),
          },
          {
            id: 2,
            title: 'Uchwyt #3',
            subTitle:
              'Jednoczęściowy front jest unoszony równolegle do korpusu',
            name: 'aventos_hl',
            image: require('~/assets/offer/sub/systems/siro/uchwyt_3.jpg'),
          },
          {
            id: 3,
            title: 'Uchwyt #4',
            subTitle: 'Mały podnośnik do frontów górnych',
            name: 'aventos_hk_top',
            image: require('~/assets/offer/sub/systems/siro/uchwyt_4.jpg'),
          },
          {
            id: 4,
            title: 'Uchwyt #5',
            subTitle: 'Mały podnośnik do frontów górnych',
            name: 'aventos_hk_s',
            image: require('~/assets/offer/sub/systems/siro/uchwyt_5.jpg'),
          },
        ],
        second_title: 'Płyty i blaty meblowe',
        second: [
          {
            id: 0,
            title: 'Płyta #1',
            subTitle: 'Prosta linia, elegancja.',
            name: 'legrabox',
            image: require('~/assets/offer/sub/systems/siro/plyta_1.jpg'),
          },
          {
            id: 1,
            title: 'Płyta #2',
            subTitle: 'Jedna platforma, wiele możliwości.',
            name: 'Merivobox',
            image: require('~/assets/offer/sub/systems/siro/plyta_2.jpg'),
          },
          {
            id: 2,
            title: 'Płyta #3',
            subTitle: 'Prosty i wyrazisty.',
            name: 'tandembox_antaro',
            image: require('~/assets/offer/sub/systems/siro/plyta_3.jpg'),
          },
        ],
        third_title: 'Akcesoria',
        third: [
          {
            id: 0,
            title: 'Kosz na produkty',
            subTitle: 'Innowacyjna technika',
            name: 'cliptop_blumotion',
            image: require('~/assets/offer/sub/systems/siro/akcesoria_1.jpg'),
          },
          {
            id: 1,
            title: 'Kosz na wino',
            subTitle: 'Sprawdzone działanie i atrakcyjny design',
            name: 'cliptop',
            image: require('~/assets/offer/sub/systems/siro/akcesoria_2.jpg'),
          },
          {
            id: 2,
            title: 'Kosz na talerze',
            subTitle: 'Technika i wysoka efektywność',
            name: 'modul',
            image: require('~/assets/offer/sub/systems/siro/akcesoria_3.jpg'),
          },
          {
            id: 3,
            title: 'Kosz na garczki',
            subTitle: 'Technika i wysoka efektywność',
            name: 'modul',
            image: require('~/assets/offer/sub/systems/siro/akcesoria_4.jpg'),
          },
        ],
      },
    },
  ],
  fronty: [
    {
      id: 0,
      route: 'fronty_drewniane',
      title: 'Fronty drewniane',
      description: 'Ogromny wybór, wiele możliwości',
      content:
        'Fronty drewniane to wybór pasujący do większości kuchni, ale nie tylko, bo sprawdzą się również w łazience, korytarzu czy salonie.',
      bgImg: require('~/assets/offer/sub/fronty/bgImg.jpg'),
      images: [
        {
          id: 0,
          alt: 'Zdjęcie przedstawiające nowoczesną kuchnie z wykorzystaniem drewnianych frontów.',
          src: require('~/assets/offer/sub/fronty/img1.jpg'),
        },
        {
          id: 1,
          alt: 'Zdjęcie przedstawiające nowoczesną kuchnie z wykorzystaniem drewnianych frontów.',
          src: require('~/assets/offer/sub/fronty/img2.jpg'),
        },
        {
          id: 2,
          alt: 'Zdjęcie przedstawiające nowoczesną kuchnie z wykorzystaniem drewnianych frontów.',
          src: require('~/assets/offer/sub/fronty/img3.jpg'),
        },
      ],
      extra: {
        title: 'Wybierz coś dla siebie',
        description: 'Skontaktuj się z nami',
        content:
          'Przedstawimy Ci katalog i pomożemy w doborze odpowiedniego wzoru.',
      },
    },
    {
      id: 1,
      route: 'fronty_mdf',
      title: 'Fronty MDDF',
      description: 'Najczęsciej spotykana klasyka',
      content:
        'Fronty MDF to niezwykłe uniwersalny wybór, charakteryzuje ich różnorodny rodzaj wykończenia, połysk, półpołysk lub mat.',
      bgImg: require('~/assets/offer/sub/fronty/bgImg2.jpg'),
      images: [
        {
          id: 0,
          alt: 'Zdjęcie przedstawiające nowoczesną kuchnie z wykorzystaniem drewnianych frontów.',
          src: require('~/assets/offer/sub/fronty/img1.jpg'),
        },
        {
          id: 1,
          alt: 'Zdjęcie przedstawiające nowoczesną kuchnie z wykorzystaniem drewnianych frontów.',
          src: require('~/assets/offer/sub/fronty/img2.jpg'),
        },
        {
          id: 2,
          alt: 'Zdjęcie przedstawiające nowoczesną kuchnie z wykorzystaniem drewnianych frontów.',
          src: require('~/assets/offer/sub/fronty/img3.jpg'),
        },
      ],
      extra: {
        title: 'Wybierz coś dla siebie',
        description: 'Skontaktuj się z nami',
        content:
          'Przedstawimy Ci katalog i pomożemy w doborze odpowiedniego wzoru.',
      },
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
        route: `oferta/fronty/${element.name}`,
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
        route: `oferta/systemy_meblowe/${element.name.toLowerCase()}`,
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
        route: `oferta/szklo_grafika/${element.name.toLowerCase()}`,
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
  specifiedSystemy(state, getters, rootState) {
    return state.systems.find(
      (offer) => offer.name.toLowerCase() === rootState.route.params.id
    )
  },
  specifiedFronty(state, getters, rootState) {
    return state.fronty.find(
      (offer) => offer.route === rootState.route.params.id
    )
  },
  specifiedExtrass(state, getters, rootState) {
    return state.extrass.find((extrass) => {})
  },
  extraOffer(state, getters, rootState) {
    const specified = getters.specifiedOffer.extra
    const offer = state.systems
    const selected = []
    if (typeof specified != 'undefined') {
      specified.forEach((i) => {
        offer.find((singleItem) => {
          if (singleItem.id === i) {
            selected.push(singleItem.extra)
          }
        })
      })
      return selected
    } else {
      return
    }
  },
}
