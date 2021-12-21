import React from 'react'
import {Col} from 'react-bootstrap'
export default function CardCourse({data}) {
    return (
        <Col xl={3} className="px-3">
            <div className="card mx-3" >
                <img src={data.thumb} className="card-img-top img-course" alt="..." />
                <div class="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <div className="course-price my-3">{data.price}</div>
                    <button  class="btn btn-course">Beli</button>
                </div>
            </div>
        </Col>

    )
}
