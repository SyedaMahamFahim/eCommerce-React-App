import React from 'react'
import './topheader.css'
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
export const Topheader = () => {
    return (
        <>
            <section className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-2"> <p>
                            Welcome to ShopCorner</p>
                        </div>
                        <div className="col-2"> <p>
                            <BiPhoneCall /> +92-1234-45056</p>
                        </div>
                        <div className="col-8">
                            <p >
                                <AiOutlineMail /> contact@shopcorner.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
