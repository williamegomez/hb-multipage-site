import './HeroCss.scss'
import template from './HeroCss.pug'
import jsonHero from './../../../data/HeroCss.json'
import ResponsiveUtility from './../shared/ResponsiveUtility'

export default class HeroCss {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(jsonHero)
    this.responseUtil = new ResponsiveUtility()
    this.image = node.querySelector('.hero-css__img')
    this.image.style.backgroundImage = `url(${jsonHero.images.small.url})`
    this.setSizeImage()
  }

  setSizeImage () {
    if (this.responseUtil.checkScreenWidth('medium')) {
      this.image.style.backgroundImage = `url(${jsonHero.images.medium.url})`
    }
    if (this.responseUtil.checkScreenWidth('large')) {
      this.image.style.backgroundImage = `url(${jsonHero.images.large.url})`
    }
  }
}
