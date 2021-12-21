import {Col} from 'react-bootstrap'
import {GrSearch} from 'react-icons/gr';


export default function Search() {
    return (
        <div className="container my-5 pt-5">
            <div className="row text-center justify-content-center align-items-center">
                <h2 >Selamat datang di Skills.id</h2>
                <p className="mt-3 pb-3">Silahkan cari dan pilih kursus yang menarik bagi Anda di Skills.id</p>
            </div>
            <div className="row justify-content-center">
                <Col xl={7} md={7} sm={7} xs={8}>
                    <div style={{"borderRadius": "5px"}} className="input-container shadow-lg p-3">
                        <GrSearch className="search-icon" size="30px"/>
                        <input placeholder='Found Course' className='inp-search ms-3'/>
                    </div>
                </Col>
                <Col xl={2} md={2} sm={2} xs={4}className="d-flex align-items-center ">
                    <button className='btn-find-course py-1 shadow-lg'>
                        Find Course
                    </button>
                </Col>
            </div>
        </div>
    )
}
