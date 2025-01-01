import React from 'react';

const OffersCard = ({image,title,code}) => {
  return (
    <div className="relative max-w-80 h-full rounded-xl bg-white p-3 drop-shadow-xl border border-gray-200">
      <div className="flex flex-col items-center text-center h-full">
        <div className='w-full flex justify-center items-center mt-3'>
            <img src={image} alt="" />
        </div>
        <div className='flex flex-col gap-14'>
            <div className="mt-4 mb-2">
            <h2 className="text-xl font-semibold text-gray-700">
                {title}
            </h2>
            </div>
            <div className="text-sm text-gray-500 flex justify-end">
            Use Code {code}
            </div>
        </div>
      </div>
    </div>
  );
};

export default OffersCard;