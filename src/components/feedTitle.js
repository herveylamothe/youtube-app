import React,{Component} from 'react';
import './feedTitle.css';


class FeedTitle extends Component {
  render() {
    const props = { name: "Mo"}

    return (
      <div>
    <div className="container">
        <h2>{`${props.name}'s Personalized Feed`}</h2>
        <p>Pursuit Tube</p>
   
      </div>
       </div>
    );
  }
}


export default FeedTitle;