// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';


// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//     )
// }

// class Board extends React.Component {

//   renderSquare(i) {
//     return (
//       <Square
//       value={this.props.squares[i]}
//       onClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {

//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null)
//       }],
//       stepNumber: 0,
//       xIsNext: true
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();

//     if(calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([{
//         squares: squares
//       }]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0,
//     })
//   }
//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move ?
//         'Go to move #' + move :
//         'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });
//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
//      }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//           />

//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );


// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
//

// class Welcome  extends React.Component{
//    constructor(props) {
//    super(props);
//    this.state = {name:['金大侠','sdf','算法']};
//   }
//   render() {
//     return <h1><div>Hello</div>, {this.state.name} * {this.state.name} this is jsx</h1>;
//   }
// }


import React from "react";
import { render } from "react-dom";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';

const App = () => (
  <div>
    <Carousel />
  </div>
);


var currentImage = 0;
function Welcome(props) {
  var data =
    [
      {
          "user":{"name":"zhaoyu"},
          "record":[{
            "video":"test.mp4",
            "text":"Lake",
            "pic":"div-with-bg1"
          }],
          "others":[]
          },
          {
          "user":{"name":"yuzhao"},
          "record":[{
            "video":"test2.mp4",
            "text":"Sun",
            "pic":"div-with-bg2"
          }],
          "others":[]
      }
    ];
  const style = data[currentImage].record[0].pic;
  const name = "Hello, " + data[currentImage].user.name;
  const video = data[currentImage].record[0].video;
  const text = data[currentImage].record[0].text;

  console.log(currentImage + " hrere");
  return (
    <div>
        <p id='t0'>{name}</p>
        <div class="background" class={style} id ="t3">
          <video width="400" controls autoPlay id="tvideo" onEnded = {handelEnded} src={video} class="video">
              Your browser does not support HTML5 video.
          </video>
          <div class="transbox">
            <p id="t2">{text}</p>
          </div>
        </div>
    </div>
    );

}

function handelEnded() {
    console.log(currentImage);
    if (currentImage < 1){
        currentImage ++;
    } else {
        currentImage = 0;
    }
    render(
    Welcome(),
    document.getElementById('root')
    );
    // window.location.reload(true); /
    console.log(currentImage);
  }

const element = Welcome();

render(
    element,
    document.getElementById('root')
    );
