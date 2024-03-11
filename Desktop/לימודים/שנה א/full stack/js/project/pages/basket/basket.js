
const favorite = document.getElementById('favorite')

let users = JSON.parse(localStorage.getItem('users')) || [];
let index = JSON.parse(localStorage.getItem('index'));
let basket = users[index].basket
let removeFromFavorites = document.createElement('button')
removeFromFavorites.innerHTML = "הסרה ממועדפים"
removeFromFavorites.type = ('button')
removeFromFavorites.id='rff'

let allFavorite = []
const drawFavorite = (favorit) =>{

    let favoriteDiv = document.createElement('div')
    favoriteDiv.classList.add('fav')


    let dataDiv = document.createElement('div')
    favoriteDiv.append(dataDiv)
    
    let img = document.createElement('img');
    img.src = `../../assets/products/${favorit.img}`;
    favoriteDiv.appendChild(img);


    let proName = document.createElement('h3');
    proName.innerHTML = favorit.product;
    dataDiv.appendChild(proName);

    // let price = document.createElement('p');
    // price.innerHTML = favorit.price;
    // dataDiv.appendChild(price);
    let seller = document.createElement('p');
    seller.innerHTML ="שם מוכר:  "+ favorit.sellerName;
    dataDiv.appendChild(seller);


    let address = document.createElement('p');
    address.innerHTML ="עיר:  "+ favorit.sellerAddress;
    dataDiv.appendChild(address);

    let email = document.createElement('p');
    email.innerHTML ="כתובת אימייל של המוכר:  "+ favorit.email;
    dataDiv.appendChild(email);


    let removeFromFavorites = document.createElement('button')
    removeFromFavorites.innerHTML = "הסרה ממועדפים"
    removeFromFavorites.type = ('button')
    removeFromFavorites.id='rff'
    dataDiv.append(removeFromFavorites)

    

    return favoriteDiv

}
const drawProducts = (prod) => {
    favorite.innerHTML = '';
    prod.forEach(p => {
        for (let i = 0; i < basket.length; i++) {
            if(basket[i]===p.id){
                favorite.append(drawFavorite(p));
            }
        }
        
    });
}
const loadAllProduct = (favoriteArr) => {
    allFavorite = favoriteArr;
    drawProducts(allFavorite);
}




server("../../data/pro.json", loadAllProduct);