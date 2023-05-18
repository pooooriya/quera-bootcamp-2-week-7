import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="p-3 min-h-screen">{children}</div>
      <Footer />
    </>
  );
};
