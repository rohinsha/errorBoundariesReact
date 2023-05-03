import "./styles.css";
import ErrorBoundary from "./ErrorBoundary";
import { useState, useEffect } from "react";
export default function App() {
  const [y, setY] = useState("");

  if (y === "") {
    throw new Error("jkjkjkjkjk");
  } else {
    setY("rohu");
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <K />
      </ErrorBoundary>
    </div>
  );
}

const K = () => {
  return <h1>sdsdds</h1>;
};
