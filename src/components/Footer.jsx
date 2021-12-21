import {Col} from 'react-bootstrap'
export default function Footer() {
    return (
        <div className="bg-dark p-5">
            <div className="container-fluid footer-container">
                <div className="row">
                    <Col>
                        Skills.id
                    </Col>
                </div>

                <div className="row">
                    <Col xl={6}>
                        Home Privacy Term
                    </Col>

                    <Col xl={6}>
                        Icon
                    </Col>
                </div>

                <div className='row'>
                    <Col xl={4}>
                        <h4>Contact</h4>
                    </Col>

                    <Col  xl={4}>
                        <h4>Contact</h4>
                    </Col>

                    <Col  xl={4}>
                        <h4>Contact</h4>
                    </Col>
                </div>
            </div>
        </div>
    )
}
