import React, { useEffect } from 'react';
import {useState} from 'react';
import { Grid, TextField, FormControlLabel, FormLabel, Radio, RadioGroup, Button, Checkbox } from '@mui/material'
import './UserApplication.css';
import { Form } from 'react-bootstrap';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import { useNavigate } from "react-router-dom";
import MainScreen from '../components/MainScreen';
import Header from '../components/Header/Header';
import { green, pink } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { newPurchaseOrderAction,getAllVendorAction } from '../redux/slices/userSlices';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const UserApplication = () => {

  const dispatch = useDispatch();
  const { loading, appErr, serverErr, newOrder,getVendor } = useSelector(
    (store) => store?.user
  );
  console.log('getVendor',getVendor);
    const [quantity,setQuantity] = useState("");
    const [productName,setProductName] = useState("");
    const [dateOfShipping, setDateOfShipping] = useState("");
    
    const [pdf, setPdf] = useState("");
    
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);


    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();
 

  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const values = {productName,quantity,dateOfShipping,pdf}
    console.log(values,'valuesss');
    dispatch(newPurchaseOrderAction(values))
    
  }
  useEffect(()=>{
    if(newOrder?.success == true){
        navigate("/user/logged")

    }
    dispatch(getAllVendorAction(""))
  },[newOrder,dispatch])


  return (
    <>
            <Header/>

    <MainScreen title=' Create your slot'>
    <div className='Box'>
  {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
    {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
      {loading && <Loading />}
      <Form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
                <Grid item sm={12} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Product Name"
                        name='productName'
                        type="text"
                        value={productName}
                        onChange={(e)=>setProductName(e.target.value)}
                    />
                </Grid>
                <Grid item sm={12} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Quantity"
                        name='Quantity'
                        type="number"
                        value={quantity}
                        onChange={(e)=>setQuantity(e.target.value)}       
                                     />
                </Grid>


                <Grid item sm={12} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Date of shipping"
                        name='dateOfShipping'
                        type="date"
                        value={dateOfShipping}
                        onChange={(e)=>setDateOfShipping(e.target.value)}              
                        InputLabelProps={{
                        shrink: true,
                      }}
                              />
                </Grid>
                
               

                <Grid item sm={12} xs={12}>
                    <TextField 
                    className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="PDF File"
                        type="file"
          accept=".pdf"  // Allow only PDF files
        //   onChange={handleFileChange}
                        name='pdf'
                        value={pdf}
                        onChange={(e)=>setPdf(e.target.value)}
                        
                        InputLabelProps={{
                        shrink: true,
                      }}
                        />                    
                </Grid>
                <Grid item sm={12} xs={12}>

                <TextField
                className='text'
                        margin="normal"
                        required
                        fullWidth
          id="outlined-select-currency-native"
          select
          label="Select Vendor"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {getVendor?(getVendor.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          )))
          :(<option>Nothing</option>)}
        </TextField>
        </Grid>
                <Grid item xs={12}>
                    <Button className='button' variant="contained" color="success" type='submit' >
                        Submit
                    </Button>
                </Grid>
            </Grid>
            </Form>
     </div>
     </MainScreen>
     </>
  );
}

export default UserApplication;
