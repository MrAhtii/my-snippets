import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import CardForm from './components/CardForm';
import FlashcardList from './components/FlashcardList';

function App() {
// 1. Check memory on load
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("hexaCoreSnippets");
    if (saved) return JSON.parse(saved);
    return [];
  });
  
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Save to memory on change
  useEffect(() => {
    localStorage.setItem("hexaCoreSnippets", JSON.stringify(cards));
  }, [cards]);
function addCard(newCardData){
  const completeCard = {
    ...newCardData, 
    id: Date.now()
  };
  setCards([...cards, completeCard]);
}
function deleteCard(id) {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
  }
const filteredCards = cards.filter(card => 
  card.title && card.title.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (
    <div className="dashboard-layout">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardForm  onAdd={addCard}/>
      <FlashcardList cards={filteredCards} onDelete={deleteCard}/>
    </div>
  )
}

export default App