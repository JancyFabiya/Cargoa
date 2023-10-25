import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PurchaseOrder from '../AdminPage/ApprovedPage'
import { useDispatch, useSelector } from "react-redux";
import { viewStatusPurchaseOrderAction } from '../../redux/slices/vendorSlices';





function Processing() {
  const dispatch = useDispatch();
  const { loading, appErr, serverErr, vendorgetOrderStatus } = useSelector(
    (store) => store?.vendor
  );
  useEffect(() => {
    dispatch(viewStatusPurchaseOrderAction(""))
  }, [dispatch, vendorgetOrderStatus]);


  const [newapplication, setNewapplication] = useState([])














  return (
    <>
      {vendorgetOrderStatus ? (
        <div style={{ marginTop: '3%' }}>
          {
            vendorgetOrderStatus.map((order) => (

              <PurchaseOrder order={order} />
            ))}
        </div>
      )
        : (
          <div>
            <h3 style={{ color: "red" }}>Currently no new purchase order</h3>
          </div>)}

    </>
  )
}

export default Processing


