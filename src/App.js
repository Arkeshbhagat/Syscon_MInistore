import './App.css';
import "./components/IconAndContent";
import { IconAndContent } from './components/IconAndContent';
import { MobileProduct } from './components/MobileProduct';


// import {IconAndContent} from "";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <div className='first h-[50px] w-[50%] border-solid bg-blue-800'>
        
      </div> */}
      <div><IconAndContent /></div>
      <div><MobileProduct /></div>
    </>
  );
}

export default App;
