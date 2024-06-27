import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import img from '../Images/wallpaper2.jpg';

const ShowCosmetic = () => {
  const [cosmetic, setCosmetic] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/cosmetics/${id}`)
      .then((response) => {
        setCosmetic(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div className='p-4'>
        <BackButton />
        <h1 className='text-4xl my-4'>Show Cosmetic</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className='flex justify-center'>
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Id :</span>
                <span>{cosmetic._id}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Item :</span>
                <span>{cosmetic.item}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Skin Type :</span>
                <span>{cosmetic.skinType}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Price :</span>
                <span>{cosmetic.price}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Available Item :</span>
                <span>{cosmetic.availableItem}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Create Time :</span>
                <span>{new Date(cosmetic.createdAt).toString()}</span>
              </div>
              <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                <span>{new Date(cosmetic.updatedAt).toString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCosmetic;