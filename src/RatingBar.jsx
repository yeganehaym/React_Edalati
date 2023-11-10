import {Component} from "react";
import 'font-awesome/css/font-awesome.min.css'
import './RatingBar.css'
export class RatingBar extends Component{

    state={
        rate:this.props.rate??0,
        rateCount:this.props.count??5,
        readonly:this.props.readonly??false
    }

    setRate=(rate)=>{
        if(this.state.readonly==true)
            return

        this.setState({rate:rate})
    }
    makeStars=()=>{

        let array=[];
        for (let i=0;i<this.state.rateCount;i++)
        {
            array.push(i+1);
        }

       return  array.map(star=>
           <i onClick={()=>this.setRate(star)}  className={(star<=this.state.rate?"fa fa-star":"fa fa-star-o") + " yellow " + (this.state.readonly==true?"":"mouse")}></i>)

    }


    render() {
        return(<>
          <div>
              {
                  this.makeStars()
              }

          </div>

        </>)
    }
}
