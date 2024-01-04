import logo from "../assets/icon.png";

function NavBar() {
  return (
    <nav className="flex justify-between bg-gray-600 text-white p-2 w-full z-10">
      <div className="flex gap-5 align-middle">
        <img src={logo} alt="github logo" width={"30px"} />
        <h1 className="text-xl">My GitHub Portfolio</h1>
      </div>
    </nav>
  );
}

export default NavBar;
