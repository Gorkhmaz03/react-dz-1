import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import Calculator from "./components/Calculator";
import ProductCard from "./components/ProductCard";
import ColorSelector from "./components/ColorSelector";

const tasks = [
  { text: "Buy groceries", completed: true },
  { text: "Walk the dog", completed: true },
];

const colors = ["red", "green", "blue", "yellow", "purple"];

function App() {
  return (
    <div>
      <UserProfile name="John Doe" age={28} location="New York" />

      <TodoList tasks={tasks} />

      <Calculator num1={2} num2={3} />

      <ProductCard
        title="Apple"
        price={999.99}
        imageUrl="pexels-mali-102104.jpg"
        description="Very delicious apple"
      />

      <ColorSelector colors={colors} />
    </div>
  );
}

export default App;
