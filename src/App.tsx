import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { add, selectFruitWithoutApple } from "./features/fruits/fruitSlice";

export default function App() {
  const dispatch = useAppDispatch()
  const [name, setName] = useState<string>("");

  const fruits = useAppSelector(selectFruitWithoutApple);

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
