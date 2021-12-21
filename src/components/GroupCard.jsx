import CardCourse from "./CardCourse"
import dataCourse from '../data/courses'
export default function GroupCard() {
    return (
        <div className="container-fluid my-5">
            <div className="pt-4 mx-4 row align-items-center justify-content-center">
                {
                    dataCourse.map((data, i)=>(
                        <CardCourse key={i} data={data}/>

                    ))
                }
            </div>
        </div>
    )
}
