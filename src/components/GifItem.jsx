import React from 'react';

export const GifItem = ({id, title, url}) => {
  return (
    <div className='card'>
      <img src={url} key={id} />
      <p key={id}>{title}</p>
    </div>
  );
};
