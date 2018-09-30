import React,{Component} from "react"
import {Link} from "react-router-dom";
import axios from "axios";

class Employees extends Component{
    constructor(){
        super()
        this.state = {
            employeeArray:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            this.setState({
                employeeArray:res.data
            })
        })
    }

    render(){
        console.log(this.state)
        let employeeList = this.state.employeeArray.map(employee=>(
            <Link to={"/details/"+employee.id}>
                <div key={employee.id} className="employee-list">
                    <p>{employee.name}</p>
                </div>
            </Link>
        ))
        return(
            <div>
                <h1>Employees</h1>
                {employeeList}
            </div>
        )
    }
}

export default Employees;