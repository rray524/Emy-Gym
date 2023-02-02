import React, { Suspense, useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

const Navbar = React.lazy(() => import("@/components/navbar"));
const Home = React.lazy(() => import("@/components/home/Home"));
const Benefits = React.lazy(() => import("@/components/benefits/Benefits"));
const OurClasses = React.lazy(() => import("@/components/ourClasses"));
const ContactUs = React.lazy(() => import("@/components/contactus"));
const Footer = React.lazy(() => import("@/components/footer"));

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // menu bar bottom border function

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App bg-gray-20">
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        }
      >
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}
        />

        <Home setSelectedPage={setSelectedPage} />

        <Benefits setSelectedPage={setSelectedPage} />

        <OurClasses setSelectedPage={setSelectedPage} />

        <ContactUs setSelectedPage={setSelectedPage} />

        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
