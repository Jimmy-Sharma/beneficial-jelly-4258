let cart_data = JSON.parse(localStorage.getItem("cart_data"));
console.log(cart_data);
let parent = document.getElementById("parent");
function display(data) {
  data.forEach((el) => {
    console.log(el);
    let box_div = document.createElement("div");

    // box_div.innerHTML = `
    // <div id="cart_section_PS">
    //     <div id="cart_sub_section_PS">
    //     </div>
    //     <div>
    //     </div>
    //     <div id="Makeit">
    //         <div>
    //             <div class="product_name_PS">
    //             <h2>${element.name}</h2></div>
    //             <div class="item_main_div_PS">
    //                 <div class="item_sub_div_PS">
                        
    //                         <img src=${element.item[0].img4} alt="Product image">
                        
    //                 </div>
    //                 <div class="des_main_div_PS">
    //                     <div class="des_sub_div_PS">
    //                         <div>
    //                             <p>
    //                                 REF. I 3427/402
    //                             </p>
    //                         </div>
    //                         <div>
    //                             <p>${element.item[0].color}</p>
    //                         </div>
    //                         <div>
    //                             <p>L (UK L)</p>
    //                         </div>
    //                         <div>
    //                             <select name="" id="">
    //                                 <option value="1">1</option>
    //                                 <option value="2">2</option>
    //                                 <option value="3">3</option>
    //                                 <option value="4">4</option>
    //                                 <option value="5">5</option>
    //                             </select>
    //                         </div>
    //                     </div>
    //                     <div>
    //                         <h3>&#8377 ${element.price}</h3>
    //                     </div>
    //                     <div>
    //                             <button class="btn-cart" onclick="remove()">Delete</button>
                           
    //                             <button class="btn-cart">Save For Later</button>
                            
    //                             </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // `;
    parent.append(box_div);
  });
}
display(cart_data);

function remove() {
  console.log("osa");
}