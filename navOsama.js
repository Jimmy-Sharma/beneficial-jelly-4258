// function sam() {
//   document.getElementById("checker").checked = true;
// }
function navbar() {
  let parent = document.getElementById("navbar");


  parent.innerHTML = `
  <label htmlFor="checker" class="line">
  <i class="fas fa-bars" onclick="show()"></i>
</label>
  <div class="logo">  
  <img src="logo.png" alt="" />
</div>


<ul id="#style-2">
  <div class="item">
    <li >
      <i class="far fa-address-card"></i>
      <button id="mens" class="tag" onclick="showmens()"><span>Mens</span></button>
    </li>
    <li >
      <i class="far fa-address-card"></i>
      <button id="women" class="tag" onclick="showwomens()">
        <span>Womens</span>
      </button>
    </li>
    <li >
      <i class="fas fa-sitemap"></i>
      <button id="kids"  class="tag" onclick="showkids()"><span>Kids</span></button>
    </li>
  </div>

  <div class="menu">
  <p onclick="page()">NEW</p>
  <p onclick="page()">PARTY</p>
  <P onclick="page()">EDITION</P>
  <P onclick="page()">ZARA ORIGINS</P>
  <P onclick="page()">ZARA ATHLETICZ</P>
  <P onclick="page()">BEST SELLERS</P>
  <P onclick="page()">BASIC</P>
  <P onclick="page()">COATS | TRENCH COATS</P>
  <P onclick="page()">JACKETS</P>
  <P onclick="page()">PUFFERS</P>
  <P onclick="page()">HOODIES | SWAEATSHIRST</P>
  <P onclick="page()">SWEATERS | CARDIGANS</P>
  <P onclick="page()">T-SHIRSTS</P>
  <P onclick="page()">POLO SHIRSTS</P>
  <P onclick="page()">JEANS</P>
  <P onclick="page()">OVERSHIRTS</P>
  <P onclick="page()">GILETS</P>
  <P onclick="page()">BLAZERS</P>
  <P onclick="page()">SUITS</P>
  <P onclick="page()">TRACKSUITS</P>
  <P onclick="page()">SHOES</P>
  <P onclick="page()">BAGS | BACKPACKS</P>
  <P onclick="page()">ACCESSORIES</P>
  <P onclick="page()">PERFUMES</P>
  




  </div>
</ul>
   
    `;
}
navbar();
function show() {
    if (document.querySelector("ul").classList.contains("shownav")) {
        document.querySelector("ul").classList.remove("shownav")
    }
    else{
        document.querySelector("ul").classList.add("shownav")
    }
}
function page() {
  window.location.href="product_osama.html"
  
}

