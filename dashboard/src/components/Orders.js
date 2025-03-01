import React,{useState , useEffect} from "react";
import axios from 'axios'


import { Link } from "react-router-dom";

const Orders = () => {
  
  // const[allOrders,setAllOrders]=useState([]);
  // useEffect(()=>{
  //   axios.get("http://localhost:3002/allOrders").then((res)=>{
  //     setAllOrders(res.data);
  //   })
  // })


  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
