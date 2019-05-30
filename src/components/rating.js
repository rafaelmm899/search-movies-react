import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Rating extends Component {

    buildStar(avg, rating){
        if(avg > rating){
            return <FontAwesomeIcon icon="star" />
        }else{
            let res = (avg % 1);
            let integer = Math.trunc(avg);
            if(res > 0.5 && (integer === (rating - 1))){
                return <FontAwesomeIcon icon="star-half-alt" />
            }
            return <FontAwesomeIcon icon={['far','star']} />
        }
    }

    render(){

        const { avg } = this.props;
        
        return (
            <div>
                {this.buildStar(avg, 1)}
                {this.buildStar(avg, 2)}
                {this.buildStar(avg, 3)}
                {this.buildStar(avg, 4)}
                {this.buildStar(avg, 5)}
            </div>
        )
    }


}