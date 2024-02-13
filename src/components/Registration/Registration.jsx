import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profession: "",
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
      const response = await fetch("https://sheetdb.io/api/v1/k2n5nnza34ld4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registration successful!");
        // You can add additional logic here for successful registration
      } else {
        console.error("Registration failed");
        // You can add additional logic here for failed registration
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      profession: "",
    });
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <h2 className="bg-orange-500 text-white text-2xl text-center font-semibold ">
        Course Registration Form
      </h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
              className="outline bg-green-500 text-white font-semibold hover:outline-dashed outline-red-400"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Email  */}
        <br />

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="outline bg-green-500 text-white font-semibold hover:outline-dashed outline-red-400"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* phone  */}
        <br />
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Phone
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="outline bg-green-500 text-white font-semibold hover:outline-dashed outline-red-400"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Address
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="outline bg-green-500 text-white font-semibold hover:outline-dashed outline-red-400"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <br />
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Profession
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="outline bg-green-500 text-white font-semibold hover:outline-dashed outline-red-400"
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <br />
        <div className="flex justify-center">
          {" "}
          <button type="submit" className="btn  text-white bg-green-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
