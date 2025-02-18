const About = () => {
  return (
    <div className="w-full bg-white text-gray-900">
      <div className="relative w-full h-[600px] bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black bg-opacity-60 p-10 rounded-lg text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold text-white">Our Journey</h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            We started with a simple yet powerful mission – to redefine
            chocolate indulgence, making every bite a moment of pure joy.
            Crafted with passion and precision, our chocolates aren’t just
            treats; they are an experience.
          </p>
        </div>
      </div>

      <section className="w-full py-20 px-8 lg:px-32 text-center bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800">
          Chocolate, But Better
        </h2>
        <p className="mt-6 text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We believe chocolate should be more than just sweet – it should be
          crafted with care, made with pure ingredients, and designed to elevate
          everyday moments. That’s why we focus on sustainable sourcing, rich
          flavors, and an artisanal touch that makes every bite unforgettable.
        </p>
      </section>

      <section className="w-full py-20 px-8 lg:px-32 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800">
          A Treat for Every Occasion
        </h2>
        <p className="mt-6 text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Whether it’s a moment of self-indulgence, a gift to someone special,
          or a shared celebration, our chocolates bring people together. With
          every creation, we aim to add a touch of luxury and joy to your life.
        </p>
      </section>

      <div className="w-full py-20 px-8 lg:px-32 text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold">Join the Experience</h2>
        <p className="mt-6 text-xl max-w-4xl mx-auto leading-relaxed">
          We invite you to explore our world of rich, flavorful, and ethically
          crafted chocolate snacks. Experience the difference, savor the
          indulgence, and make every moment sweeter with us.
        </p>
      </div>
    </div>
  )
}

export default About
