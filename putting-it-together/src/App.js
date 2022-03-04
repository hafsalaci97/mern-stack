import logo from './logo.svg';
import './App.css';
import PuttingItTogether  from './components/PuttingItTogether';''

function App() {
  return (
    <div className="App">
      <PuttingItTogether 
        firstName = {"Doe"}
        lastName = {"Jane"}
        age = {45}
        hairColor = {"Black"}
      />
      <PuttingItTogether 
        firstName = {"Smith"}
        lastName = {"John"}
        age = {88}
        hairColor = {"Brown"}
      />
    </div>
  );
}

export default App;
