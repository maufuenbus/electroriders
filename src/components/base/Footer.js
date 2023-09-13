import React from 'react'

// function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MaYu. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer