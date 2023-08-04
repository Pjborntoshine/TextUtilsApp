import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from './components/TextFrom'; 

function App() {
  return (
    <>
      <Navbar title="TextUtils" AboutText="About" />
      <div className="container my-3"><TextFrom heading="Enter the text to enalyze below"/></div>
      
      
    </>
  );
}

export default App;
