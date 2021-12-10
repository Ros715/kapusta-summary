//import logo from './logo.svg';
import "./App.css";
import Summary from "./Summary";

const exampleData = [
  { month: 0, sum: 10000.0 },
  { month: 1, sum: 10000.0 },
  { month: 2, sum: 100.0 },
  { month: 3, sum: 10000.0 },
  { month: 4, sum: 1000.0 },
  { month: 5, sum: 10000.0 },
  { month: 6, sum: 10000.0 },
  { month: 7, sum: 10000.0 },
  { month: 8, sum: 10000.0 },
  { month: 9, sum: 10000.0 },
  { month: 10, sum: 10000.0 },
  { month: 11, sum: 10000.0 },
];

function App() {
  return (
    <div className="summary">
      <Summary data={exampleData} />
    </div>
  );
}

export default App;
