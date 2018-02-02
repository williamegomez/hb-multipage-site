/* global DOMParser */

import template from './MainMenu.pug'
import './MainMenu.scss'

export default class MainMenu {
  constructor (node) {
    this.node = node
    this.generateDOM(template)
    this.getNodes()
    this.setEvents()
  }

  generateDOM () {
    var parser = new DOMParser()
    var shell = parser.parseFromString(template, 'text/html').body.children[0]
    this.node.appendChild(shell)
  }

  getNodes () {
    this.list = this.node.querySelector('.main-menu__list')
    this.buttons = this.node.querySelectorAll('.main-menu__button')
    this.hamburger = this.node.querySelector('.main-menu__hamburger')
    this.hamburgerTop = this.node.querySelector('.main-menu__hamburger-top')
    this.hamburgerBottom = this.node.querySelector('.main-menu__hamburger-bottom')
    this.sublists = this.node.querySelectorAll('.main-menu__sublist')
  }

  setEvents () {
    this.list.addEventListener('click', this.handleClickList.bind(this))
    this.hamburger.addEventListener('click', this.handleHamburger.bind(this))
  }

  handleClickList (event) {
    var index = Array.from(this.buttons).indexOf(event.target)
    this.sublists[index].classList.toggle('main-menu__sublist--open')
  }

  handleHamburger (event) {
    this.list.classList.toggle('main-menu__list--open')
    this.hamburgerTop.classList.toggle('main-menu__hamburger-top--open')
    this.hamburgerBottom.classList.toggle('main-menu__hamburger-bottom--open')
  }
}
