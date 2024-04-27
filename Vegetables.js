import React from 'react';
import brinjalImage from '../Pictures_for_project/brinjal.jpg'; 
import spinachImage from '../Pictures_for_project/spinach.jpg'; 
import broccoliImage from '../Pictures_for_project/broccoli.jpg'; 
import carrotsImage from '../Pictures_for_project/carrots.jpg'; 
import cornImage from '../Pictures_for_project/corn.jpg'; 
import corrianderImage from '../Pictures_for_project/corriander.jpg'; 
import './Vegetables.css'; // Import the external CSS file

const Vegetables = () => {
    return (
        <div className="Vegetables-container">
            <p className="Vegetables-text">Vegetables Page</p>
            <div className="Vegetables-item">
                <img src={brinjalImage} alt="Brinjal" className="Vegetables-image" />
                <div className="Vegetables-details">
                    <p>Name: Brinjal</p>
                    <p>Quantity: 10 kgs</p>
                    <p>Price: 100 rs per kgs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>
            <div className='vegetables-item'>
                <img src={spinachImage} alt='Spinach' className='vegetables-image' />
                <div className="vegetables-details">
                    <p>Name: Spinach</p>
                    <p>Quantity: 10 </p>
                    <p>Price: 100 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
        <div className='vegetables-item'>
                <img src={carrotsImage} alt='Carrots' className='vegetables-image' />
                <div className="vegetables-details">
                    <p>Name: Carrots</p>
                    <p>Quantity: 10 </p>
                    <p>Price: 100 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
        <div className='vegetables-item'>
                <img src={cornImage} alt='Corn' className='vegetables-image' />
                <div className="vegetables-details">
                    <p>Name: Corn</p>
                    <p>Quantity: 10 </p>
                    <p>Price: 100 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
        <div className='vegetables-item'>
                <img src={corrianderImage} alt='Corriander' className='vegetables-image' />
                <div className="vegetables-details">
                    <p>Name: Corriander</p>
                    <p>Quantity: 10 </p>
                    <p>Price: 100 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
        <div className='vegetables-item'>
                <img src={broccoliImage} alt='Broccoli' className='vegetables-image' />
                <div className="vegetables-details">
                    <p>Name: Broccoli</p>
                    <p>Quantity: 10 </p>
                    <p>Price: 100 rs</p>
                    <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
            </div>
            
    );  
};

export default Vegetables;
