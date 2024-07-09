import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import LoginForm from './loginForm'


function App() {
  return (
    <div className="App">
      <header className="App-header">


        <img src={logo} className="App-logo" alt="logo" />
          <div>
                                     <h1>Login Here!</h1>
                                     <LoginForm />
                                 </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App">
              <HomePage /> {}
            </div>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and some things
        </a>
      </header>
    </div>
  );
}


export default App;
