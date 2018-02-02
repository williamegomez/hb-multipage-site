import template from './MainMenu.pug'
import './MainMenu.scss'
import jsonData from './../../../data/MainMenu.json'

export default class MainMenu {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(jsonData)
  }
}
