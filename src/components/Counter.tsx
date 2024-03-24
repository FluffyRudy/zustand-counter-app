import { CounterState } from "../state/CounterState";

export default function Counter() {
  const { count, increaseCount, decreaseCount } = CounterState();
  return (
    <div>
      <h1 style={{ textTransform: "uppercase" }}>
        total counter: {count > 9 ? count : "0" + count.toFixed()}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2vmax",
        }}>
        <button onClick={decreaseCount}>-1</button>
        <button onClick={increaseCount}>+1</button>
      </div>
    </div>
  );
}
