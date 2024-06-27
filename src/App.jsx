import React from 'react';

function App() {
  return (
    <>
      <div className="bg-slate-900 text-white px-4 py-4 shadow-xl rounded-2xl w-11/12 md:w-3/4 lg:w-1/2 mx-auto my-3">
        <div className="flex flex-col md:flex-row justify-between gap-y-4 gap-x-8">
          <div className="ml-5 font-mono text-center md:text-left">Amogh Nadkarni</div>
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-8 mr-5">
            <a href="https://drive.google.com/file/d/1kjMQyHWMdB6npuADMdN4wJwXfqI9HwKm/view?usp=sharing" target="_blank">Resume</a>
            <a href="mailto:amoghvnadkarni001@gmail.com">Contact Me</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
