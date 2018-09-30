import React,{Component} from "react"
import axios from "axios";

class Details extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                address:{}
            }
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users/"+this.props.match.params.id).then(res=>{
            this.setState({
                user:res.data
            })
        })
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Info</h1>
                <div className="info-box">
                    <p className="info-name">{this.state.user.name}</p>
                    <ul>
                        <li><strong>Email:</strong> {this.state.user.email}</li>
                        <li><strong>Phone:</strong> {this.state.user.phone}</li>
                        <li><strong>Address: </strong>
                            {this.state.user.address.street} {this.state.user.address.suite}<br/>
                            {this.state.user.address.city}, {this.state.user.address.zipcode}
                        </li>
                        <li><strong>Website: </strong>{this.state.user.website}</li>
                    </ul>
                </div>
            </div>
            

        )
    }
}

export default Details;