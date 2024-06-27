import { Link } from 'react-router-dom';
import { BiDollarCircle } from "react-icons/bi";
import { BiUserCircle } from 'react-icons/bi';
import { BiSolidCheckCircle } from "react-icons/bi";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import CosmeticSingleCard from './CosmeticSingleCard';

const CosmeticsCard = ({cosmetics}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {cosmetics.map((item) => (
        <CosmeticSingleCard key={item._id} cosmetic={item}/>        
      ))}
    </div>
  );
};

export default CosmeticsCard;