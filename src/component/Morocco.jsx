import React from 'react'

function Morocco() {
  return (
        <div
      className="bg-[url('src/assets/Morocco.png')] bg-cover bg-center text-white"
      style={{ height: '100vh' }}
    >
      <div className="flex flex-col justify-center gap-6 lg:gap-10 text-center font-extralight items-center backdrop-brightness-40 h-full px-4 ">
        <h1 className="text-bold lg:text-8xl mt-40">
           المغرب | Morocco – شفشاون  🇲🇦
          </h1>
        <p className="text-sm lg:text-lg max-w-2xl">
مدينة الأزرق الصافي والهدوء الداخلي
        </p>
         <p className="text-sm lg:text-lg max-w-2xl">

         "في شفشاون، الأزرق لا يهدّئ العين فقط، بل يطمئن القلب"
         </p>
       
      </div>
    </div>
  )
}

export default Morocco