function sam() {
  document.getElementById("checker").checked = true;
}
function navbar() {
  let parent = document.getElementById("navbar");
  
  parent.innerHTML = `
  <div class="logo">
  <img src="logo.png" alt="" />
</div>

<label htmlFor="checker" class="line">
  <i class="fas fa-bars" onclick="show()"></i>
</label>
<ul>
  <div class="item">
    <li onclick="sam()">
      <i class="far fa-address-card"></i>
      <button class="tag" onclick="showmens()"><span>Mens</span></button>
    </li>
    <li onclick="sam()">
      <i class="far fa-address-card"></i>
      <button class="tag" onclick="showwomens()">
        <span>Womens</span>
      </button>
    </li>
    <li onclick="sam()">
      <i class="fas fa-sitemap"></i>
      <button class="tag" onclick="showkids()"><span>Kids</span></button>
    </li>
  </div>

  <div>
    <h1>osama</h1>
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

