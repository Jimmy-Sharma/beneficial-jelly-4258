async function loadJSON(url) {
  const res = await fetch(url);
  return await res.json();
}
let show_page = localStorage.getItem("current_page");
loadJSON(`./${show_page}.json`).then((data) => {
  product(data[show_page]);
});
// console.log(localStorage.getItem("current_page"));


let parent = document.getElementById("parent");
function product(data) {
  data.forEach((element) => {
    // console.log(element.item[0].img1);
    let box_div = document.createElement("div");
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
    name.innerText = element.name;

    parent.append(box_div, name);
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

