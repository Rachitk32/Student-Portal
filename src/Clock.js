import React from 'react';


class Clock extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={date:new Date()};
    }
    componentDidMount()
    {
      this.timerID=setInterval( () => this.tick(), 1000 );
    }
  
    componentWillUnmount()
    {
      clearInterval(this.timerID);
    }
  
   tick(){
     this.setState({
         date:new Date()
       });
   }
  
    render(){
      return (
         <div class="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
            <div class="d-flex flex-column">  
                <div className="display-1 text-white">
                  {this.state.date.toLocaleTimeString()}
                </div>
            </div>
          </div>
       
      );
    }
  };

  export default Clock;