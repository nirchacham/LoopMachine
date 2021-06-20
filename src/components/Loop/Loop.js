import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Loop.css';

class Loop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          size: 110,
          isOn:false
        };
      }


  changeLoopState(){ // Executed whenever user toggles on/off
    const loopState = this.state.isOn == true ? false : true
    this.setState({
        isOn:loopState
    },()=> {this.props.isAudioOn(this.props.audio)});

  }


  render() {
      const loopState = this.state.isOn == true ? "toggle-on" : "toggle-off"
    return (
      <div className="image-root"
        style={{
          backgroundImage: `url(${this.props.photo})`,
          width: this.state.size + 'px',
          height: this.state.size + 'px',          
        }} >
        <div>
          <FontAwesome className="image-icon" name={loopState} title="play" onClick={()=>this.changeLoopState()} />
        </div>
      </div>
    );
  }
}

export default Loop;
