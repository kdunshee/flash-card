import React from 'react';

const Flashcard = ({ info, word }) => (
 <div>
   <h2>{word}</h2>
   <ul>
     { info.map( info => <li key={info.id}>{info.word}</li>) }
   </ul>
 </div>
)


export default Flashcard;