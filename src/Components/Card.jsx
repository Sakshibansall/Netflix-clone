function Card({ heading, text, image }) {
  return (
    <div className="w-full">
      <div
        className="h-full w-full lg:w-69 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-md
                   hover:scale-[1.02] transition-transform duration-300"
        style={{
          backgroundImage: "linear-gradient(149deg, #192247 0%, #210e17 99.08%)",
        }}
      >
        {/* Text Content */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold mb-3">
            {heading}
          </h2>
          <p className="text-zinc-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            {text}
          </p>
        </div>

        {/* Image */}
        {image && (
          <div className="flex justify-end mt-6">
            <img
              src={image}
              alt={heading}
              className="w-12 sm:w-14 md:w-16 lg:w-18 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
