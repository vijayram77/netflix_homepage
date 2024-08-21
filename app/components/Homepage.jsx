import React from 'react';

const Homepage = () => {
  return (
    <div className='Homepage w-full h-screen bg-zinc-800 bg-[url("./assets/netflixbg.jpeg")]'>
      <div className='w-full h-screen bg-zinc-950/60 absolute'></div>
      <div className='relative z-[9999] w-full flex justify-between items-center px-[5vw] py-6'>
       <div className='w-[100px] '>
       <svg 
          viewBox="0 0 111 30" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true" 
          role="img" 
          className="default-ltr-cache-1d568uk ev1dnif2"
          fill="#E50914"
        >
          <g>
            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,0 L99.5313525,0 L102.593495,7.87421502 L105.874965,0 L110.999156,0 L105.06233,14.2806261 Z M90.4686475,0 L85.8749649,0 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,0 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,0 L73.9366389,0 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,0 L66.3436123,0 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,0 L50.2183897,0 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,0 L32.7809542,0 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,0 L4.4690224,0 L10.562377,17.0315868 L10.562377,0 L15.2497891,0 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
          </g>
        </svg>
       </div>
       <div className='flex items-center gap-4'>
        <select name="" id="" className='px-3 py-1 w-[70px] bg-transparent rounded text-white border border-zinc-200'>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
        </select>
        <button className='px-2 whitespace-nowrap py-1 bg-red-600 text-white font-semibold rounded'>Sign In</button>
       </div>
      </div>
      <div className=' hero relative z-[9999] py-[25vh] flex flex-col items-center justify-center  gap-4 flex-wrap px-8 text-center '>
        <h1 className='text-white font-bold text-[4.3vmax] tracking-tight '>Unlimited movies, TV shows and more</h1>
        <p  className='text-zinc-100 text-[24px] tracking-tight '>Ready to watch? Enter your email to create or restart your membership.</p>
        <p  className='text-zinc-100 text-[24px] tracking-tight '>Watch anywhere. Cancel anytime.</p>
        <div className='flex gap-2 flex-wrap justify-center '>
            <input type="text" placeholder='Email Address' className='py-2 w-[280px] px-4 bg-[#202020] text-white border rounded border-zinc-500 ' />
            <button className='px-3 py-2 bg-red-600 text-white font-semibold rounded text-[24px] '>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;