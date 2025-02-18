import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-[url('/images/hero.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Crafted with Passion
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-2">
            Organic, Stone-Ground, & Delicious.
          </p>
          <Link to={`/products`}>
            <button className="mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Our Philosophy</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We believe in transparency, sustainability, and bold flavors. Our
          Bites are made with unroasted cocoa to preserve the rich, authentic
          taste of nature.
        </p>
      </section>

      {/* Product Grid */}
      <section className="px-4 md:px-12 py-10 w-full">
        <h2 className="text-3xl font-bold text-center">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 w-full">
          <div className="shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-semibold mt-2">Blush Almond</h3>
            <p className="text-gray-600">BHD 6</p>
          </div>
          <div className="shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-semibold mt-2">Snow Almond</h3>
            <p className="text-gray-600">BHD 6</p>
          </div>
          <div className="shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-semibold mt-2">AlmonDusk</h3>
            <p className="text-gray-600">BHD 5</p>
          </div>
        </div>
      </section>

      {/* Social Media Showcase */}
      <div className="bg-gray-900 text-white py-12 px-6 text-center w-full">
        <h2 className="text-3xl font-bold">Follow Us on Social Media</h2>
        <p className="mt-2 text-gray-300">
          Get the latest updates, behind-the-scenes, and exclusive offers.
        </p>

        {/* Small Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mt-6">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/schocobites"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src="src/assets/instagram.png"
              alt="Instagram Logo"
              className="w-16 h-16"
            />
            <span className="text-white text-sm mt-2">Instagram</span>
          </a>

          {/* TikTok Icon */}
          <a
            href="https://www.tiktok.com/@schocobites"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src="src/assets/tik-tok.png"
              alt="TikTok Logo"
              className="w-16 h-16"
            />
            <span className="text-white text-sm mt-2">TikTok</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
