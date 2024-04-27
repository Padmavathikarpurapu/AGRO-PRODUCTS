import React from 'react';
import appleImage from '../Pictures_for_project/apples.jpg'; 
import mangoImage from '../Pictures_for_project/mango.jpg'; 
import kiwiImage from '../Pictures_for_project/kiwi.jpg'; 
import orangesImage from '../Pictures_for_project/oranges.jpg'; 
import strawberryImage from '../Pictures_for_project/strawberry.jpg';
import grapesImage from '../Pictures_for_project/grapes.jpg';
import blueberryImage from '../Pictures_for_project/blueberry.jpg';
import './fruits.css'; // Import the external CSS file

const Fruits = () => {
    return (
        <div className="fruits-container">
            <p className="fruits-text">𝐅𝐫𝐮𝐢𝐭𝐬 𝐏𝐚𝐠𝐞</p>
            <div className="fruits-item">
                <img src={appleImage} alt="Apple" className="fruits-image" />
                <div className="fruits-details">
                    <p>Name: Apple</p>
                    <p>Quantity: 10 dozens</p>
                    <p>Price: 100 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>
            <div className='fruits-item'>
                <img src={kiwiImage} alt='Kiwi' className='fruits-image' />
                <div className="fruits-details">
                    <p>Name: Kiwi</p>
                    <p>Quantity: 10 dozens</p>
                    <p>Price: 350 rs per dozen</p>
                    <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
        <div className='fruits-item'>
                <img src={strawberryImage} alt='Strawberry' className='fruits-image' />
                <div className="fruits-details">
                    <p>Name: Strawberry</p>
                    <p>Quantity: 10 dozens</p>
                    <p>Price: 350 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
        <div className='fruits-item'>
                <img src={grapesImage} alt='Grapes' className='fruits-image' />
                <div className="fruits-details">
                    <p>Name: Grapes</p>
                    <p>Quantity: 10 dozens</p>
                    <p>Price: 350 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
        <div className='fruits-item'>
                <img src={blueberryImage} alt='Blueberry' className='fruits-image' />
                <div className="fruits-details">
                    <p>Name: Blueberry</p>
                    <p>Quantity: 10 dozens</p>
                    <p>Price: 350 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
        <div className='fruits-item'>
                <img src={orangesImage} alt='Oranges' className='fruits-image' />
                <div className="fruits-details">
                    <p>Name: Oranges</p>
                    <p>Quantity: 10 dozens</p>
                    <p>Price: 450 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
                
            <div className="fruits-item">
                <img src={mangoImage} alt="Mango" className="fruits-image" />
                <div className="fruits-details">
                    <p>Name: Mango</p>
                    <p>Quantity: 10 dozens</p>
                    <p>Price: 550 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );  
};

export default Fruits;
