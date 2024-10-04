import React, { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";
import SavedQuotes from "./components/SavedQuotes";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    const data = await response.json();
    setQuote(data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    if (quote && !savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} fetchQuote={fetchQuote} saveQuote={saveQuote} />
      {savedQuotes.length > 0 && <SavedQuotes savedQuotes={savedQuotes} />}
    </div>
  );
}

export default App;
