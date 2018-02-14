import './HeroCss.scss'
import template from './HeroCss.pug'
import jsonHero from './../../../data/HeroCss.json'

export default class HeroCss {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(jsonHero)
  }
}
