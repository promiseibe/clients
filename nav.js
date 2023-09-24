// Navbar Menu
const nav = document.querySelector(".navbar");
function createNav() {
nav.innerHTML = ` 
<div class="container-fluid">
  <a class="navbar-brand" href="#">Maibe store</a>
  <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Maibe Super Store</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Women</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kids</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Accessories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" title="user">
          <img src="images/user.png" class="user" id="user-img">
         <div class="login-logout-popup hide">
         <p class="account-info">Log in as, name</p>
         <button class="btn-use" id="user-btn">Log out </button>
         </div>
          </a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="/signup" title="cart">
        <img src="images/shop.png" class="user">
       
        </a>
      </li>
        
     
        
        
      </ul>
      
      <form class="form-search mt-2" role="search" >
        <input type="search"  class="form-control   " placeholder="Search" aria-label="Search">
        <button class="btn btn-success button" type="submit">Search</button>
      </form>
    </div>
  </div>
</div>
</nav>`
}
createNav();

//nav popup

const userImageButton = document.querySelector("#user-img");
const userPopup = document.querySelector(".login-logout-popup");
const popuptext = document.querySelector(".account-info");
const actionBtn = document.querySelector("#user-btn");

userImageButton.addEventListener("click", function() {
  userPopup.classList.toggle("hide");
})

window.onload = function() {
  let user = JSON.parse(sessionStorage.user || null);
  if(user != null) {
    //means user is logged in
    popuptext.innerHTML = `Welcome, ${user.names}` 
    actionBtn.innerHTML = `logout`;
    actionBtn.addEventListener("click", function() {
      sessionStorage.clear();
      location.reload();
    })
  } else {
    // user is logout

    popuptext.innerHTML = "log in to place order";
    actionBtn.innerHTML = "log in";
    actionBtn.addEventListener("click", function() {
      location.href = "/login";
    })
  }
}