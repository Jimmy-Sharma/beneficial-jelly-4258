// function sam() {
  //   document.getElementById("checker").checked = true;
  // }
  function navbar() {
    let parent = document.getElementById("navbar");
    parent.innerHTML = `
    <label htmlFor="checker" class="line">
    <i class="fas fa-bars" onclick="show()"></i>
  </label>
    <div id="switch_to_index" class="logo">  
    <img src="zara1.png" alt="" />
  </div>
   <div id="right">
   <li class="search_icon">
   <i onclick="showSearcheditem()" class="fa-solid fa-magnifying-glass"></i>
   <input id="find_item" oninput="abcdef()" class="search" type="text" placeholder="SEARCH">
  </li>
  <li>
  <i class="fa-solid fa-user"></i>
  <a id="user_name" class="loginb" href="login.html"></a>
  </li>
  <li>
  <i class="fa-solid fa-bag-shopping"></i>
  <a class="help" href="help.html">HELP</a>
  </li>
         
        
        
          <li><i class="fa-solid fa-cart-shopping"></i>
                <a class="icon" href="cart.html">Cart</a>
          </li>
           
         
          
      </div>
  <ul id="#style-2">
  <div class="item" id="mobile"> 
  <i class="fa-solid fa-user"></i>
  <a id="user_name_res" class="loginb" href="login.html"></a>
  </li>
  <li>
  <i class="fa-solid fa-bag-shopping"></i>
  <a class="help" href="help.html">HELP</a>
  </li>
         
         
        
        
          <li><i class="fa-solid fa-cart-shopping"></i>
                <a class="icon" href="cart.html">Cart</a>
          </li>
  </div>
    <div class="item">
      <li >
      <i class="fa-solid fa-person"></i>
      <button id="mens" class="tag" onclick="showmens()"><span>Mens</span></button>
      </li>
      <li >
      <i class="fa-solid fa-person-dress"></i>
      <button id="women" class="tag" onclick="showwomens()">
          <span>Womens</span>
        </button>
      </li>
      <li >
        <i class="fa-solid fa-child-reaching"></i>
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
  function abcdef() {
    let search_item = document.getElementById('find_item').value.toLowerCase()
    
    var arr = []
    searchJSON(`./women.json`).then((data) => {
      // obj.mens = data.women
      arr.splice(arr.length-1,0,...data.women)
    });
    searchJSON(`./mens.json`).then((data) => {
      arr.splice(arr.length-1,0,...data.mens)
    });
    searchJSON(`./kids.json`).then((data) => {
      arr.splice(arr.length-1,0,...data.kids)
      const result = arr.filter(e => e.name.toLowerCase().includes(search_item));
      localStorage.setItem("fromSearchResult" , JSON.stringify(result))
    });
  }
  function showSearcheditem() {
    window.location.href = 'product_osama.html'
  }
  async function searchJSON(url) {
    const res = await fetch(url);
    return await res.json();
  }


  let switch_to_index = document.getElementById("switch_to_index")
  switch_to_index.style.cursor= "pointer"
  
  switch_to_index.addEventListener("click",function(){
    window.location.href="index.html"
    console.log("me")
  })



  var uname=localStorage.getItem("x") || "Log In"

  let userName=document.getElementById("user_name")

  let userNameREs=document.getElementById("user_name_res")
  

userName.innerText=uname
userNameREs.innerText=uname
