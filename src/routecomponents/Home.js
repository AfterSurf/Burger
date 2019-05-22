import React from 'react'
import styles from './styles.css';
import homeImage from '../bilder/homeAngepasst.jpg';

export default class Home extends React.Component {
  constructor() {
    super();
  };

  render() {

    var websiteText = "Tobias Rösch Kontrabass";

    return (
      <div className = {styles.centerStyles}>
        <h1 className = {styles.styleHomeText}>{websiteText}</h1>
        <img className = {styles.styleHomeImage} src={homeImage} />
      </div>
    )
  }
}
