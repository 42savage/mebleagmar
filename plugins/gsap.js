import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// Inject gsap's core for global use
export default (context, inject) => {
  inject('gsap', gsap)
  // inject('ScrollTrigger', ScrollTrigger)
}
