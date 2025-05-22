import React from 'react'

function Japan() {
  return (
     <div
      className="bg-[url('src/assets/Japan.png')] bg-cover bg-center text-white"
      style={{ height: '100vh' }}
    >
      <div className="flex flex-col justify-center gap-6 lg:gap-10 text-center font-extralight items-center backdrop-brightness-40 h-full px-4 ">
        <h1 className="text-bold lg:text-8xl mt-40">
           أراشيياما – اليابان 🇯🇵
          </h1>
        <p className="text-sm lg:text-lg max-w-2xl">
غابة خيزران هادئة في كيوتو، اليابان
        </p>
         <p className="text-sm lg:text-lg max-w-2xl">
"في أراشيياما، حتى الريح تمشي بهدوء"
         </p>
       
      </div>
    </div>
  )
}

export default Japan