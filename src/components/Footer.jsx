import {Col} from 'react-bootstrap'
import icon from '../assets/icon_new.png'

import {BsInstagram} from 'react-icons/bs';
import {BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

export default function Footer() {
    return (
        <div className="bg-dark p-5">
            <div className="container-fluid footer-container">
                <div className="row">
                    <Col xl={12} className="d-flex ">
                        <img src={icon} style={{width:"60px", height:"60px"}} className="img-fluid" alt="" />
                        <div className="footer-title-icon ms-2"> Skills.id</div>
                    </Col>
                </div>

                <div className="row my-4">
                    <Col xl={6} className="d-flex">
                        <div className="footer-text-menu">
                            Home
                        </div>
                        <div className="footer-text-menu">
                            Privacy
                        </div>
                        <div className="footer-text-menu">
                            Term
                        </div>
                        <div className="footer-text-menu">
                            FAQ
                        </div>
                    </Col>

                    <Col xl={6} className="d-flex justify-content-end">
                        <div className="footer-icon-sosmed">
                            <BsInstagram/>
                        </div>
                        <div className="footer-icon-sosmed">
                            <BsFacebook/>
                        </div>
                        <div className="footer-icon-sosmed">
                            <BsYoutube/>
                        </div>
                        <div className="footer-icon-sosmed">
                            <BsTwitter />
                        </div>
                    </Col>
                </div>

                <div className='row'>
                    <Col xl={4}>
                        <h4>Contact</h4>
                        <p>PT. Global Retail bersama</p>
                        <p>Jl. Cidadol Raya No 40 Kabupaten Lma, Jakarta Selatan 12220</p>
                        <p> +62 811-828-6226</p>
                        <p>info@skills.id</p>
                    </Col>

                    <Col  xl={{offset:1, span:4}}>
                        <h4>Category</h4>
                        <div className="row mt-3">
                            <Col className="category" xl={6}>
                                <p>Music</p>
                                <p>Art and Craft</p>
                                <p>Food and Brownies</p>
                                <p>Design</p>
                                <p>Photography</p>
                                <p>Sport</p>
                            </Col>
                            <Col className="category" xl={6}>
                                <p>Music</p>
                                <p>Art and Craft</p>
                                <p>Food and Brownies</p>
                                <p>Design</p>
                                <p>Photography</p>
                                <p>Sport</p>
                            </Col>
                        </div>
                    </Col>

                    <Col  xl={{span:3}} className="ps-4">
                        <div className="ms-5 ps-1 ">
                            <h4>Branch</h4>
                            <div className='row mt-3'>
                                <Col xl={6}>
                                    <p>Jakarta</p>
                                    <p>Tanggerang</p>
                                    <p>Bekasi</p>
                                    <p>Medn</p>
                                </Col>
                                <Col xl={6}>
                                    <p>Bali</p>
                                    <p>Surabaya</p>
                                    <p>Bandung</p>
                                </Col>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </div>
    )
}
