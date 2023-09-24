let user = JSON.parse(sessionStorage.user || null);
let loader = document.querySelector(".loader");

// checking user is logged in or not
window.onload =  function() {
    if(user) {
        if(!compareToken(user.authToken, user.email)) {
            location.replace("/login");
        }

    } else {
       location.replace("/login")
    }
}

//Price inputs

const actualPrice = document.querySelector("#actual-price");
const discountPercentage = document.querySelector("#discount");
const sellingPrice = document.querySelector("#sell-price");
 discountPercentage.addEventListener("input", function() {
    if(discountPercentage.value > 100) {
        discountPercentage.value = 90;
    } else {
        let discount = actualPrice.value * discountPercentage.value / 100;
        sellingPrice.value = actualPrice.value - discount;
    }
 })

 sellingPrice.addEventListener("input", function() {
   let discount = (sellingPrice.value / actualPrice.value) * 100;
   discountPercentage.value = discount; 
 })
 //upload image handle

 let uploadImages = document.querySelectorAll(".fileUpload");
 let imagePaths = []; // will store all uploaded images paths;
 
 fetch("/s3url").then(res => res.json())
 .then(url => console.log(url));