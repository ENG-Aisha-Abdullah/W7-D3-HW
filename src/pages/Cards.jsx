import React from 'react'
import { Link } from "react-router"

function Cards() {
  const cards = [
    { to: "/Ola", name: "العلا" },
    { to: "/Japan", name: "اليابان" },
    { to: "/Iceland", name: "آيسلندا" },
    { to: "/Morocco", name: "المغرب" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 bg-blue-50 py-10">
      {cards.map((card) => (
        <Link
          key={card.to}
          to={card.to}
          className="relative w-50 rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform"
        >
          <div className="w-50 h-24 rounded-lg shadow-md flex items-center justify-center font-semibold text-black hover:bg-gray-100 transition">
            {card.name}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cards