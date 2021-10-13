import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

const Login = () => {
    return (
        <>
            <Breadcrumbs pageName={'Login'} />
            <section className="login mt-5">
                <div className="container">
                    <div className="row">
                        <form action="">
                        <div class="mb-3" >
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                       
                        <div class="mb-3" >
                            <label for="exampleFormControlInput1" class="form-label">Pasword</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
