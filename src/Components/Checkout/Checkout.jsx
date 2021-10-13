import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import MultiStep from 'react-multistep'
import BillingInfo from './BillingInfo'
import FinalCart from './FinalCart'
import PersonalInformation from './PersonalInformation'
import './checkout.css'
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
    { component: <FinalCart /> },
    { component: <PersonalInformation /> },
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
