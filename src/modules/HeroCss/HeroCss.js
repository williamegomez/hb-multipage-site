import './HeroCss.scss'
import template from './HeroCss.pug'
import jsonHero from './../../../data/HeroCss.json'

export default class HeroCss {
  constructor (node) {
    this.node = node
    this.screenWidth = window.screen.width
    this.node.innerHTML = template(jsonHero)
    this.image = node.querySelector('.hero-css__img')
    this.image.style.backgroundImage = `url(${jsonHero.images.small.url})`
    this.setSizeImage()
  }

  setSizeImage () {
    if ((this.screenWidth > 639) & (this.screenWidth < 1024)) {
      this.image.style.backgroundImage = `url(${jsonHero.images.medium.url})`
    }
    if (this.screenWidth > 1024) {
      this.image.style.backgroundImage = `url(${jsonHero.images.large.url})`
    }
  }
}
