import React from 'react'
import './footer.css'

import FooterLinksData from './FooterLinksData'
const Footer = () => {
    return (
        <>
            
                <footer>
                    <div className="subsription-div ">
                        <div className="subsription-text">
                            <h2 className="child-heading">
                                KNOW IT ALL FIRST!
                            </h2>
                            <p>
                                Never Miss Anything From Multikart By Signing Up To Our Newsletter.
                            </p>
                        </div>
                        <div className="subsription">
                        <form className="d-flex">
        <input className="form-control me-2" type="email" placeholder="Email" aria-label="Search" required/>
        <button className="btn btn-outline-danger" type="submit">Submit</button>
      </form>
                        </div>
                    </div>
                    <br />
                    <div className="footer-content">
                        <div className="footer-about">
                            <img src="https://multikart-react.vercel.app/assets/images/icon/logo.png" alt="" className="logo" /> 
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            
                        </div>
                        <div className="footer-col">
                        <h2 className="child-heading">MY ACCOUNT</h2>
                            
                        {FooterLinksData.filter(category => category.category === "About").map(filteredCategory => (
                            <li key={filteredCategory.id}>
                                <a href={filteredCategory.url}> 
                                
                                {filteredCategory.title}</a>
                            
                            </li>
                        ))}


                            </div>
                            <div className="footer-col">
                        <h2 className="child-heading">USEFUL LINKS</h2>
                            
                        {FooterLinksData.filter(category => category.category === "Useful_Links").map(filteredCategory => (
                           <li key={filteredCategory.id}>
                           <a href={filteredCategory.url}> 
                           
                           {filteredCategory.title}</a>
                       
                       </li>
                        ))}


                            </div>
                        <div className="footer-col">
                        <h2 className="child-heading">STORE INFORMATION</h2>
                        {FooterLinksData.filter(category => category.category === "Contact").map(filteredCategory => (
                           <li key={filteredCategory.id}>
                           <p>  <span><filteredCategory.iconName className="footer-links-icons"/> &nbsp;</span>
                             
                           
                           {filteredCategory.title}</p>
                       
                       </li>
                        ))}
                        </div>

                    </div>
                   

                </footer>
                <div className="copyright-footer">
                        <p className="copyright">&copy; 2020-21 ShopCorner</p>
                    </div>
           
        </>
    )
}
export default Footer