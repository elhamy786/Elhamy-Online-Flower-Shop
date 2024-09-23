import Image from 'next/image';

const flowers = [
  {
    id: 1,
    name: 'Rose',
    description: `
      The rose is a perennial flowering plant known for its beauty and fragrance. 
      It's one of the most popular flowers in the world, symbolizing love, honor, faith, beauty, balance, and passion. 
      Roses come in a variety of colors, each carrying its own meaning. Red roses symbolize love and romance, while yellow roses represent friendship and joy.
    `,
    image: '/images/rose.jpg',
    details: 'Roses are best grown in fertile soil with plenty of sunlight. They are often used in perfumes and cosmetics due to their fragrance.'
  },
  {
    id: 2,
    name: 'Tulip',
    description: `
      Tulips are spring-blooming perennials that grow from bulbs. Their vibrant, cup-shaped flowers are a welcome sign of spring, 
      symbolizing perfect love and rebirth. Tulips are available in nearly every color of the rainbow, and their simple yet striking appearance makes them a favorite.
    `,
    image: '/images/tulip.jpg',
    details: 'Tulips thrive in well-drained soil and full sunlight. They bloom early in the season and are popular in gardens and floral arrangements.'
  },
  {
    id: 3,
    name: 'Orchid',
    description: `
      Orchids are exotic and delicate flowers known for their beauty and unique shapes. 
      They symbolize love, luxury, beauty, and strength. With over 25,000 species, orchids are one of the largest flower families.
    `,
    image: '/images/orchid.jpg',
    details: 'Orchids need special care, including humidity and bright, indirect light. They are often used in upscale floral displays.'
  },
  {
    id: 4,
    name: 'Lily',
    description: `
      Lilies are known for their large, fragrant blooms. They represent purity and refined beauty. 
      Lilies are often used in weddings and religious ceremonies due to their association with virtue and grace.
    `,
    image: '/images/lily.jpg',
    details: 'Lilies prefer moist, well-drained soil and full sunlight. They come in a variety of colors, including white, pink, orange, and yellow.'
  },
  {
    id: 5,
    name: 'Sunflower',
    description: `
      Sunflowers are known for their bright yellow petals and their ability to track the sun across the sky. 
      They symbolize adoration, loyalty, and longevity. Sunflowers bring warmth and cheer wherever they are placed.
    `,
    image: '/images/sunflower.jpg',
    details: 'Sunflowers thrive in full sun and well-drained soil. They are often grown for their seeds, which are used in cooking and oils.'
  },
  {
    id: 6,
    name: 'Daisy',
    description: `
      Daisies are simple yet charming flowers that symbolize innocence and new beginnings. 
      Their bright, cheerful appearance makes them popular in bouquets and gardens alike.
    `,
    image: '/images/daisy.jpg',
    details: 'Daisies are low-maintenance flowers that grow well in a variety of soils and climates, making them a favorite for gardeners.'
  }
];

const AboutPage = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-yellow-100 via-green-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-5xl font-bold text-green-700 mb-12 text-center">About Our Flowers</h2>
        
        <div className="space-y-16">
          {flowers.map(flower => (
            <div key={flower.id} className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-lg overflow-hidden">
              
              {/* Image on one side */}
              <div className="w-full md:w-1/2 h-full">
                <Image 
                  src={flower.image} 
                  alt={flower.name} 
                  width={600} 
                  height={400} 
                  className="object-cover hover:scale-105 transform transition duration-300 ease-in-out"
                />
              </div>

              {/* Flower Information */}
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-3xl font-bold text-green-600">{flower.name}</h3>
                <p className="mt-4 text-gray-700 text-lg">{flower.description}</p>
                <p className="mt-4 text-gray-600">{flower.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

