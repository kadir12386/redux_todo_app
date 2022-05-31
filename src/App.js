import "./App.css";
import ListItems from "./component/ListItems";
import TextInput from "./component/TextInput";

function App() {
  return (
    <div className="App">
      <h1>To-Do-List</h1>
      <TextInput />
      <ListItems />
    </div>
  );
}

export default App;
