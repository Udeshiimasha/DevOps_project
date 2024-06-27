import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import CosmeticsTable from '../components/home/CosmeticsTable';
import CosmeticsCard from '../components/home/CosmeticsCard';
import css from "./Home.module.css";

const Home = () => {
  const [cosmetics, setCosmetics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/cosmetics')
      .then((response) => {
        setCosmetics(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className={css.bg}>
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
      <button
          className='bg-pink-400 hover:bg-pink-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button> 
        <button
          className='bg-pink-400 hover:bg-pink-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'><strong>Herblin Cosmetics Store</strong></h1>

        <Link to='/cosmetics/create'>
          <MdOutlineAddBox className='text-pink-700 text-4xl'/>
        </Link>
      </div>
         
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <CosmeticsTable cosmetics={cosmetics} />
      ) : (
        <CosmeticsCard cosmetics={cosmetics} />
      )}
        
    </div></div>
  );
};

export default Home;