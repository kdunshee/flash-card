import React from 'react';
import './App.css';
import Flashcard from "./Flashcard"
import FlashcardForm from "./FlashcardForm"

class App extends React.Component {
    state = {
      flashcards: [
        {id: 1, word: "Black Bear", description: "Ursus Americanus"},
        {id: 2, word: "Grizzly Bear", description: "Ursus Arctos Horribilis"},
        {id: 3, word: "Polar Bear", description: "Ursus maritimus"}
      ]
    }

    // renderCards = () => {
    //   const { flashcards, } = this.state;
    //   return flashcards.map( flashcard => 
    //     <li key={flashcard.id}>{flashcard.word}</li>
    //   )
    // };
    
    getId = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
     }

    addCard = (word) => {
      const {flashcards} = this.state;
      const flashcard = { word: "", id: this.getId(), };
      this.setState({flashcards: [flashcard, ...flashcards]})
    }

    //   addItem = (name) => {
    //     const { todos } = this.state;
    //     const todo = { name, id: this.getUniqId() , complete: false }
    //     this.setState({ todos: [todo, ...todos] }); 
    //     }

    // }

  render() {
    const {flashcards} = this.state
    return(
      <div>
        <Flashcard info ={flashcards} />
        <FlashcardForm addCard = {this.addCard}/>
       </div>
    )
  }
}

    
 

export default App;
