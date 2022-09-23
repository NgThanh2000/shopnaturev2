function Test11(){
    const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
    // import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

    const WooCommerce = new WooCommerceRestApi({
    url: 'https://72.arrowhitech.net/tn3/thanh_reactjs/ShopNature', // Your store URL
    consumerKey: 'ck_d77b2f06713eab0b76873176a0b14ffe8a041bc5', // Your consumer key
    consumerSecret: 'cs_22508887be945bb2ca554c4ea49cd0c4c7d5eba3', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
    });
    WooCommerce.get("products")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.response.data);
    });
    return(
        <p>terrtr</p>
    )
}
export default Test11;