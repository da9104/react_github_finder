import { useState, useEffect  } from 'react'
import './App.css'
import SearchBar, { API } from './components/SearchBar'
import CardList from './components/CardList'

function App() {
  const [cards, setCards] = useState([])

  const handleSubmit = async (term) => {
   const result = await API(term)
   setCards([result, ...cards])
  //  const newItems = [result, ...cards]
  //  setCards({ cards: newItems }, () => localStorage.setItem("users"), JSON.stringify(newItems))
  }
  const resetCards = () => {
    setCards([])
  }

  // useEffect(() => {
  //   const fromLocalStorage = localStorage.getItem("cards");
  //   if (fromLocalStorage) {
  //     setCards(fromLocalStorage);
  //   }
  //   localStorage.setItem("cards", JSON.stringify(cards));
  // }, [cards]);

  return (
    <>
      <div>
      <h2>Vite + React github finder</h2>
      <SearchBar onSubmit={handleSubmit} resetCards={resetCards} />
      <CardList cards={cards} />
     </div>
    </>
  )
}

export default App
