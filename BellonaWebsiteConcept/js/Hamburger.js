import {UI} from './UI.js';

export class Hamburger extends UI {
    hamburgerMenu = this.getElement(this.UiSelectors.hamburger);
    navBar = this.getElement(this.UiSelectors.nav);
    navLinks = this.getAllElements(this.UiSelectors.navLinks)
    backLink = this.getElement(this.UiSelectors.backLink)


    showMenu() {
        this.hamburgerMenu.classList.toggle('activeMenu')
        this.navBar.classList.toggle('navActive')   
    }
    clickLink() {
        this.hamburgerMenu.classList.toggle('activeMenu')
        this.navBar.classList.remove('navActive')  
    }
    closeMenu(e) {
        e.preventDefault()
    }


}