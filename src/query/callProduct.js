function callProduct(){
    return fetch('http://localhost/ShopNature/wp-json/wp/v2/product/').then(res=>res.json());
}
export default callProduct;