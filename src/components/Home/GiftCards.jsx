export default function GiftCards() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-10">
      <div className="ml-10 mb-4 md:mb-0">
        <h3 className="text-2xl font-bold">Shop Airbnb gift cards</h3>
        <button className="bg-black text-white rounded-full px-6 py-3 mt-4">
          Learn more
        </button>
      </div>
      <img
        src="../assets/giftcards.png"
        alt="Gift Cards"
        className="w-full md:w-1/2 rounded-lg object-cover"
      />
    </section>
  );
}
