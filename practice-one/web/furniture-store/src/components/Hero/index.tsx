const Hero = () => {
  return (
    <section className="mt-12">
      <div className="lg:px-0 mb-8">
        <h2 className="text-sm mb-4 md:mb-6 md:text-lg">FURNITURE STORE</h2>
        <h3 className="px-6 text-2xl mb-4 font-semibold md:mb-6 md:text-5xl md:font-bold lg:text-6xl">
          Discover the Artistry of Modern Contemporary Furniture
        </h3>
        <p className="text-base text-center md:text-xl">
          Experience the elegance and functionality of cutting-edge design where
          luxury meets innovation in every piece for ultimate relaxation
        </p>
      </div>
      {/* <div className="w-full md:h-38">
      <Image src="https://ucarecdn.com/658288ac-40ec-43dd-893a-3c62c979259c/bannermobile.png" alt="banner" className="w-full h-full object-cover" />
    </div> */}
      <div
        className="
        w-full h-59 md:h-100 lg:h-106 bg-center bg-cover
        sm:bg-[url('https://ucarecdn.com/6b6ab92c-287c-449a-8663-28380c902884/bannertablet.png')]
        lg:bg-[url('https://ucarecdn.com/d474fba4-43b2-42d5-ace1-a804990777c5/image.png')]
        bg-[url('https://ucarecdn.com/658288ac-40ec-43dd-893a-3c62c979259c/bannermobile.png')]
      "
      />
    </section>
  );
};

export default Hero;
