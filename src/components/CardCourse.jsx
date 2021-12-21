import React from 'react'
import {Col} from 'react-bootstrap'
export default function CardCourse({data}) {
    return (
        <Col xl={3} className="">
            <div className="card " >
                <img src={data.thumb} className="card-img-top img-course" alt="..." />
                <div class="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <div className="course-price my-3">{data.price}</div>
                    <button  className="btn-course py-1">Beli</button>
                </div>
            </div>
        </Col>

    )
}
