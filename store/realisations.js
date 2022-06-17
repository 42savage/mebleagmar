export const state = () => ({
  images: [
    {
      id: 0,
      src: require(`~/assets/gallery/realisations/img1.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 1,
      src: require(`~/assets/gallery/realisations/img2.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 2,
      src: require(`~/assets/gallery/realisations/img3.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 3,
      src: require(`~/assets/gallery/realisations/img4.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 4,
      src: require(`~/assets/gallery/realisations/img5.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 5,
      src: require(`~/assets/gallery/realisations/img6.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 6,
      src: require(`~/assets/gallery/realisations/img7.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 7,
      src: require(`~/assets/gallery/realisations/img8.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 8,
      src: require(`~/assets/gallery/realisations/img9.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 9,
      src: require(`~/assets/gallery/realisations/img10.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 10,
      src: require(`~/assets/gallery/realisations/img11.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 11,
      src: require(`~/assets/gallery/realisations/img12.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 12,
      src: require(`~/assets/gallery/realisations/img13.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 13,
      src: require(`~/assets/gallery/realisations/img14.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 14,
      src: require(`~/assets/gallery/realisations/img15.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 15,
      src: require(`~/assets/gallery/realisations/img16.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 16,
      src: require(`~/assets/gallery/realisations/img17.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 17,
      src: require(`~/assets/gallery/realisations/img18.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 18,
      src: require(`~/assets/gallery/realisations/img19.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
    {
      id: 19,
      src: require(`~/assets/gallery/realisations/img20.jpg`),
      alt: 'Zdjęcie przedstawiające kuchnie',
    },
  ],
})
export const getters = {
  images(state) {
    return state.images
  },
}
