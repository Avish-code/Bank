import logo from './logo.svg';
import './App.css';
// import CrudOperation from './CRUD/crudOperation';
// import AssignCrud from './CRUD/assignCrud';
import 'bootstrap/dist/css/bootstrap.min.css';
import Component1 from './Component/myComponent';

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
    <div>
      {/* <CrudOperation/> */}

    {/* <AssignCrud/>*/}
      <Component1/>
    </div>
  );
}

export default App;
