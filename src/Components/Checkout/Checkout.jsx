import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import MultiStep from 'react-multistep'
import BillingInfo from './BillingInfo/BillingInfo'
import PersonalInformation from './Shipping/PersonalInformation'
import './checkout.css'
import ConfirmOrder from './ConfirmOrder/ConfirmOrder'
const Checkout = () => {
    const prevStyle = {
        background: 'crimson',
        margin: '30px',
        border: 'none',
        color: 'white',
        fontWeight: '800',
}
const nextStyle = {
    background: 'crimson',
    margin: '30px',
    border: 'none',
    color: 'white',
    fontWeight: '800',
}

const steps = [
    { component: <PersonalInformation /> },
    { component: <ConfirmOrder/> },
    { component: <BillingInfo /> },
]
return (
    <>
        <Breadcrumbs pageName={'Checkout'} />
        <div className="container">
            <div className="row">
                <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
            </div>
        </div>

    </>
)
}

export default Checkout
