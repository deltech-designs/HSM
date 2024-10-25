export default function Navbar() {
  return (
    <header className="flex justify-between p-5 bg-black text-white">
      <img src="/logo.png" alt="Logo" className="h-8" />
      <nav className="flex gap-4">
        <a href="/">Places to stay</a>
        <a href="/">Experiences</a>
        <a href="/">Online Experiences</a>
      </nav>
      <button className="bg-red-500 px-3 py-1 rounded">Become a Host</button>
    </header>
  );
}
