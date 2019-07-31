import React, { Component } from 'react'
import ReactCountdownClock from "react-countdown-clock";

// props= sendTime
  class Timer extends Component {

    constructor(){
      super()
      this.state = {
        // allSessions: []
        pausation: true,
        class: "stop-button",
        firstClick: false,
        stopped: false
      }
    }


    wrapUpSession = () => {
      this.setState({
        pausation: true,
        class: "stop-button hidden"
      })

      // call a function to "complete" workSession
        // send endtime TimeStamp
        // create finish worksession button (submit)
    };

    startTime = () => {
      console.log("TimeStamp")
      this.setState({
        pausation: false,
        stopped: true
      })
      this.props.beginTimer()

      // create checkboxes
      // create notebox
    };


    // toggle = (pausation) => {
    //    this.setState({
    //      pausation: !this.state.pausation
    //    })
    // };



    render() {
      const minutes = 1;



      return (
        <div className="timer">
          <ReactCountdownClock
            seconds={60 * minutes}
            color="#09792e"
            alpha={0.5}
            size={150}
            onComplete={()=> this.wrapUpSession()}
            paused ={this.state.pausation}
            weight={20}

          />

          <div className="timer-btn">
            {!this.state.stopped ? (
              <button className="start-button" onClick={() =>
                this.startTime()} >Start</button>) :

              (<button onClick={()=> this.wrapUpSession()}   className={this.state.class}>STOP</button>)
              }

          </div>


        </div>
      );
    }
  }

  export default Timer;
