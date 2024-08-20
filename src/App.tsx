import { useState } from "react";
import { add, selectFruitWithoutApple } from "./features/fruits/fruitSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>("");

  const fruits = useSelector(selectFruitWithoutApple);

  return (
    <div className="App">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button
          onClick={() => {
            dispatch(add(name))
          }}
        >
            Add
        </button>
        <ul>
            {fruits.map(fruit => (
                <li key={fruit}>{fruit}</li>
            ))}
        </ul>
    </div>
  )
}
