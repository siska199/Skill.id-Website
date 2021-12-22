import {Col} from 'react-bootstrap'
export default function Login() {
    const handelOnSubmit = async () =>{
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <div className="container container-auth">

                <Col xl={4} md={6}  sm={8} xs={9} className="">
                    <form className="row" autoComplete="off" onSubmit={handelOnSubmit} action="">
                        <div>
                            <h5 className="mb-4 text-center">Silakan masuk ke akun Anda</h5>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label> <br/>
                            <input type="email" className="form-input" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="">
                            <label htmlFor="email" className="form-label">Password</label><br/>
                            <input type="password" className="form-input" id="email" />
                            <div style={{"color":"red"}} className="mt-3 mb-1 text-end">Lupa password?</div>
                        </div>
                        <div className="mb-3 form-check ms-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success btn-login">Submit</button>
                        </div>
                    </form>
                </Col>
        </div>
    )
}
