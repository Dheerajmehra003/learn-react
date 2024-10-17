import { Component } from "react";

class ClassComponentExample extends Component {
    constructor(props) {

        super(props);
         
        this.state ={
            count: 0,
        }
    }

    render() {

        function handleInc () {
            this.setState(((prevState)=>({count: prevState.count + 1})))
        }
        return (
            <>
            
            <h1>count: {this.state.count}</h1>
            <button onClick={handleInc}>Increment</button>
            </>
        )
    }
}

export default ClassComponentExample;