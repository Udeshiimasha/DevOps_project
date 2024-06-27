import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import css from "./Home.module.css";
import img from '../Images/wallpaper4.jpg';
import { Background } from 'react-parallax';

const CreateCosmetics = () => {
  const [item, setItem] = useState('');
  const [skinType, setSkinType] = useState('');
  const [price, setPrice] = useState('');
  const [availableItem, setAvailableItem] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveCosmetic = () => {
    const data = {
      item,
      skinType,
      price,
      availableItem,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/cosmetics', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Cosmetic Created successfully', { variant: 'success' });
        navigate('/home');
      })
      .catch((error) => {
        setLoading(false);
        //alert('An error happened. Please Check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
    <div className='p-4'>
      <BackButton />
      <h1 className='text-4xl my-4'>Create Cosmetic</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Item</label>
          <input
            type='text'
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Skin Type</label>
          <input
            type='text'
            value={skinType}
            onChange={(e) => setSkinType(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Price</label>
          <input
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Available Item</label>
          <input
            type='number'
            value={availableItem}
            onChange={(e) => setAvailableItem(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveCosmetic}>
          Save
        </button>
      </div>
    </div>
    </div>
  );
}

export default CreateCosmetics;