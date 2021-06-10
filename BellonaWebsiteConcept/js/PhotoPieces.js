import {UI} from './UI.js'

export class PhotoPieces extends UI {
    bannerImage = this.getElement(this.UiSelectors.mainPhoto)
    bannerBlocks = this.getAllElements(this.UiSelectors.bannerBlocks)

    creatorArr = [];

    cutImage() {   
        for(let i = 0; i < 300; i++) {
            const createDiv = document.createElement('div');

            createDiv.setAttribute('id','Block');
            createDiv.classList.add('header__blocks')
            this.creatorArr.push(createDiv)
            this.bannerImage.appendChild(this.creatorArr[i])
            
            const duration = Math.random() * 3
            this.creatorArr[i].style.animationDuration =  `${1.5 + duration}s`;     
           
            }
        }
}

