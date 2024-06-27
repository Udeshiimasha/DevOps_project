import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const CosmeticsTable = ({cosmetics}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Item</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Skin Type</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Price</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Available Item</th>
              <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {cosmetics.map((cosmetic, index) => (
              <tr key={cosmetics._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {cosmetic.item}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {cosmetic.skinType}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {cosmetic.price}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {cosmetic.availableItem}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/cosmetics/details/${cosmetic._id}`}>
                      <BsInfoCircle className='text-2xl text-green-600'/>
                    </Link>
                    <Link to={`/cosmetics/edit/${cosmetic._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600'/>
                    </Link>
                    <Link to={`/cosmetics/delete/${cosmetic._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-700'/>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  );
};

export default CosmeticsTable;