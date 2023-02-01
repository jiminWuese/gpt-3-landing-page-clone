import React from 'react';
import './header.scss';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's build someting amazing 
        with GPT-3 OpenAI</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book. It has 
          survived not only five centuries, but also the leap 
          into electronic typesetting, r</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your email address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content_peaple'>
          <img src={people} alt="People" />
          <p>1600 people, requested access in the last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="AI" />
        </div>
    </div>
  )
}

export default Header;