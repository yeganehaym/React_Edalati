import {Component} from "react";

export class Counter extends Component{

    state={
        count:this.props.count
    }

    add=(step)=>{
        let c=this.state.count;
        c+=step;
        this.setState({count:c})
    }

    sub=()=>{
        let c=this.state.count;
        c--;
        this.setState({count:c})
    }

    makeStyle=()=>{
        if(this.state.count>0)
            return {color:'green'};
        if(this.state.count<0)
            return {color:'red'};

        return {color:'blue'};
    }

    render(){
        return(
            <>
                <h1>Counter</h1>
                <span style={this.makeStyle()}>Value = {this.state.count}</span>
                <br/>
                <button onClick={()=>this.add(2)}>Add</button>
                <br/>
                <button onClick={this.sub}>Minus</button>
            </>
        )
    }
}