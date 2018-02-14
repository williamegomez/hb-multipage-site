import MainMenu from './modules/MainMenu/MainMenu'
import MainHero from './modules/MainHero/MainHero'
import HeroCss from './modules/HeroCss/HeroCss'

/* eslint-disable */
const menu = new MainMenu(document.querySelector('.js-MainMenu-1'))
const hero = new MainHero(document.querySelector('.js-MainHero-1'))
const heroCss = new HeroCss(document.querySelector('.js-HeroCss-1'))
