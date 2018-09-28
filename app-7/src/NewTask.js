import React,{Component} from "react";

class NewTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            input:""
        }
        this.inputChange = this.inputChange.bind(this)
        this.updateTask = this.updateTask.bind(this)
    }
    inputChange(event){
        let {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }
    updateTask(){
        this.props.addHandler(this.state.input)
        this.setState({input:""})
    }

    render(){
        return(
            <div>
                <input name="input" value={this.state.input} onChange={this.inputChange}/>
                <button onClick={this.updateTask}>Add</button>
            </div>
        )
    }
}

export default NewTask;