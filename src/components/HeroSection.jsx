const HeroSection = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Left-aligned Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-snug">
            {title}
          </h1>
          <p className="mt-4 text-lg md:text-xl">{subtitle}</p>

          {buttonText && (
            <form action={buttonLink}>
              <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-semibold shadow-lg">
                {buttonText}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
