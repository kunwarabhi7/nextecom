import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="sticky  top-0 z-50 bg-white px-4 py-4 flex justify-between items-center shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/">My Ecom</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>

          <Link href="/products">Product</Link>

          <Link href="/checkout">CheckOut</Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
