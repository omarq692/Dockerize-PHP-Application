import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/Testcomponent";

function App() {
    return (

        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*  Edit <code>src/App.js</code> and save to build now*/}
                {/*</p>*/}
                {/*<a*/}
                {/*  className="App-link"*/}
                {/*  href="https://reactjs.org"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  Learn React*/}
                {/*</a>*/}
                <MyComponent></MyComponent>
            </header>
        </div>
    );
}

export default App;
