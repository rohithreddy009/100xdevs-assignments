// export function Card(){
//     return <div>
//         hi from card.jsx
//     </div>
// }

// Card.jsx

import React from 'react';

export function Card(props){
  const { name, description, socialMedia, interests } = props;

  return (
    <div>
        <div>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
    <div style={{ border: '1px solid #000', padding: '10px' }}>
  <button style={{ marginRight: '10px' }} {...socialMedia.linkedin && (
    <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  )}>LinkedIn</button>

  <button {...socialMedia.twitter && (
    <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
      Twitter
    </a>
  )}>Twitter</button>
</div>

    <div>
        <h3>Interests</h3>
        <ul>
            {interests.map(function (interest, index) {
            return <li key={index}>{interest}</li>;
        })}
    </ul>
    </div>
    </div>
  );
};

