// 'use client';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import image1 from '../assets/jw1.jpeg';
// import image2 from '../assets/jw2.jpeg';
// import image3 from '../assets/jw3.jpeg';
// import image4 from '../assets/jw4.jpeg';
// import image5 from '../assets/jw5.jpeg';
// import image6 from '../assets/jw6.jpeg';
// import image7 from '../assets/jw7.jpeg';
// import image8 from '../assets/jw8.jpeg';
// import image9 from '../assets/jw9.jpeg';
// import image10 from '../assets/jw10.jpeg';
// import image11 from '../assets/jw11.jpg';
// import image12 from '../assets/jw12.jpg';
// import image13 from '../assets/jw13.jpg';
// import image14 from '../assets/jw14.jpg';
// import image15 from '../assets/jw15.jpg';
// import image16 from '../assets/jw16.jpg';

// type Product = {
//   id: number;
//   name: string;
//   brand: string;
//   price: number;
//   oldPrice?: number;
//   image: any;
//   rating: number;
//   badge?: string;
//   category: 'featured' | 'new' | 'bestseller';
// };

// const products: Product[] = [
//   { id: 1, name: 'glitter pens', brand: 'resinbym_zee', price: 500, image: image1, rating: 4, category: 'featured' },
//   { id: 2, name: 'glitter pens', brand: 'resinbym_zee', price: 260, oldPrice: 299, image: image2, rating: 5, badge: '-15%', category: 'new' },
//   { id: 3, name: 'decor piece', brand: 'resinbym_zee', price: 199, oldPrice: 240, image: image3, rating: 5, badge: '-20%', category: 'bestseller' },
//   { id: 4, name: 'decor piece', brand: 'resinbym_zee', price: 220, image: image4, rating: 4, category: 'featured' },
//   { id: 5, name: 'glitter pens', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image5, rating: 5, badge: '-10%', category: 'new' },
//   { id: 6, name: 'Frames', brand: 'resinbym_zee', price: 250, image: image6, rating: 4, category: 'featured' },
//   { id: 7, name: 'Frames', brand: 'resinbym_zee', price: 260, oldPrice: 299, image: image7, rating: 5, badge: '-15%', category: 'new' },
//   { id: 8, name: 'Key Chains', brand: 'resinbym_zee', price: 199, oldPrice: 240, image: image8, rating: 5, badge: '-20%', category: 'bestseller' },
//   { id: 9, name: 'Wall Clock', brand: 'resinbym_zee', price: 220, image: image9, rating: 4, category: 'featured' },
//   { id: 10, name: 'Wall Clock', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image10, rating: 5, badge: '-10%', category: 'new' },
//   { id: 11, name: 'alphabet molds', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image11, rating: 5, badge: '-10%', category: 'new' },
//   { id: 12, name: 'Bracelet', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image12, rating: 5, badge: '-10%', category: 'new' },
//   { id: 13, name: 'Key Chains', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image13, rating: 5, badge: '-10%', category: 'new' },
//   { id: 14, name: 'Key Chains', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image14, rating: 5, badge: '-10%', category: 'new' },
//   { id: 15, name: 'Key Chains', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image15, rating: 5, badge: '-10%', category: 'new' },
//   { id: 16, name: 'Frames', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image16, rating: 5, badge: '-10%', category: 'new' },
// ];

// export default function TrendingProducts() {
//   const [selectedTab, setSelectedTab] = useState<'all' | 'featured' | 'new' | 'bestseller'>('all');

//   const filteredProducts = selectedTab === 'all' ? products : products.filter((p) => p.category === selectedTab);

//   // Initialize AOS
//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);

//   return (
//     <section className="py-12 px-6 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-6">Trending Products</h2>

//       {/* Tabs */}
//       <div className="sm:flex justify-center space-x-8 mb-10">
//         {['all', 'featured', 'new', 'bestseller'].map((tab) => (
//           <button
//             key={tab}
//             className={`font-semibold pb-1 border-b-2 ${selectedTab === tab ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
//             onClick={() => setSelectedTab(tab as any)}
//           >
//             {tab === 'all' ? 'ALL' : tab === 'featured' ? 'FEATURED' : tab === 'new' ? 'NEW ARRIVALS' : 'BEST SELLER'}
//           </button>
//         ))}
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border p-4 rounded-md relative hover:shadow-lg transition"
//             data-aos="fade-up" // AOS animation
//           >
//             {product.badge && (
//               <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
//                 {product.badge}
//               </span>
//             )}

//             <Image
//               src={product.image}
//               alt={product.name}
//               className="w-full h-56 object-cover mb-4 rounded"
//             />

//             <div className="text-sm text-gray-500">{product.brand}</div>
//             <div className="text-md font-medium mb-1">{product.name}</div>

//             {/* Ratings */}
//             <div className="text-yellow-500 mb-1 text-sm">
//               {'★'.repeat(product.rating)}
//               {'☆'.repeat(5 - product.rating)}
//             </div>

//             {/* Prices */}
//             <div className="text-md font-bold">
//               Rs{product.price.toFixed(2)}{' '}
//               {product.oldPrice && (
//                 <span className="text-sm line-through text-gray-400 ml-2">
//                   Rs{product.oldPrice.toFixed(2)}
//                 </span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }










'use client';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData from next/image
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image1 from '../assets/jw1.jpeg';
import image2 from '../assets/jw2.jpeg';
import image3 from '../assets/jw3.jpeg';
import image4 from '../assets/jw4.jpeg';
import image5 from '../assets/jw5.jpeg';
import image6 from '../assets/jw6.jpeg';
import image7 from '../assets/jw7.jpeg';
import image8 from '../assets/jw8.jpeg';
import image9 from '../assets/jw9.jpeg';
import image10 from '../assets/jw10.jpeg';
import image11 from '../assets/jw11.jpg';
import image12 from '../assets/jw12.jpg';
import image13 from '../assets/jw13.jpg';
import image14 from '../assets/jw14.jpg';
import image15 from '../assets/jw15.jpg';
import image16 from '../assets/jw16.jpg';

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: StaticImageData | string; // Correctly type image
  rating: number;
  badge?: string;
  category: 'featured' | 'new' | 'bestseller';
};

const products: Product[] = [
  { id: 1, name: 'glitter pens', brand: 'resinbym_zee', price: 500, image: image1, rating: 4, category: 'featured' },
  { id: 2, name: 'glitter pens', brand: 'resinbym_zee', price: 260, oldPrice: 299, image: image2, rating: 5, badge: '-15%', category: 'new' },
  { id: 3, name: 'decor piece', brand: 'resinbym_zee', price: 199, oldPrice: 240, image: image3, rating: 5, badge: '-20%', category: 'bestseller' },
  { id: 4, name: 'decor piece', brand: 'resinbym_zee', price: 220, image: image4, rating: 4, category: 'featured' },
  { id: 5, name: 'glitter pens', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image5, rating: 5, badge: '-10%', category: 'new' },
  { id: 6, name: 'Frames', brand: 'resinbym_zee', price: 250, image: image6, rating: 4, category: 'featured' },
  { id: 7, name: 'Frames', brand: 'resinbym_zee', price: 260, oldPrice: 299, image: image7, rating: 5, badge: '-15%', category: 'new' },
  { id: 8, name: 'Key Chains', brand: 'resinbym_zee', price: 199, oldPrice: 240, image: image8, rating: 5, badge: '-20%', category: 'bestseller' },
  { id: 9, name: 'Wall Clock', brand: 'resinbym_zee', price: 220, image: image9, rating: 4, category: 'featured' },
  { id: 10, name: 'Wall Clock', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image10, rating: 5, badge: '-10%', category: 'new' },
  { id: 11, name: 'alphabet molds', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image11, rating: 5, badge: '-10%', category: 'new' },
  { id: 12, name: 'Bracelet', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image12, rating: 5, badge: '-10%', category: 'new' },
  { id: 13, name: 'Key Chains', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image13, rating: 5, badge: '-10%', category: 'new' },
  { id: 14, name: 'Key Chains', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image14, rating: 5, badge: '-10%', category: 'new' },
  { id: 15, name: 'Key Chains', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image15, rating: 5, badge: '-10%', category: 'new' },
  { id: 16, name: 'Frames', brand: 'resinbym_zee', price: 300, oldPrice: 350, image: image16, rating: 5, badge: '-10%', category: 'new' },
];

export default function TrendingProducts() {
  const [selectedTab, setSelectedTab] = useState<'all' | 'featured' | 'new' | 'bestseller'>('all');

  const filteredProducts = selectedTab === 'all' ? products : products.filter((p) => p.category === selectedTab);

  // Initialize AOS
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Trending Products</h2>

      {/* Tabs */}
      <div className="sm:flex justify-center space-x-8 mb-10">
        {['all', 'featured', 'new', 'bestseller'].map((tab) => (
          <button
            key={tab}
            className={`font-semibold pb-1 border-b-2 ${selectedTab === tab ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
            onClick={() => setSelectedTab(tab as 'all' | 'featured' | 'new' | 'bestseller')} // More specific typing
          >
            {tab === 'all' ? 'ALL' : tab === 'featured' ? 'FEATURED' : tab === 'new' ? 'NEW ARRIVALS' : 'BEST SELLER'}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-md relative hover:shadow-lg transition"
            data-aos="fade-up" // AOS animation
          >
            {product.badge && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </span>
            )}

            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover mb-4 rounded"
            />

            <div className="text-sm text-gray-500">{product.brand}</div>
            <div className="text-md font-medium mb-1">{product.name}</div>

            {/* Ratings */}
            <div className="text-yellow-500 mb-1 text-sm">
              {'★'.repeat(product.rating)}
              {'☆'.repeat(5 - product.rating)}
            </div>

            {/* Prices */}
            <div className="text-md font-bold">
              Rs{product.price.toFixed(2)}{' '}
              {product.oldPrice && (
                <span className="text-sm line-through text-gray-400 ml-2">
                  Rs{product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
