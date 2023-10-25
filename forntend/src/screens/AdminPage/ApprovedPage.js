import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePurchaseOrderAction } from '../../redux/slices/vendorSlices';
import { Grid, TextField, Button } from '@mui/material';




function Example(order) {


  const dispatch = useDispatch();



  const [schedule1, setSchedule1] = useState("");
  const [schedule2, setSchedule2] = useState("");
  const [schedule3, setschedule3] = useState("");

  const processingAppli = async (id) => {
    const values = { schedule1, schedule2, schedule3 }
    const data = { id, values }
    dispatch(updatePurchaseOrderAction(data))
    console.log('dispatch');

  }




  return (
    <>
      {order.order.status == "true" ? (
        <Accordion defaultActiveKey="1">

          <Card style={{ margin: 10, width: "100%", backgroundColor: '#f7f7f7' }}>
            <Card.Header>
              <Accordion.Header eventKey="0">{order.order.productName
              }</Accordion.Header>
            </Card.Header>
            <Accordion.Body eventKey="0">
              <>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12}>

                    <TextField
                      id="outlined-read-only-input"
                      label="Quantity"
                      defaultValue={order.order.quantity}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>

                    <TextField
                      id="outlined-read-only-input"
                      label="Date of shipping"
                      defaultValue={order.order.dateOfShipping}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>


                  <Grid item sm={6} xs={12}>

                    <TextField
                      id="outlined-read-only-input"
                      label="Schedule 1"
                      defaultValue={order.order.shippingSchedules.schedule1}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>



                  <Grid item sm={6} xs={12}>

                    <TextField
                      id="outlined-read-only-input"
                      label="Schedule 2"
                      defaultValue={order.order.shippingSchedules.schedule2}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>

                    <TextField
                      id="outlined-read-only-input"
                      label="Schedule 3"
                      defaultValue={order.order.shippingSchedules.schedule3}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>


                </Grid>
              </>

            </Accordion.Body>
          </Card>
        </Accordion>
      ) : (

        <Accordion defaultActiveKey="1">

          <Card style={{ margin: 10, width: "100%", backgroundColor: '#f7f7f7' }}>
            <Card.Header>
              <Accordion.Header eventKey="0">{order.order.productName
              }</Accordion.Header>
            </Card.Header>
            <Accordion.Body eventKey="0">
              <>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12}>

                    <TextField
                      className='text'
                        margin="normal"
                        required
                        fullWidth
                      id="outlined-read-only-input"
                      label="Quantity"
                      defaultValue={order.order.quantity}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>

                    <TextField
                      className='text'
                        margin="normal"
                        required
                        fullWidth
                      id="outlined-read-only-input"
                      label="Date of shipping"
                      defaultValue={order.order.dateOfShipping}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>


                  <Grid item sm={6} xs={12}>

                    <TextField
                      className='text'
                        margin="normal"
                        required
                        fullWidth
                      id="outlined-number"
                      label="Schedule 1"
                      type="date"
                      onChange={(e) => setSchedule1(e.target.value)}

                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>



                  <Grid item sm={6} xs={12}>

                    <TextField
                      className='text'
                        margin="normal"
                        required
                        fullWidth
                      id="outlined-number"
                      label="Schedule 2"
                      type="date"
                      onChange={(e) => setSchedule2(e.target.value)}

                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>

                    <TextField
                      className='text'
                        margin="normal"
                        required
                        fullWidth
                      id="outlined-number"
                      label="Schedule 3"
                      type="date"
                      onChange={(e) => setschedule3(e.target.value)}

                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button onClick={() => processingAppli(order.order._id)}>Save</Button>

                  </Grid>
                </Grid>
              </>

            </Accordion.Body>
          </Card>
        </Accordion>
      )}
    </>
  );
}


export default Example;




