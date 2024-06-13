import { useState } from "react";
import List from "./components/List";

function App() {
  let [text, setText] = useState("hello");
  let [list, setList] = useState([]);
  let changeText = (event) => {
    setText(event.target.value);
  };

  let saveData = () => {
    // let _list = [...list]
    // _list.push(text)
    // setList(_list)
    let age = Math.floor(Math.random() * 100);
    setList([...list, { title: text, age: age }]);
    setText("");
  };
  return (
    <>
      <input type="text" value={text} onChange={changeText} />
      <button onClick={saveData}>Save</button>
      {/* <h1>{text}</h1> */}

      <List list={list} text={text} />
    </>
  );
}

export default App;
