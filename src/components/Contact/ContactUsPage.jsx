import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
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
    <div className="w-full  mx-auto">
      <Helmet>
        <title>markazo | ContactUs</title>
      </Helmet>
      <h2 className=" text-white text-2xl text-center font-semibold ">
    
        <span className="bg-orange-500 rounded p-3"> CONTACT US  <br /> <br />কোন মতামত থাকলে মেসেজ করুন।</span>
      </h2>

      <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto mt-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="আপনার নাম লিখুন!"
            value={formData.name}
            onChange={handleChange}
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="আপনার ইমেইল দিন!"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="border-2 p-2 border-sky-200"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <br />
        <div className="text-center">
          <button
            onClick={notify}
            type="submit"
            className="btn w-1/3 text-white bg-green-500"
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
