import {UI} from './UI.js'
import {PhotoPieces} from './PhotoPieces.js'
import { Hamburger } from './Hamburger.js'


class BellonaWebsite  {

    mainImage = new PhotoPieces()
    hamburger = new Hamburger()

    listeners() {
        this.hamburger.hamburgerMenu.addEventListener('click',()=>this.hamburger.showMenu())
        this.hamburger.navLinks.forEach((link)=>{           
            link.addEventListener('click',(e)=> this.hamburger.clickLink(e))
        })
        this.hamburger.backLink.addEventListener('click',(e)=>this.hamburger.closeMenu(e))
    }
    init() {
        this.mainImage.cutImage()
        this.listeners()
    }

}

window.onload = function () {
    const bellona = new BellonaWebsite()
    bellona.init()
}
