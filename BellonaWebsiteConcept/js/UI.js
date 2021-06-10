export class UI {
    UiSelectors = {
        mainPhoto: 'MainBanner',
        bannerBlocks: '#Block',
        hamburger: 'Hamburger',
        nav: 'Navigation',
        navLinks: '.menuLink',
        newsletterTitle: 'NewsTitle',
        backLink: 'Back'

    }
    getElement(selector) {
      return document.getElementById(selector)  
    }
    getAllElements(selector) {
        return document.querySelectorAll(selector)  
    }

}