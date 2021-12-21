/* eslint-disable eqeqeq */
import React, {useState} from 'react'
import {Col} from 'react-bootstrap'

import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight} from 'react-icons/ai';


import banner0 from '../assets/banner0.jfif'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpeg'

export default function BannerCoursel() {

    const banners = [banner0, banner1, banner2, banner3]
    const [indexBanner, setIndexBanner] = useState(0)
    const leftImage = () => {
        const index = banners.findIndex((banner) => banner == banners[indexBanner]);
        console.log("find index left: ", index)
        if (index == 0) {
          setIndexBanner(banners.length - 1);
        } else {
          setIndexBanner(index-1);
        }
        console.log("Banner: ",indexBanner)
      };

      const rightImage = () => {
        const index = banners.findIndex((banner) => banner == banners[indexBanner]);
        console.log("find index right: ", index)
        if (index + 1 == banners.length) {
            setIndexBanner(0);
        } else {
            setIndexBanner(index + 1);
        }
        console.log("Banner: ",indexBanner)

      };

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center align-items-center">
                <Col xl={1} className="d-flex align-items-center justify-content-end">
                    <div className="arrow  shadow-lg">
                        <AiOutlineLeft onClick={() => leftImage()}/>
                    </div>
                </Col>

                <Col xl={9} className="img-container">
                    <img src={banners[indexBanner]} alt="" className="img-fluid img-banner"/>
                </Col>

                <Col xl={1}>
                    <div className="arrow shadow-lg">
                        <AiOutlineRight onClick={() => rightImage()}/>
                    </div>
                </Col>
            </div>
        </div>
    )
}