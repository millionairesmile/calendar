import DataCard from "./components/DataCard";
import DateData from "./date.json";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ul className="grid grid-cols-7 gap-4">
        <li className="w-32 h-32"></li>
        <li className="w-32 h-32"></li>
        {DateData.map((v, i) => {
          return <DataCard key={i} date={v.date} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
};

export default App;
