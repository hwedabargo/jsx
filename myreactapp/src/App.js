import logo from './logo.svg';
import './App.css';
import './style.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <div>
  <title>
    MyReactApp
  </title>
  <div>
  <link rel="stylesheet" href="./style.css" />
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title_red">My Name : Hweda Bargo</h1>
    <br />
    <img src="/imageInSrc.jpg"/>
    <br />
    <img src="/imageInPublic.jpg"/>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4"/>
  </video>
</div>
  </div>
      </header>
    </div>
  );
}

export default App;
