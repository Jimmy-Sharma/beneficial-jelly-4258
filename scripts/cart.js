let cart_data = JSON.parse(localStorage.getItem("cart_data"));

// console.log(cart_data);
let sum=0
let parent = document.getElementById("cart_parent");
function display(cart_data) {

  cart_data.forEach((element,index) => {
    sum=Number(sum)+Number(element.price)
    console.log(element.item[0].img1);
    let box_div = document.createElement("div");
    box_div.classList.add("item_main_div_PS")
    let box_div1 = document.createElement("div");
    box_div1.classList.add("item_sub_div_PS")
    box_div1.innerHTML=`

    <img src="${element.item[0].img1}" alt="">

    `
    let box_div2 = document.createElement("div");
    box_div2.classList.add("des_main_div_PS")

    box_div2.innerHTML=`

                        <div class="des_sub_div_PS">
                            <div>
                                <h2>
                                    ${element.name}
                                </h2>
                            </div>
                            <div>
                                <p>${element.item[0].color}</p>
                            </div>
                            <div>
                                <p>L (UK L)</p>
                            </div>
                            <div>
                                <select name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h4>₹ ${element.price}</h4>
                        </div>
                      

    `
    

    let btn_div = document.createElement("div");
    btn_div.classList.add("btn_div")
    let addtocart = document.createElement("button");
    addtocart.classList.add("btn-cart")
    addtocart.innerText="Delete"
    addtocart.onclick=function(){
        remove_item(cart_data,index)
    }
    let savelater = document.createElement("button");
    savelater.innerText="Save For Later"
    savelater.classList.add("btn-cart")

    // btn_div.append(addtocart)

    // box_div.innerHTML = `
    // `;
    btn_div.append(addtocart,savelater)
    box_div2.append(btn_div)
    box_div.append(box_div1,box_div2)
    parent.append(box_div);
  });
let rupee=document.getElementById("rupee")
rupee.innerText=sum

}
display(cart_data);

function remove_item(element,index) {
    parent.innerHTML=""
    element.splice(index,1)
    localStorage.setItem("cart_data",JSON.stringify(element))
    display(cart_data)
    window.location.href="cart.html"
}





