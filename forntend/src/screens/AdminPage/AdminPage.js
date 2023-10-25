import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { viewPurchaseOrderAction } from '../../redux/slices/vendorSlices';
import PurchaseOrder from '../AdminPage/ApprovedPage'



function Notes() {
  const dispatch = useDispatch();

  const { loading, appErr, serverErr, vendorgetOrder } = useSelector(
    (store) => store?.vendor
  );



  useEffect(() => {
    dispatch(viewPurchaseOrderAction(""))
  }, [dispatch, vendorgetOrder]);










  return (
    <>
      {vendorgetOrder ? (
        <div style={{ marginTop: '3%' }}>
          {
            vendorgetOrder.map((order) => (

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

export default Notes



