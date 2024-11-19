import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I love to eat burgers
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <form action='' method='POST' className='formFormat'>
           <label for="fullName">Name</label>
 
           <input type="text" id='fullName' name='fullName'></input> 

           <br />

           <label for="email">Email</label>
 
           <input type="email" id='email' name='email'></input>

           <br />

           <label for="phoneNumber">Phone Number</label>
 
           <input type="tel" id='phoneNumber' name='phoneNumber'></input>

           <br />

           <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
