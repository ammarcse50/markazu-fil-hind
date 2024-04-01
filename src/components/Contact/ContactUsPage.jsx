
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {Helmet} from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppIcon from "../whatsappicon/WhatsAppIcon";

const ContactUsPage = () => {
  const notify = () => toast("Success!");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sheetdb.io/api/v1/fvu21qjpzggw8", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        // You can add additional logic here for successful submission
      } else {
        console.error("Form submission failed");
        // You can add additional logic here for failed submission
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }

    // After submission, you may want to clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full max-w-xs mx-auto">
       <Helmet><title>markazo | ContactUs</title></Helmet>
      <h2 className="bg-orange-500 text-white text-2xl text-center font-semibold ">
        CONTACT US <br />
        <span>কোন মতামত থাকলে মেসেজ করুন।</span>
      </h2>
      <form
        className="bg-white text-white font-semibold shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Message
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <br />
        <div className="flex justify-center">
          <button
            onClick={notify}
            type="submit"
            className="btn  text-white bg-green-500"
          >
            Submit
          </button>
        </div>
        <ToastContainer />
      </form>
      <WhatsAppIcon />
    </div>
  );
};

export default ContactUsPage;
