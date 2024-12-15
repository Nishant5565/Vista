import { useGSAP } from '@gsap/react';
import ReactLenis, { useLenis } from '@studio-freight/react-lenis'
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./LandingPage.css";
import { Link } from 'react-router-dom';

function LandingPage() {
  const cursorRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useGSAP(() => {
    const updateCursor = () => {
      gsap.to(cursorRef.current, {
        x: mouseX.current,
        y: mouseY.current,
        ease: "power2.out", 
        duration: 0.5, 
      });
    };

    const handleMouseMove = (e) => {
      mouseX.current = e.clientX + window.scrollX;
      mouseY.current = e.clientY + window.scrollY;
      updateCursor();
    };

    const handleMouseEnterHome = () => {
      gsap.to(cursorRef.current, {
        scale: 2,
        ease: "elastic.out(2, 0.5)",
        duration: 0.5,
        display: "flex",
      });
    };
    // ...existing code...

    const handleMouseLeaveHome = () => {
      gsap.to(cursorRef.current, {
        scale: 0,
        display: "none",
        ease: "elastic.out(2, 0.5)",
        duration: 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    const homeSection = document.querySelector('.home');
    homeSection.addEventListener("mouseenter", handleMouseEnterHome);
    homeSection.addEventListener("mouseleave", handleMouseLeaveHome);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      homeSection.removeEventListener("mouseenter", handleMouseEnterHome);
      homeSection.removeEventListener("mouseleave", handleMouseLeaveHome);
    };
  }, {scope: 'home'});

  const lenis = useLenis(({ scroll }) => {
  })
  
  return (
    <ReactLenis root >
      <div
        className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-50 text-gray-800 flex flex-col"
        style={{ position: "relative" }}
      > 
        <div
          className="w-7 h-7 text-center bg-transparent cursor rounded-full absolute z-50 pointer-events-none text-[5px] flex items-center justify-center"
          ref={cursorRef}
        >
          <p>Costa Rica</p>
        </div>
        <main className="flex-grow">
          <section
            id="home"
            className="bg-cover bg-center relative h-screen bg-fixed cursor-pointer home rounded-[20px] overflow-hidden"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1675750318017-3d74ea862255?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="relative z-10 bg-[#00000029] h-screen w-full justify-center items-center flex flex-col text-center">
              <h2 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg animate-fade-in">
                Explore the World with VISTA
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200 opacity-90 animate-fade-in delay-200">
                Your adventure starts here. Discover new places and experience unforgettable moments.
              </p>
              <Link to='/packages' className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 translate-y-20 duration-500">
                Explore Packages
              </Link>
            </div>
          </section>

    <section id="about" className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-[20px] overflow-hidden text-gray-800">
    <div className=" rounded-[10px]  mx-auto bg-gradient-to-b from-gray-50 to-white overflow-hidden shadow-xl">

  <h2 className="text-5xl font-extrabold text-gray-800 mb-16 text-center pt-10">
    About Us
  </h2>
  <div className="bg-cover bg-center items-center justify-center relative h-screen flex bg-fixed rounded-[20px] overflow-hidden"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1675750318017-3d74ea862255?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
  >
    <div className='bg-[black] bg-opacity-40 h-screen flex items-center justify-center p-10 rounded-lg'>
    <div className="lg:w-1/2 text- leading-relaxed text-white space-y-6">
      <p>
        Welcome to <span className=" playwrite">Vista</span>, where dreams meet destinations. 
        We specialize in curating unforgettable travel experiences tailored to your unique desires.
      </p>
      <p>
        Our passion for travel drives us to craft seamless journeys that combine comfort, adventure, and cultural exploration. 
        From serene getaways to vibrant city adventures, we bring your travel aspirations to life.
      </p>
      <p>
        With a commitment to excellence and years of expertise, Vista Travel Agency is your trusted partner in discovering the world. 
        Start your next adventure with us and create memories that will last a lifetime.
      </p>
    </div>
    </div>

  </div>
</div>

      </section>


          <section id="services" className="py-20 text-center bg-white">
            <h2 className="text-4xl font-bold mb-6 text-black">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
              {[
                {
                  title: "Flight Bookings",
                  img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Hotel Reservations",
                  img: "https://images.unsplash.com/photo-1567552379232-c32f3d41d353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Tour Packages",
                  img: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Travel Insurance",
                  img: "https://plus.unsplash.com/premium_photo-1661604351507-8ef091e6c93c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="rounded-t-lg w-full h-40 object-cover"
                  />
                  <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </ReactLenis>
  );
}

export default LandingPage;
