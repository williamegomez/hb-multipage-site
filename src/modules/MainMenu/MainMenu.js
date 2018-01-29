/* global DOMParser */

import template from './MainMenu.pug'
import './MainMenu.scss'

export default class MainMenu {
  constructor (node) {
    this.node = node
    this.generateDOM(template)
  }

  generateDOM () {
    var parser = new DOMParser()
    var button = parser.parseFromString(template, 'text/html').body.children[0]
    this.node.appendChild(button)
  }
}
