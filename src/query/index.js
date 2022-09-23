
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import {finishMenu} from '../actions/actions'

function callApi(){
    return fetch('http://localhost/ShopNature/wp-json/wp/v2/menu').then(res=>res.json());
}
export default callApi;

// const CallApi = () =>{
//     const [menus, setMenus] = useState([]);
//     const dispatch = useDispatch();
//     useEffect(() => {
//         fetch('http://localhost/ShopNature/wp-json/wp/v2/menu')
//         .then(res=>dispatch(finishMenu(res.data)))

//         .then(data => console.log(data))
//         .then(data=>setMenus(data))

//          .then(dispatch(finishMenu(data)))
//     },[]);

//     console.log(menus)
//     return [menus];
   
// }
// export default CallApi;