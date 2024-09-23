const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold"> Flower Shop</a>
        <div>
          <a href="/" className="mx-4 hover:underline">Home</a>
          <a href="/about" className="mx-4 hover:underline">About</a>
          <a href="/contact" className="mx-4 hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
