import React from 'react';

const Card = ({ user }) => {
  return (
    <div className='card flex-1'>
      <p>{user.title}</p>
      <div className='flex-between gap-4'>
        <img src={user.img} alt={user.name} />
        <div>
          <h5>{user.name}</h5>
          <span>{user.job}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
