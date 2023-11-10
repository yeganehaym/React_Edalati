import {Component} from "react";
import {Counter} from "./Counter";

export class Counters extends Component{

    state={
        counters:[
            {count:1},
            {count: 6},
            {count: -2},
            {count: 8}
        ]
    }

    render() {
        return (
            <>
                {
                    this.state.counters.map(c=><Counter count={c.count} /> )
                }
            </>
        )
    }
}