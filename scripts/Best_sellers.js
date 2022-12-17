let data = [
    {
        image:"https://static.zara.net/photos///2022/I/0/2/p/6318/406/642/2/w/445/6318406642_2_1_1.jpg?ts=1662562291322",
        details:"BOMBER JACKET WITH CONTRAST PATCHES",
        price:"₹ 7,990.00",
    },
    {
        image:"https://static.zara.net/photos///2023/V/0/2/p/3548/548/702/2/w/445/3548548702_2_1_1.jpg?ts=1668764459613",
        details:"FAUX SUEDE JACKET",
        price:"₹ 5,990.00",
    },
    {
        image:"https://static.zara.net/photos///2022/I/0/2/p/8281/413/800/2/w/445/8281413800_2_1_1.jpg?ts=1662390284451",
        details:"FAUX LEATHER JACKET",
        price:"₹ 4,990.00",
    },
    {
        image:"https://static.zara.net/photos///2022/I/0/2/p/2795/309/400/2/w/445/2795309400_2_1_1.jpg?ts=1660893033959",
        details:"BOMBER JACKET WITH PATCHES",
        price:"₹ 5,990.00",
    },
    {
        image:"https://static.zara.net/photos///2022/I/0/1/p/3918/360/800/2/w/445/3918360800_2_1_1.jpg?ts=1661241872621",
        details:"FAUX LEATHER BOMBER JACKET",
        price:"₹ 4,990.00",
    },
    {
        image:"https://static.zara.net/photos///2023/V/0/1/p/6318/352/401/2/w/445/6318352401_2_1_1.jpg?ts=1669650881527",
        details:"CONTRAST BOMBER JACKET",
        price:"₹ 8,590.00",
    },
    {
        image:"https://static.zara.net/photos///2023/V/0/2/p/2398/401/501/2/w/445/2398401501_2_1_1.jpg?ts=1669192264761",
        details:"FAUX SHEARLING BOMBER JACKET WITH PATCHES",
        price:"₹ 7,590.00",
    },
    {
        image:"https://static.zara.net/photos///2023/V/0/1/p/4302/408/800/2/w/445/4302408800_2_1_1.jpg?ts=1669650630859",
        details:"BASIC BOMBER JACKET",
        price:"₹ 2,990.00",
    },
    {
        image:"https://static.zara.net/photos///2022/I/0/2/p/5070/770/704/2/w/445/5070770704_2_1_1.jpg?ts=1659627125827",
        details:"COMFORT COAT",
        price:"₹ 7,990.00",
    },
    {
        image:"https://static.zara.net/photos///2022/I/0/2/p/8574/561/401/2/w/445/8574561401_2_1_1.jpg?ts=1668071585872",
        details:"PUFFER TECHNICAL JACKET",
        price:"₹ 2,990.00",
    },
    {
        image:"https://static.zara.net/photos///2021/I/0/1/p/0693/302/251/512/w/445/0693302251_2_1_1.jpg?ts=1637839261263",
        details:"BASIC HIGH NECK SWEATER",
        price:"₹ 2,990.00",
    },
    {
        image:"https://static.zara.net/photos///2022/I/0/2/p/0706/325/800/2/w/445/0706325800_2_1_1.jpg?ts=1666103087538",
        details:"DOUBLE-FACED JACKET",
        price:"₹ 8,990.00",
    },

];
let Product_section = document.querySelector("#all_products");
render_products(data)
function render_products(data){
    data.forEach((elem)=>{
        let img_div = document.createElement("div");
        img_div.setAttribute("class","img_div");
        let img = document.createElement("img");
        img.src=elem.image;
        let add_btn = document.createElement("button");
        add_btn.innerText="+"
        add_btn.setAttribute("class","add_btn");
        let details_div = document.createElement("div");
        details_div.setAttribute("class","details_div");
        let detail = document.createElement("P");
        detail.innerText = elem.details;
        let price = document.createElement("p");
        price.innerText=elem.price


        details_div.append(detail,price);
        img_div.append(img,add_btn,details_div);
        Product_section.append(img_div);
    });
};
let lowToHigh =document.querySelector(".low_to_high");
lowToHigh.addEventListener("click",function(){
    let ans = data.sort((a,b)=> {
        return a.price - b.price;
    });
    console.log(ans);
});