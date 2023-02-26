"use strict";

{/* <tr>

<img src="" alt="">
<td>Otto</td>
<td>@mdo</td>
<td>@mdo</td>
</tr> */}


let tableBody = document.querySelector("tbody")

let products = JSON.parse(localStorage.getItem("basket"))

let totalH3 = document.querySelector("h3")





if (products != null) {

    let totalprice = 0;

    for (const product of products) {
        tableBody.innerHTML += `
        <tr>
        <td data-id ="${product.id}">
        <img src="${product.img}" alt="">
        </td>
        <td>${product.name}</td>
        <td>${product.descripation}</td>
        <td>${product.count}</td>
        <td>$${product.price * product.count}</td>
        <td>
        <i class="fa-solid  fa-trash delete-btn" style="color: red; cursor: pointer;"></i>
        </td>
    
        </tr>`

        totalprice += product.count * product.price;

        totalH3.innerText = "Total $" +" "+ totalprice;


    }

    getBasketCount(products);



    


}else {

    


    document.querySelector("table").classList.add("d-none")
    document.querySelector(".alert-warning").classList.remove("d-none")

}


function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count
    }
    document.querySelector("sup").innerText = sum;
}




if (products != null){
    
} 
let deleteBtns = document.querySelectorAll(".delete-btn");

deleteBtns.forEach((btn) => {
    
    btn.addEventListener("click", function () {


        deleteProducts(this);


    });
});



function deleteProducts(btn) {

    
    let id = parseInt(
        btn.parentNode.parentNode.firstElementChild.getAttribute("data-id")

    );

    products = products.filter((m) => m.id != id);
    localStorage.setItem("basket", JSON.stringify(products));
    btn.parentNode.parentNode.remove();
    document.location.reload();

}













