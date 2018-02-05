import template from './MainMenu.pug'
import './MainMenu.scss'
import jsonData from './../../../data/MainMenu.json'

export default class MainMenu {
  constructor (node) {
    this.node = node
    this.indexSublist = -1
    this.node.innerHTML = template(jsonData)
    this.getNodes()
    this.setEvents()
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
    this.newIndexSublist = Array.from(this.buttons).indexOf(event.target)
    console.log(this.indexSublist)
    if (this.indexSublist !== -1) {
      this.sublists[this.indexSublist].classList.remove('main-menu__sublist--open')
    }
    if (this.indexSublist !== this.newIndexSublist) {
      this.sublists[this.newIndexSublist].classList.add('main-menu__sublist--open')
    }
    this.indexSublist = this.newIndexSublist
  }

  handleHamburger (event) {
    this.list.classList.toggle('main-menu__list--open')
    this.hamburgerTop.classList.toggle('main-menu__hamburger-top--open')
    this.hamburgerBottom.classList.toggle('main-menu__hamburger-bottom--open')
  }
}
