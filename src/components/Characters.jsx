import React from 'react'

function Characters({ characters }) {
  return (
    <div className='row'>
      {characters.map((item, index) => (
        <div key={index} className='col mb-4'>
          <div className='card' style={{ minwidth: '200px' }}>
            <img src={item.image} alt='imajen' />
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <hr />
              <p>Lacation: {item.location.name}</p>
              <p>Species: {item.species}</p>
              <p>Status: {item.status}</p>
              <p>Gender: {item.gender}</p>
              <p>Origin: {item.origin.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters;