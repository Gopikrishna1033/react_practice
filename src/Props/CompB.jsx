import React from "react";

let CompB = (props)=>{

    return <div>
        <table className="table table-bordered">
            <thead className="bg-dark">
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
            </thead>
            <tbody>
                {
                    props.employee.map((emp)=>{
                        return <tr key={emp.eid}>
                            <td>{emp.eid}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.email}</td>
                            <td>{emp.gender}</td>
                        </tr>
                    })
                }
                
            </tbody>
        </table>
       {/*  <pre>{JSON.stringify(props)}</pre>
        <h5>{props.a}</h5>
        <h6>{props.b}</h6>
        <CompC one = {props.a} two = {props.b}/> */}
    </div>
}
export default CompB