const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach(function(item, i) {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener("click", function() {

        item.scrollLeft += containerWidth
       
       
    })

    preBtn[i].addEventListener("click", function(){
        
        item.scrollLeft -= containerWidth
})
})