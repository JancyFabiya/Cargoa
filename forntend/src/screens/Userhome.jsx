import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import {useState,useEffect} from 'react'
import axios from 'axios';
import Header from '../components/Header/Header';
import { useDispatch, useSelector } from "react-redux";
import { viewPurchaseOrderAction } from '../redux/slices/userSlices';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const dispatch = useDispatch();
  const { loading, appErr, serverErr, getOrder } = useSelector(
    (store) => store?.user
  );
  console.log('homepage',getOrder);
  // const info = localStorage.getItem("userInfo");
// console.log(info,'aaaa');
  const [application, setApplication] = useState([]);
  
  

  // const fetchApplication=async(info)=>{
  //   const applicdata=await axios.get(`/api/users/getApplication/${info}`)
  //   setApplication(applicdata.data)
  //   console.log(applicdata);
  // }
  useEffect(() => {
    // fetchApplication (info)
    dispatch(viewPurchaseOrderAction(""))
  }, [dispatch,getOrder]);
  return (
    <>
        <Header/>

    <section className="heading">
   
   
   <Link to={'/user/orders'}><Button  variant="dark" style={{marginLeft:10,marginBottom:6}} size="sm">New Purchase</Button></Link>

 
  </section>
  <div style={{ marginTop: "2%" }}>
<Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">DateOfShipping</TableCell>
            <TableCell align="right">ShippingSchedules</TableCell>
            <TableCell align="right">PDF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getOrder? (getOrder.map((order) => (
            <TableRow
              key={order.productName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               
              {order.productName}
              </TableCell>
              <TableCell align="right"> {order.quantity}</TableCell>
              <TableCell align="right">{order.dateOfShipping}</TableCell>
              {/* <TableCell align="right">
                {(application.status !=='reject') ?(<p style={{color:'green'}}>{application.status}</p>):(<p style={{color:'red'}}>{application.status}</p>)}</TableCell>
              <TableCell align="right">
              {application.bookingStatus ? (<p style={{color:"green"}}>Allocated</p>) : (<p style={{color:"red"}}>Not Allocated</p>)}
</TableCell> */}
<TableCell align="right">View Schedule </TableCell>
<TableCell align="right"> pdf</TableCell>


            </TableRow>
          )))
          :( <div>
          <h3 style={{color:"red"}}>Currently no new purchase order</h3>
        </div>)}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </div>
    </>
  );
}
