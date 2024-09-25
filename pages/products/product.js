const dom = {
    product: document.getElementById('products'),
    search: document.getElementById('search')
}
let users = JSON.parse(localStorage.getItem('users')) || [];
let index = JSON.parse(localStorage.getItem('index'));
let basket = users[index].basket;
let id;
let allProducts = [];
let addToFavorite = document.createElement('button');

const getProduct = (product) => {

    let productDiv = document.createElement('div');
    productDiv.classList.add('products');

    let dataDiv = document.createElement('div');
    productDiv.appendChild(dataDiv);

    let img = document.createElement('img');
    img.src = `../../assets/products/${product.img}`;
    productDiv.appendChild(img);


    let proName = document.createElement('p');
    proName.innerHTML = product.product;
    dataDiv.appendChild(proName);

    let price = document.createElement('p');
    price.innerHTML = product.price;
    dataDiv.appendChild(price);

    let moreDetails = document.createElement('div');
    moreDetails.classList.add('moreDetails')
    dataDiv.append(moreDetails);
    moreDetails.innerHTML = `<button type="button" class="btn btn-primary" id="more" data-bs-toggle="modal" data-bs-target="#exampleModal">
    פרטים נוספים</button>
    `
    moreDetails.onclick = () => {
        id = product.id;
        a(product);
    }

    return productDiv;
}


const drawProducts = (prod) => {
    dom.product.innerHTML = '';
    prod.forEach(p => {
        dom.product.appendChild(getProduct(p));
    });
}

let ProductSearch = document.getElementById('ProductSearch');
ProductSearch.hidden = true;
search.onclick = () => {
    ProductSearch.hidden = !ProductSearch.hidden;
    s = document.getElementById('s');
    s.onclick = () => {
        let serch = document.getElementById('searchInput').value;

        let filtered = allProducts.filter(p => {
            p.product.includes(serch)
            let valid = true;
            for (let s = 0; s < serch.length; s++) {
                valid = valid && p.product.includes(serch[s]);

            }
            return valid;
        });
        drawProducts(filtered);
    }
}

const a = (product) =>{
     const allDetils= document.getElementById('allDetils');
     allDetils.innerHTML = "";
for (let p = 0; p < allProducts.length; p++) {
    
    if (allProducts[p].id === id) {

        let proName = document.createElement('h3');
        proName.innerHTML = product.product;

        let img = document.createElement('img');
    img.src = `../../assets/products/${product.img}`;
    

        let seller = document.createElement('p');
        seller.innerHTML ="שם מוכר:  "+ product.sellerName;

        let address = document.createElement('p');
        address.innerHTML ="עיר:  "+ product.sellerAddress;

        let email = document.createElement('p');
        email.innerHTML ="כתובת אימייל של המוכר:  "+ product.email;

        let status = document.createElement('p');
        status.innerHTML ="מצב מוצר:  " +product.status;

        let desc = document.createElement('p');
        desc.innerHTML ="תאור מוצר:  "+ product.descraption;

        addToFavorite.type = "button";
        addToFavorite.id = ('addF')
        addToFavorite.innerHTML = "הוספה למועדפים"
        allDetils.appendChild(proName);
        allDetils.appendChild(img);
        allDetils.appendChild(seller);
        allDetils.appendChild(address);
        allDetils.appendChild(email);
        allDetils.appendChild(status);
        allDetils.appendChild(desc);
        allDetils.appendChild(addToFavorite);

        addToFavorite.onclick = () =>{
            if(basket.length===0){
                alert('הפריט נוסף בהצלחה למועדפים')
                basket.push(product.id);
                    localStorage.setItem('users', JSON.stringify(users));
            }
            else{
                let isExist = false;
                for (let i = 0; i < basket.length; i++) {
                    if(basket[i]===product.id){
                        alert("המוצר כבר קיים במועדפים שלך")
                        isExist = true
                        break;
                    }
                    
                } 
                if(!isExist){
                    basket.push(product.id);
                    localStorage.setItem('users', JSON.stringify(users));
                    alert('הפריט נוסף בהצלחה למועדפים')
                }
            }
            
            
         
           
            }
               
    }
}

}

// addToFavorite = document.getElementById('addF')

// }


const loadAllProduct = (productArr) => {
    allProducts = productArr;
    drawProducts(allProducts);
}



server("../../data/pro.json", loadAllProduct);