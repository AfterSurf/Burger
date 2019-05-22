import React, {Component} from 'react'

import Toolbar from './navcomponents/toolbar/toolbar';
import SideDrawer from './navcomponents/sidedrawer/SideDrawer';
import Backdrop from './navcomponents/backdrops/Backdrop';

// Router: 
import Main from './routecomponents/Main'

class App extends Component {

  state = {
    sideDrawerOpen: false
  }

  drawtogglerClickhandler = () => {
    // hier verwendet er eine ArrowFunction 
    // --> weil ich auf eine Veränderung reagiere ?! 
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen === true) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div style = {{height: '100%'}}>
        <Toolbar drawerClickhandler={this.drawtogglerClickhandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}

        {/* hier wird eine eigene Componente erstellt, die die Inhalte hält  */}
        
        <Main/>
        
        {/* <main style={{ marginTop:'64px' }}>
          <p>hier steht etwas - hier wird der Inhalt der Seite dargestellt!</p>
        </main> */}
      
      
      </div>
    )
    
  }
}

export default App; 