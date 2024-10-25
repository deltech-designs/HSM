export default function Hero() {
  return (
    <section className="bg-black flex justify-center items-center relative h-screen bg-cover bg-center bg-[url('/assets/big-card.png')] w-[100%]">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-5xl font-bold mb-4">
          Not sure where to go? Perfect.
        </h1>
        <button className="bg-white text-black rounded-full px-6 py-3 text-lg">
          I'm flexible
        </button>
      </div>
    </section>
  );
}
