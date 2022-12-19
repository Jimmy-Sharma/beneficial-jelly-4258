let parent = document.getElementById("parent");

async function loadJSON(url) {
  const res = await fetch(url);
  return await res.json();
}
let show_page = localStorage.getItem("current_page");
let showSearchResult = JSON.parse(localStorage.getItem("fromSearchResult"))
if (showSearchResult) {
  console.log(showSearchResult);
  product(showSearchResult);
  localStorage.removeItem('fromSearchResult')
}
else{
  loadJSON(`./${show_page}.json`).then((data) => {
    product(data[show_page]);
  });
}


// console.log(localStorage.getItem("current_page"));



function product(data) {
  data.forEach((element) => {
    // console.log(element.item[0].img1);
    let main_div=document.createElement("div")
    let box=document.createElement("div")
    box.classList.add("task");


    let box_div = document.createElement("div");
    box_div.style.cursor="pointer"
    box_div.classList.add("tata");
    main_div.classList.add("bata");
    box_div.addEventListener("click", function () {
      bag(element);
    });
    box_div.innerHTML = `
    <div class="img-box minbox">
      <img
        class="p_image"
        src="${element.item[0].img1}"
        alt=""
      />
    </div>
    <div class="img-box">
      <img
        class="p_image"
        src="${element.item[0].img2}"
        alt=""
      />
    </div>
    <div class="img-box">
      <img
        class="p_image"
        src="${element.item[0].img3}"
        alt=""
      />
    </div>
    <div class="img-box">
      <img
        class="p_image"
        src="${element.item[0].img4}"
        alt=""
      />
    </div>
    `;
    let name = document.createElement("h1");
    let price=document.createElement("p")
    price.innerHTML="₹"+" "+element.price
    name.innerText = element.name;
    box.append(name,price)

    main_div.append(box_div, box);
    parent.append(main_div)
  });
}

function bag(element) {
  console.log(element);
localStorage.setItem("show_product",JSON.stringify(element))

  window.location.href = "detail_osama.html";


}
function showmens() {
  localStorage.setItem("current_page","mens")
  window.location.href="index.html"
}

function showwomens() {
  localStorage.setItem("current_page","women")
  window.location.href="index.html"
}

function showkids() {
  localStorage.setItem("current_page","kids")
  window.location.href="index.html"
}

