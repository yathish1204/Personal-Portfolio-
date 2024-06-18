const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

export default function addAnimation(){
    scrollers.forEach(scroller=>{
        scroller.setAttribute('data-animatted',true);

        const scrollerInner = scroller.querySelector('.scroll_inner');
        if(scrollerInner){
            const scrollerContent = Array.from(scrollerInner.children);
        // console.log(scrollerContent);


        scrollerContent.forEach(item=>{
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden',true);
            scrollerInner.appendChild(duplicatedItem);
        })
    
    }
    })
}

