import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid';

const TombolIconRounded = ({ title, description }) => {
  return (
    <a href="#" className="styleTombolIconRounded flex items-center min-h-min px-4 py-4 rounded-2xl bg-slate-100 border border-slate-100 hover:bg-indigo-600 hover:border-opacity-0 hover:text-white transition-all duration-180 relative ">
     
      <div className="boxIcon flex-shrink-0 p-3 bg-white border border-gray-200 rounded-full mr-4">
        <BoltIcon className="w-4 h-4 text-blue-800" />
      </div>
      <div>
        <h6 className="text-sm font-semibold text-zinc-950">{title}</h6>
        <p className="text-xs text-zinc-500">{description}</p>
      </div>
    </a>
  );
};

export default TombolIconRounded;
