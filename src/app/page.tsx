const flowers = [
  {
    id: 1,
    name: 'Rose',
    price: '$10',
    description: 'Elegant and timeless, perfect for any occasion.',
    image: '/images/flower1.jpg'
  },
  {
    id: 2,
    name: 'Tulip',
    price: '$12',
    description: 'Bright and cheerful, ideal for spring celebrations.',
    image: '/images/flower2.jpg'
  },
  {
    id: 3,
    name: 'Orchid',
    price: '$20',
    description: 'Exotic and graceful, a unique gift choice.',
    image: '/images/flower3.jpg'
  },
  {
    id: 4,
    name: 'Lily',
    price: '$15',
    description: 'Beautiful and fragrant, a symbol of purity.',
    image: '/images/flower4.jpg'
  },
  {
    id: 5,
    name: 'Sunflower',
    price: '$8',
    description: 'Bold and sunny, perfect for brightening any room.',
    image: '/images/flower5.jpg'
  },
  {
    id: 6,
    name: 'Daisy',
    price: '$7',
    description: 'Simple and charming, a lovely gift for friends.',
    image: '/images/flower6.jpg'
  },
];

import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-5xl font-bold text-green-600 mb-6">
        Welcome to Elhamy Online Flower Shop
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Discover our collection of beautiful flowers and find the perfect one for every occasion.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {flowers.map(flower => (
          <div key={flower.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src={flower.image}
              alt={flower.name}
              className="w-full h-48 object-cover"
              width={500}
              height={192} // Based on the aspect ratio
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-600">{flower.name}</h2>
              <p className="text-xl text-gray-800">{flower.price}</p>
              <p className="text-gray-600 mt-2">{flower.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
