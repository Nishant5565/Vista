import { useGSAP } from '@gsap/react';
import ReactLenis, { useLenis } from '@studio-freight/react-lenis'
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./LandingPage.css";

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
          className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-50 text-gray-800 flex flex-col "
          style={{ position: "relative" }}
        > 
            <div
        className="w-7 h-7 text-center bg-transparent cursor rounded-full absolute z-50 pointer-events-none text-[5px] flex items-center justify-center"
        ref={cursorRef}
      >
       <p>
       Costa Rica
       </p>
      </div>
        <main className="flex-grow">
          <section
            id="home"
            className="flex flex-col items-center justify-center text-center py-20 bg-cover bg-center relative h-screen bg-fixed cursor-pointer home"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1675750318017-3d74ea862255?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute inset-0 rounded-xl"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg animate-fade-in">
                Explore the World with VISTA
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200 opacity-90 animate-fade-in delay-200">
                Your adventure starts here. Discover new places and experience unforgettable moments.
              </p>
              <button className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 translate-y-20 duration-500">
                Book Now
              </button>
            </div>
          </section>
          <section id="about" className="py-20 text-center bg-gradient-to-b from-gray-50 to-gray-100">
            <h2 className="text-4xl font-bold mb-6 text-teal-500">About Us</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
              Vista Travel Agency is dedicated to providing the best travel experiences. We offer personalized travel
              packages to suit your needs and ensure unforgettable journeys for all our clients.
            </p>
          </section>

          <section id="services" className="py-20 text-center bg-white">
            <h2 className="text-4xl font-bold mb-6 text-green-600">Our Services</h2>
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
                  <h3 className="text-xl font-bold text-teal-500 mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Us Section */}
          <section id="contact" className="py-20 text-center bg-gradient-to-t from-gray-100 to-white">
            <h2 className="text-4xl font-bold mb-6 text-green-600">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-2">Email: info@vistatravelagency.com</p>
            <p className="text-lg text-gray-600">Phone: +123 456 7890</p>
            <div className="mt-6">
              <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                Send Message
              </button>
            </div>
          </section>
          <footer className="bg-gray-100 p-6 text-center text-gray-500">
          <p>&copy; 2023 Vista Travel Agency. All rights reserved.</p>
        </footer>
        </main>
      </div>
    </ReactLenis>
  );
}

export default LandingPage;
