import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import Cards from '../Compoentents/Cards';
import { Box, Grid } from '@mui/material';
import ButtonAppBar from '../Compoentents/Navbar';




const Dashboard = () => { 
const [ products, setProducts ] = useState([]);  
  

const getproducts = async() => {

try {
    const userproduct = await axios.get("https://fakestoreapi.com/products")
    console.log("product", userproduct.data);
    setProducts(userproduct.data)
} catch (error) {
  console.log(error)
}


}  


useEffect(() => {
  getproducts();
},[])

  return (
    <>
        
    <ButtonAppBar />

    <Box mt={"20px"}>
     <Grid container spacing={2}> 
     {products.map((item,i) => 
      <Grid item xs={2}>
    <Cards key={i}
    id={item.id}
    title={item.title}
    img={item.image}
    price={item.price}
    desc={item.description}
    category={item.category}
    />
    </Grid>   
  )}
     </Grid>
  </Box>    

    </>
  )
}




export default Dashboard;