import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="px-3 py-2 flex items-center justify-between w-full fixed top-0 left-0 right-0 z-10 bg-background">
      <Logo />
    </div>
  );
};

export default Navbar;
