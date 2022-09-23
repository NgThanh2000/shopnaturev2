function sliderCall(){
    return fetch('http://localhost/ShopNature/wp-json/wp/v2/sliderfooter/').then(res=>res.json());
}
export default sliderCall;