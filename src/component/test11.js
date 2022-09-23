function Test11(){
    const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
    // import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

    const WooCommerce = new WooCommerceRestApi({
    url: 'https://72.arrowhitech.net/tn3/thanh_reactjs/ShopNature', // Your store URL
    consumerKey: 'ck_d77b2f06713eab0b76873176a0b14ffe8a041bc5', // Your consumer key
    consumerSecret: 'cs_22508887be945bb2ca554c4ea49cd0c4c7d5eba3', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
    });
    
    const data = {
        payment_method: "bacs",
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        billing: {
          first_name: "Nguyen",
          last_name: "Thanh",
          address_1: "Viet Nam",
          email: "john.doe@example.com",
          phone: "22541154"
        },
        shipping: {
            first_name: "Nguyen",
            last_name: "Thanh",
            address_1: "Viet Nam",
            email: "john.doe@example.com",
            phone: "22541154"
        },
        line_items: [
          {
            product_id: 155,
            quantity: 2
          },
          {
            product_id: 151,
            quantity: 1
          }
        ]
      };
      
      WooCommerce.post("orders", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });

        WooCommerce.get("products")
        .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    return(
        <p></p>
    )
}
export default Test11;