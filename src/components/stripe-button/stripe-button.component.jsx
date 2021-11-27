import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51K062LL8fOCmvMDFHXBMlQ8SArXlUuMm8dmuAV4J2COeSBTuiTCNFqqr13H26kVHdl56gUjvb75Y9HzsLhHcgDhb00iKFeV04e'
  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}


export default StripeCheckoutButton;