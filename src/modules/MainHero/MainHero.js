import './MainHero.scss'
import template from './MainHero.pug'
import jsonHero from './../../../data/MainHero.json'

export default class MainHero {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(jsonHero)
  }
}
