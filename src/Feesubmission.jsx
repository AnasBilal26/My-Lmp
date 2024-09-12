/** @format */
import React from 'react';

const Feesubmission = () => {
  return (
    <div className="Forstructure">
      <div className="Feesubmission">
        <p className="payment-for">Payment for</p>
        <input
          className="paymentfor-name"
          type="text"
          name=""
          id=""
          placeholder="Name *"
        />
        <input
          className="paymentfor-class"
          type="text"
          name=""
          id=""
          placeholder="Class"
        />
        <input
          className="paymentfor-amount"
          type="text"
          name=""
          id=""
          placeholder="Amount"
        />
        <input
          className="payment-method"
          type="text"
          name=""
          id=""
          placeholder="Payment-method *"
        />
        <button className="Sumbit-payment"> Sumbit Payment</button>
      </div>
      ;
    </div>
  );
};
export default Feesubmission;
