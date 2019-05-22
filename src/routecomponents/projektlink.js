import React from 'react'
import styles from './styles.css';

export default class Projektlink extends React.Component {

  constructor(props) {
    super();
  }

  imageClick = () => {
  console.log('Click!!!!');
  window.open("http://" + this.props.sitelink.toString());
  }

  render() {
    return (
      <div>
          <img src={this.props.image} onClick={this.imageClick} alt="..."
          className={this.props.className} sitelink={this.props.sitelink}/>
      </div>
    );
  }

}







// https://stackoverflow.com/questions/47839856/image-onclick-failing-in-react/47839970
