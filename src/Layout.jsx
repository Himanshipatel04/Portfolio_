import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";

const Layout = () => {
  return (
    <div className="">
      <Header />
      {/* Page content */}
      <main className="pt-32 mx-auto w-[95%] md:w-[80%] lg:w-[70%]  max-w-6xl min-h-screen">
        <Outlet />
      
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
