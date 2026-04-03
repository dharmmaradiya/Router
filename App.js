import React, { useState } from "react";
import Navbar from "./Navbar";
//  import './App.css'
import "./Productfrom.css";
import "./Navbar.css";
import Card from "./Card";
import Timer from "./Timer";
import Couter from "./Couter";
import Table from "./Table";
import Product from "./Product";
import { Routes, Route } from "react-router-dom";

// Dummy Components (temporary if not created)
function Electronics() {
  return <h2>Electronics Page ⚡</h2>;
}

function PagenotFound() {
  return <h2>404 Page Not Found ❌</h2>;
}

export default function App() {
  const [state, setState] = useState(false);

  return (
    <div>
      {/* Toggle UI */}
      {state ? <Card /> : <Table />}

      <button onClick={() => setState(true)} className="btn">
        Show Card
      </button>
      <button onClick={() => setState(false)} className="btn">
        Show Table
      </button>

      {/* Navbar */}
      <Navbar />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Couter />} />
        <Route path="/card" element={<Card />} />
        <Route path="/table" element={<Timer />} />

        <Route path="/products" element={<Product />}>
          <Route path="electronics" element={<Electronics />} />
        </Route>

        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </div>
  );
}