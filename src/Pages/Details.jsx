import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch,useSelector } from 'react-redux';
import { AddItem, selectcartItems } from '../Redux/AddCardSlice';
import { BASE_URL } from '../Constant/index';


const Details = () => {

const { id } = useParams();
const navigate = useNavigate();
const dispatch = useDispatch();
const productItem = useSelector(selectcartItems);
console.log("productItem", productItem)


const [ products, setProducts ] = useState([]);
const { image,title,description,price } = products;


const AddItems = () => {
dispatch(AddItem({...products})),
console.log("data", products )

}


const getproductsId = async() => {

try {
    const getId = await axios.get(`${BASE_URL}/products/:id`, id)
    console.log("getid",getId.data);
    setProducts(getId.data)
} catch (error) {
    console.log(error)
 }
}


useEffect(() => {
getproductsId();
},[])


  return (
    <>

    
   <div className='d-flex flex-row justify-content-between bg-primary align-items-center'>
    <h2 class="text-white">Product Details</h2>

    <div className='d-flex flex-row gap-3 align-items-center'>
     <div className='d-flex flex-column text-white'>
     <PermIdentityIcon fontSize='large' />
     <p class="text-white">Login</p>
    </div>
    
    <div className='d-flex flex-column align-items-center text-white'>
     <ShoppingCartOutlinedIcon fontSize='large' onClick={() => navigate('/cart')}/>   
     <p class="text-white">{productItem.length}</p>
      </div>    
     </div>  
    </div>  

   <div class="max-w-xs rounded overflow-hidden shadow-lg mt-2 border-r-4">
    <img class="w-3/4 h-20 ml-10 mt-2" src={image}/>
     <div class="px-6 py-4 ml-6">
      <div class="font-bold text-lg mb-2">{title}</div>
      <p class="text-gray-700 text-sm">
        {description}
      </p>
      <p class="text-gray-700 text-sm">
      ${price}
    </p>
    </div>
    <div class="px-16 pb-2">
      <button class="inline-block bg-blue-200 rounded-full px-5 py-1 
       text-sm font-semibold text-gray-700 mr-2 mb-2"
       onClick={() => AddItems()}>Add to Card</button>
    </div>
  </div>


    </>
  )
}




export default Details;