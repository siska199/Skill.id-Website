/* eslint-disable eqeqeq */
import React, {useState, useContext, useRef} from 'react'
import { UserContext } from "../context/UserContext";
import axios from "axios";


import {Col} from 'react-bootstrap'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {AiFillEye} from 'react-icons/ai';
import {AiTwotoneEyeInvisible} from 'react-icons/ai';
import { useHistory } from "react-router-dom";

export default function Login() {
    const {setDataUser} = useContext(UserContext)
    const [fail, setFail] =useState(false)
    const usernameRef = useRef()
    const passRef = useRef()

    let history = useHistory()

    const [see, setSee] =useState(false)
    const handleRemeberme = ()=>{

    }

    const handelOnSubmit = async (e) =>{
        e.preventDefault()
        try {
            
            const formValue = {
                username : usernameRef.current.value,
                password : passRef.current.value
            }

            const res = await axios.post('https://tasklogin.herokuapp.com/api/login', formValue)
            if(res.data.code==200){
                history.push('/')
                setDataUser({
                    isLogin:true,
                    status :'user'
                })
                //Save data user in localstorage:
                console.log(res)
            }else{
                setFail(true)
                setTimeout(()=>{
                    setFail(false)
                },1000)
            }

        } catch (error) {
            
        }
    }

    return (
        <div className="container container-auth">

                <Col xl={4} md={6}  sm={8} xs={9} className="">
                    <form  className="row" autoComplete="off" onSubmit={handelOnSubmit} action="">
                        <div>
                            <h5 className="mb-4 text-center">Silakan masuk ke akun Anda</h5>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label> <br/>
                            <input ref={usernameRef} name="username" type="text" className="form-input" id="username" />
                        </div>
                        <div className="">
                            <label htmlFor="password" className="form-label">Password</label><br/>
                            <div className="pass-container">
                                <input ref={passRef}  name="password" className='password-input' type={see?"text":"password"}  id="password"  />
                                {
                                    see?(
                                        <AiTwotoneEyeInvisible onClick={()=>setSee(false)} color="#61C29F" style={{"cursor":"pointer"}}  size="30px"/>
                                    ):(
                                        <AiFillEye onClick={()=>setSee(true)}  color="#61C29F" style={{"cursor":"pointer"}} size="30px"/>
                                    )
                                }
                            </div>
                            <div style={{"color":"red","cursor":"pointer"}} className="mt-3 mb-1 text-end">Lupa password?</div>
                        </div>
                        <div className="mb-3 form-check ms-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label style={{"cursor":"pointer"}} onClick={()=>handleRemeberme()} className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-success btn-login">Submit</button>
                            {
                                fail && 
                                <p className="text-center mt-2" style={{"color":"red"}}>Email or password is wrong</p>
                            }
                        </div>
                        <div className="mb-3">
                            <div >
                                <span style={{"fontSize":"15px","fontWeight":"500"}}>
                                    Belum punya akun?
                                </span>
                                <span style={{"color":"#f542a7","cursor":"pointer","fontSize":"15px"}} className="ms-3">
                                    Daftar sekarang 
                                    <HiArrowNarrowRight/>
                                </span>
                            </div>
                        </div>
                    </form>
                </Col>
        </div>
    )
}
