import { Link } from 'react-router-dom';
import { BiDollarCircle } from "react-icons/bi";
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { BiSolidCheckCircle } from "react-icons/bi";
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import CosmeticModal from './CosmeticModal';

const CosmeticSingleCard = ({cosmetic}) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div
        className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-400 rounded-lg'>
                {cosmetic.item}
            </h2>
            <h4 className='my-2 text-gray-500'>
                {cosmetic._id}
            </h4>
            <div className='flex justify-start items-center gap-x-2'>
                <BiDollarCircle className='text-red-400 text-2xl'/>
                <h2 className='my-1'>
                    {cosmetic.price}
                </h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-400 text-2xl'/>
                <h2 className='my-1'>
                    {cosmetic.skinType}
                </h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiSolidCheckCircle className='text-red-400 text-2xl'/>
                <h2 className='my-1'>
                    {cosmetic.availableItem}
                </h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
            <BiShow
                className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                onClick={() => setShowModal(true)}
            />
                <Link to= {`/cosmetics/details/${cosmetic._id}`}>
                    <BsInfoCircle className='text-2xl text-green-700 hover:text-black'/>
                </Link>
                <Link to= {`/cosmetics/edit/${cosmetic._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black'/>
                </Link>
                <Link to= {`/cosmetics/delete/${cosmetic._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-700 hover:text-black'/>
                </Link>

            </div>
            {showModal && (
        <CosmeticModal cosmetic={cosmetic} onClose={() => setShowModal(false)} />
      )}
        </div>
  );
};

export default CosmeticSingleCard;