import './style.css';
import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        FullName : 'Jabri Yassine',
        Profession: 'Full stack student',
        Bio: 'I am a full stack student.I work as a cashier manager in a point of sale for the Waikiki clothing brand for 9 months and I am studying now web development because I am passionate about it.' ,
        SrcImg : './imageInSrc.webp' ,
        Show: false,
        button: 'show profile',
        date: 0
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  tick() {
    this.setState({
      date: this.state.date + 1
    });
  }


  isToggle = () => {
    this.setState(state => ({
      Show : !this.state.Show
    }))
  }

  render() {
    const Show = this.state.Show;
    return (
  <div className='Profile'>
      { Show && (
      <>
        <h1> {this.state.FullName} </h1>
        <h3> {this.state.Profession} </h3>
        <p className='bio'> {this.state.Bio} </p>
        <img src={this.state.SrcImg} alt='profileimge'></img>
      </>
      )}
      
      <br/> <br/>
      <button onClick={this.isToggle}>{Show?'hide profile': this.state.button}</button>
      <p className='Time'> The last component was mounted since {this.state.date} seconds</p>

  </div>
    )
  }
}

export default App
