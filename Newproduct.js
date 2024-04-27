import React, { useState } from 'react';
import { IoIosCloudUpload } from "react-icons/io";
import { ImagetoBase64 } from '../utility/ImagetoBase64';

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const uploadImage = async (e) => {
    const imageData = await ImagetoBase64(e.target.files[0]);
    console.log(imageData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using the 'data' state
    console.log('Form submitted:', data);
  };



  return (
    <div className="p-5">
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} />

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handleOnChange}>
          <option>Fruits</option>
          <option>Vegetable</option>
          <option>Milk</option>
          <option>Panneer</option>
          <option>Dairy Products</option>
        </select>

        <label htmlFor='image'>Image
          <div className='h-40 w-full bg-slate-200 rounded rounded flex items-center justify-center cursor-pointer'>
            <span className='text-5xl'><IoIosCloudUpload /></span>
            <img src={""} />
            <input type={"file"} id="image" onChange={uploadImage} className="hidden" />
          </div>
        </label>


        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1 my-1' name='price' onChange={handleOnChange} />

        <label htmlFor='description'>Description</label>
        <textarea rows={2} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={handleOnChange}></textarea>
        <button className='bg-blue-200 hover:bg-blue-500 text-black-900 text-lg font-blod my-2 '>Save</button>
      </form>
    </div>
  )
}

export default Newproduct