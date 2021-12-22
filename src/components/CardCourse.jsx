import React from 'react'
import {Col} from 'react-bootstrap'
export default function CardCourse({data}) {
    return (
        <Col xl={3} md={4} sm={6} xs={12} className="mb-4">
            <div className="card " >
                <img src={data.thumb} className="card-img-top img-course" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <div className="course-price my-3">{data.price}</div>
                    <button  className="btn-course py-1">Beli</button>
                </div>
            </div>
        </Col>

    )
}
