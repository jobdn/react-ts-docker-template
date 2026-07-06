import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [data, setData] = useState<string>();

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <button
        onClick={async () => {
          const response = await (await fetch(`${API_URL}/hello`)).text();
          setData(response);
        }}
      >
        Fetch
      </button>

      {data}
    </div>
  );
}

export default App;
