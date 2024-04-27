import React, { useState } from 'react';
import image1 from '../Pictures_for_project/Image1.jpg'; // Assuming image1's file extension is .jpg
import image2 from '../Pictures_for_project/image2.jpeg'; // Assuming image2's file extension is .jpeg

const ProductDetails = () => {
    const [cartCount, setCartCount] = useState(0); // State to track the count of items in the cart

    // Function to handle adding the product to the cart
    const addToCart = () => {
        setCartCount(prevCount => prevCount + 1); // Increment the count by 1 when the product is added to the cart
    };

    return (
        <div>
            {/* Display the images side by side */}
            <div style={{ display: 'flex' }}>
                {/* Display the first image with description */}
                <div style={{ marginRight: '20px' }}>
                    <img src={image1} alt="Image 1" />
                    <p>Description: Apple</p>
                    <p>Price:$9</p>
                    <center>
                        <button className="w-full max-w-[120px] m-auto bg-red-400 hover:bg-red-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-2" onClick={addToCart}>
                            Add To Cart
                        </button>
                    </center>
                </div>
                {/* Display the second image with description */}
                <div>
                    <img src={image2} alt="Image 2" />
                    <p>Description: Pear</p>
                    <p>Price:$6</p>
                    <center>
                        <button className="w-full max-w-[120px] m-auto bg-red-400 hover:bg-red-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-2" onClick={addToCart}>
                            Add To Cart
                        </button>
                    </center>
                </div>
            </div>
            <center>
                <p>Cart Count: {cartCount}</p>
            </center>
        </div>
    );
};

export default ProductDetails;
