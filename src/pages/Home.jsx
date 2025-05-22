import React from 'react'

function Home() {
  return (


 <div
      className="bg-[url('./src/assets/DesertSand.png')] bg-cover bg-center text-white"
      style={{ height: '100vh' }}
    >
      <div className="flex flex-col justify-center gap-6 lg:gap-10 text-center font-extralight items-center backdrop-brightness-40 h-full px-4 ">
        <h1 className="text-bold lg:text-8xl mt-40">Inesparation – أماكن من العالم</h1>
        <p className="text-sm lg:text-lg max-w-2xl">
        أماكن تلهمك بجمالها، تهدّئك بسكونها، وتوقظ فيك رغبة الاكتشاف
في كل صورة، حكاية… وفي كل مكان، شعور ينتظر أن يُلمس
        </p>
       
      </div>
    </div>

  )
}

export default Home