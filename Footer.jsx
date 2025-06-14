import React from 'react'

export default function Footer({ mode, handleMode }) {
  return (
    <div>
      <div
        className={`w-full transition-all duration-300 px-6 py-10 md:px-40 md:py-20 flex flex-col md:flex-row justify-center gap-10 ${
          mode === "Dark" ? "bg-gray-800 text-white" : "bg-black text-white"
        }`}
      >
        <div className="flex-1">
          <h2 className="text-white text-3xl md:text-4xl mb-4">Contact</h2>
          <ul className="text-white space-y-3">
            <li className="hover:underline flex items-center gap-2">
              <i className="fas fa-location-dot"></i> Nepalgunj
            </li>
            <li className="hover:underline flex items-center gap-2">
              <i className="fas fa-envelope"></i> paudelchetan1112@gmail.com
            </li>
            <li className="hover:underline flex items-center gap-2">
              <i className="fas fa-phone"></i> 9868103671
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h2 className="text-white text-3xl md:text-4xl mb-4">Quick Link</h2>
          <h1 className="text-2xl md:text-3xl mb-5 text-white">Nepalgunj</h1>
          <ul className="space-y-3">
            <li className="hover:underline flex items-center gap-2 text-white">
              <i className="fas fa-arrow-right"></i> Home
            </li>
            <li className="hover:underline flex items-center gap-2 text-white">
              <i className="fas fa-arrow-right"></i> Services
            </li>
            <li className="hover:underline flex items-center gap-2 text-white">
              <i className="fas fa-arrow-right"></i> Contact
            </li>
          </ul>
        </div>

        <div className="flex-1 mx-auto md:mx-0 max-w-md">
          <h2 className="text-white text-3xl md:text-4xl mb-4">Follow us</h2>
          <div className="relative w-full" style={{ paddingBottom: "75%", height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-black"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.99978064519!2d81.61341667547953!3d28.047363575989365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998675a0969bac3%3A0xa4e5934abb9dfd25!2sBanke%20Bageshwori%20Campus!5e1!3m2!1sen!2snp!4v1749366760924!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
