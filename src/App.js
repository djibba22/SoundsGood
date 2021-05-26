
import pinkadam from './adam2.png';
import sgj from './soundsgoodjohn.m4a';
import sgd from './sounds_good_dan.m4a';
import './App.css';

function App() {
  const sgjohn = new Audio(sgj);
  const sgdan = new Audio(sgd);

  const playJohn = () => {
    sgjohn.play();
  }
  
  const playDan = () => {
    sgdan.play();
  }

  return (
    <div className="App ">
      <header className="App-header">
        <div className="container">
        <div className="item">
            <button className="btn btn--beta" onClick={playJohn}>Sounds Good John!!</button>
          </div>
          <div className="item">
            <img src={pinkadam} className="App-logo" alt="logo" />
            <p>Sounds Good John</p>
          </div>
          <div className="item">
            <button className="btn btn--beta" onClick={playDan}>Sounds Good Dan!!</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
