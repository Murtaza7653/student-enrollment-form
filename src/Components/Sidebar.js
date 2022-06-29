import React from 'react';
import Table from './Table';

export default function Sidebar(props) {
    return (
        <div className="px-3 py-3" style={{ backgroundColor: "white", border: "2px solid #0F0326", borderRadius: "6px", width: "40%", float: "right" }}>
            <p className='text-center' style={{ fontSize: "25px", textDecoration: "underline" }}><b>ENROLLED STUDENTS</b></p>
            {props.students.length === 0 ? "No Students Enrolled." :
                props.students.map((student) => {
                    console.log(student.sno, student.name, student.email, student.url, student.gender, student.image, student.skills);
                    return (<Table student={student} key={student.sno} deleteRecord={props.deleteRecord} />
                    )
                })
            }

        </div>

    )

}