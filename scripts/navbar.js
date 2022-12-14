//Navbar Component
function navbar() {
  return `<div id="nav-bar-left">
    <div id="menuLogo">
      <a href="../pages/navMenu.html"><img src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg" alt="menuLogo" id="menuLogo"></a>
    </div>
    <div id="logo">
      <a href="../index.html">
        <img src="Images/Zara Logo.jpg" alt="logo" id="logo">
      </a>   
    </div>
    </div>
  </div>
  <div id="nav-bar-right">
    <div id="search_bar">
        <label class="navLabel" for="search"><a href="../searchProducts.html">SEARCH</a></label>
        <p id="search"></p>
    </div>
    <div id="nav-items">
      <ul>
        <li class="nav_item"><a class="navLinks" id="user-name" href="../login.html"></a> </li>
        <li class="nav_item" id="help"><a class="navLinks" href="">HELP</a> </li>
        <li class="nav_item" id="last-nav"><a class="navLinks" href="../Cart.html">CART</a> </li>
      </ul>
    </div>
  </div>`;
}

export default navbar;
