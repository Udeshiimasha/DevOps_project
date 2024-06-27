import { AiOutlineClose } from 'react-icons/ai';
import { BiDollarCircle } from "react-icons/bi";
import { BiSolidCheckCircle } from "react-icons/bi";
import { BiUserCircle } from 'react-icons/bi';


const CosmeticModal = ({ cosmetic, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {cosmetic.item}
        </h2>
        <h4 className='my-2 text-gray-500'>{cosmetic._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <BiDollarCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{cosmetic.price}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{cosmetic.skinType}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiSolidCheckCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{cosmetic.availableItem}</h2>
        </div>
        <p className='mt-4'>ABOUT US</p>
        <p className='my-2'>
       
        Herblin offers the purest extracts with modern 
formulas.

Herblin is the essence of natural care refined by 
Ayurvedic practices.

Herblin is a multi-level marketing organization 
that sells Ayurvedic products directly to 
consumers.

It was created in 2018 and registered as an 
Ayurvedic products manufacturing organization 
with the Sri Lankan Department of Ayurveda in 
2020.


Using conventional, antiquated herbal 
formulations, we develop herbal cosmetics, 
skincare, and hair care products.

||
Address :113/5 F BorellA road , Pannipitiya. 

        </p>
      </div>
    </div>
  );
};

export default CosmeticModal;