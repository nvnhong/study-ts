import { Margin } from "./components/box/Margin";

function App() {
  return (
    <div>
      <Margin>
        {(arr) => (
          <div>
            {arr.map((el) => {
              return <>{el.name}</>;
            })}
          </div>
        )}
      </Margin>
    </div>
  );
}

export default App;
