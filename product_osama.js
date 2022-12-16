async function loadJSON(url) {
    const res = await fetch(url);
    return await res.json();
  }
  
  loadJSON("./women.json").then((data) => {
    product(data.women)
  });
  

let parent = document.getElementById("parent");
function product(data) {
  data.forEach((element) => {
    console.log(element.item[0].img1);
    let box_div=document.createElement("div")
    box_div.addEventListener("click",function(){
      bag()

    })
    box_div.innerHTML=`
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
    `
    let name=document.createElement("h1")
    name.innerText=element.name

  parent.append(box_div,name)  
  });
  
}
function bag(){
  window.location.href="detail_osama.html"
}
