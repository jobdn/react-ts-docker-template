import { HELLO_TEXT } from "./config";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      {HELLO_TEXT}
    </div>
  );
}

export default App;
