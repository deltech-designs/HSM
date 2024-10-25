export default function ExperienceSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
      <div className="relative p-8 rounded-lg text-white">
        <img
          src="../assets/home.png"
          alt="Things to do at home"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="relative p-8 rounded-lg text-white">
        <img
          src="../assets/trip.png"
          alt="Things to do on your trip"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
