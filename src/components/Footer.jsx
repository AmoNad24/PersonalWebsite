import React from 'react';

export default function Footer() {
  return (
    <>
      <div className='flex flex-col sm:flex-row mb-0 w-full h-36 bg-slate-900 text-white justify-around items-center'>
        <a href='https://www.linkedin.com/in/amogh-nadkarni-ab67482a9/' target='_blank' className='text-xl mt-3'>
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        <a href='https://github.com/AmoNad24' target='_blank' className='text-xl mt-3'>
          <i className="fa-brands fa-github"></i> Github
        </a>
        <a href='https://www.instagram.com/nadkarni_amogh/' target='_blank' className='text-xl mt-3'>
          <i className="fa-brands fa-instagram"></i> Instagram
        </a>
      </div>
    </>
  );
}
