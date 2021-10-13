import React from 'react'
import './signup.css'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

const Signup = () => {
    return (
        <>
            <Breadcrumbs pageName={'Signup'} />
            <section className="login mt-5">
                <div className="container">
                    <div className="row">
                    <form action="">
                        <div class="mb-3 pe-3 ps-3" style={{display:"inline-block",width:"50%"}}>
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3 pe-3 ps-3" style={{display:"inline-block",width:"50%"}}>
                            <label for="exampleFormControlInput1" class="form-label">Username</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3 pe-3 ps-3" style={{display:"inline-block",width:"50%"}}>
                            <label for="exampleFormControlInput1" class="form-label">Pasword</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                        </div>
                        <div class="mb-3 pe-3 ps-3" style={{display:"inline-block",width:"50%"}}>
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                        </div>
                        <div class="mb-3 pe-3 ps-3" style={{display:"inline-block",width:"50%"}}>
                            <label for="exampleFormControlInput1" class="form-label">County</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Country" />
                        </div>
                        <div class="mb-3 pe-3 ps-3" style={{display:"inline-block",width:"50%"}}>
                            <label for="exampleFormControlInput1" class="form-label">City</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City" />
                        </div>
                        <div class="mb-3 pe-3 ps-3" >
                        <button type="submit" class="btn btn-primary">Signup</button>
                        </div>
                        
                       

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
