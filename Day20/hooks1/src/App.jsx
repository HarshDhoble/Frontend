import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([
    { name: "Pizza", calories: "56"},
    { name: "Burger", calories: "69"},
    { name: "Coke", calories: "500"},
    { name: "Brownie", calories: "180"},
    { name: "Fried Rice", calories: "90"},
    { name: "Pani Puri", calories: "10",},
  ]);
  return (
    <div className="App">
      <header>Foodpedia</header>
        <main>
          {foods.map((food, index) => (
            <Card
              key={index}
              food={food}
              foods={foods}
              setFoods={setFoods}
              index={index}
            />
          ))}
        </main>
    </div>
  );
}

export default App;