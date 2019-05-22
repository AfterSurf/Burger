import React from 'react'
import projekteImage from '../bilder/projekte.jpg';
import styles from './styles.css';

import Projektlink from './projektlink.js'
import dieSchwindler from '../bilder/dieschwindler.png';
import dieAkustischen4 from '../bilder/dieakustischen4.png';
import bigBand from '../bilder/thelittlebigband.png';

export default class Projekte extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>

          <div className={styles.rowStyles}>
            <div className = {styles.centerStyles}>
              <img className = { styles.styleProjekteImage } src={projekteImage} />
              <h1 className = { styles.projekteStyle }> Projekte </h1>
            </div>
          </div>

          <div className={styles.rowImageStyles}>
            <Projektlink className={styles.paddingStyles} image={dieSchwindler} sitelink="www.dieschwindler.com"/>
            <Projektlink className={styles.paddingStyles} image={dieAkustischen4} sitelink="dieakustischenvier.com"/>
            <Projektlink className={styles.paddingStyles} image={bigBand} sitelink="www.thelittlebigband.de"/>
          </div>

      </div>
    )
  }
}
