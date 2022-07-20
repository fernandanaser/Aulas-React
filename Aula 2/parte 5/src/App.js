import './App.css';
import List from './components/List';
// import FirstComponent from './components/FirstComponent';
import Personal from './components/Personal';
import SayMyName from './components/SayMyName';


function App() {
  const name = "Tiago";
  return (
    <div className="App">
      {/* <FirstComponent /> */}
      <SayMyName name="João" />
      <SayMyName name={name} />
      <Personal img="https://via.placeholder.com/150" nome="João" idade="12" profissao="Corno" />
      <List />
    </div>
  );
}

export default App;
