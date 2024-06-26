import React from 'react'
import photo from '../assets/Amogh-ProfPic-modified.png';

export default function Content() {
  return (
    <>
    <div className='h-screen w-screen'>

    <div className='flex justify-center gap-3 text-black  my-24 mx-auto '>
      <img src={photo} alt='profpic' className='h-72 w-72'/>
      <div className=' h-72- w-72 '>
<br/>
      <h1 className='font-bold	text-3xl'>Amogh Nadkarni</h1>
    <h2 className='font-semibold	'>A bit about me</h2>
    <p>As a dedicated Information Science and Engineering student at BMS College of Engineering, I embody
a spirit of quick learning and excel as a team player. I aspire to be a web developer and am eager to
contribute innovative solutions and embracing challenges.</p>
</div>
    </div>

    </div>
    </>
  )
}
