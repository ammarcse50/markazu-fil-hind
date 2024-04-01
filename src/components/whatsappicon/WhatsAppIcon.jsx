import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
const WhatsAppIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the footer is visible in the viewport
      const footer = document.querySelector("footer");
      const footerBounds = footer.getBoundingClientRect();
      setIsVisible(
        footerBounds.top >= 0 && footerBounds.bottom <= window.innerHeight
      );
    };
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 bottom-0 md:mb-96 m-4 z-50 text-white font-bold flex  items-center hover:text-xl animate-[bounce_1s_ease-in-out_infinite]  ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <h2>Contact Us!</h2>
      <a
        href="https://api.whatsapp.com/send?phone=919954460622"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:bg-green-600  text-white rounded-full p-2 shadow-md"
      >
        <FaWhatsapp size="50px" className="bg-green-500 rounded-lg " />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
