const elems = document.getElementsByClassName('child');
const parent = document.querySelector('.conteiner');
const conteiner = document.querySelector('.parent');

const CONTEINER_HEIGHT = 300;
const ELEMENT_HEIGHT = 42

parent.style.paddingBottom = `${CONTEINER_HEIGHT - ELEMENT_HEIGHT}px`

Array.from(elems).forEach((elem) => {
    elem.addEventListener('click', scroll)
})

function scroll(){
    let scrolled = conteiner.scrollTop;
    let timer = null;

    const scrollToElement = () => {
        if(scrolled < +this.id * ELEMENT_HEIGHT) {
            conteiner.scrollTop = scrolled
            scrolled += 2;
            timer = setTimeout(scrollToElement, 1);
        } else {
            clearTimeout(timer)
            conteiner.scrollTo(0,+this.id * ELEMENT_HEIGHT);
        }
    }
    scrollToElement()
}



