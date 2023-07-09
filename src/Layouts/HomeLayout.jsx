import Navbar from "../components/Navbar";

// eslint-disable-next-line react/prop-types
export default function DefaultLayout({ className, children }) {
  return (
    <div className={`bg-bgdark text-white height:100% px-5 py-14 ${className}`}>
      {children}
      <Navbar />
    </div>
  );
}