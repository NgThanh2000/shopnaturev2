import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

const ck = 'ck_d77b2f06713eab0b76873176a0b14ffe8a041bc5'
const cs = 'cs_22508887be945bb2ca554c4ea49cd0c4c7d5eba3'
const baseURL = "http://localhost/ShopNature/wp-json";

const Woocommerce = {
  getProducts: () => {
    return makeRequest("/wc/v3/products");
  },
  getCategories: () => {
    return makeRequest("/wc/v3/products/categories");
  },
  getTags: () => {
    return makeRequest("/wc/v3/products/tags");
  },
  getProductByID: id => {
    return makeRequest("/wc/v3/products/" + id);
  }
};

function makeRequest(endpoint, method = "GET") {
  const oauth = getOauth();

  const requestData = {
    url: baseURL + endpoint,
    method,
    data: {
      per_page: 100
    }
  };

  const requestHTTP =requestData.url + "?" + jQuery.param(oauth.authorize(requestData));
  
  return axios.get(requestHTTP);
}

function getOauth() {
  return Oauth({
    consumer: {
      key: ck,
      secret: cs
    },
    signature_method: "HMAC-SHA1",
    hash_function: function(base_string, key) {
      return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
    }
  });
}

export default Woocommerce;