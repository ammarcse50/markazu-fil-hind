import React, { useEffect, useState } from "react";
import {  toast ,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Helmet } from "react-helmet";

const Registration = () => {
  const notify = () => toast("Successfully done!");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profession: "",
    rewayat: "",
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
      rewayat: "",
    });
  };

  return (
    <>
      <h2 className="text-2xl  my-10 text-white text-center font-semibold">
       <span className=" bg-orange-500 p-2 rounded"> রেজিস্ট্রেশন করুন</span>
      </h2>

      <div className="md:flex md:px-20">
        <div className={` md:w-1/3 text-lg font-bold outline  outline-red-400 `}>
          <h3 className="text-center my-3">নোটিশ</h3>
          <ol className="list-inside list-decimal p-4 text-center">
            <li>
              যাদের রেওায়াতে হাফসের সনদ নাই তারা উচ্চক্বিরাত বা রেওায়াত পড়তে
              পারবেন না বিস্তারিত জানতে হোয়াটসঅ্যাপে যোগাযোগ করুন।
            </li>
            <li>
              ভর্তির জন্য ফরম পূরণ করা বাধ্যতামূলক যদি কোন সমস্যার সম্মুখীন হন
              তাহলে নিচে হোয়াটসঅ্যাপ আইকন এ ক্লিক করে যোগাযোগ করুন।
            </li>
            <li>
              রেজিস্ট্রেশান করার পর WhatsApp এ মেসেজ করে পেমেন্ট করে সিট নিশ্চিত
              করুন।
            </li>
            <li>রেওায়াত বিষয়ক তথ্য সরাসরি whatsapp এ যোগাযোগ করে নিন।</li>
            <li>
              যোগাযোগ করার জন্য নিচে হোয়াটসঅ্যাপ ফেসবুক আইকন রয়েছে সেখানে
              ক্লিক করুন।
            </li>
          </ol>
        </div>

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
              <span className="label-text">Phone</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="একটি ফোন নাম্বার দিন!"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="আপনার ঠিকানা দিন!"
              value={formData.address}
              onChange={handleChange}
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profession</span>
            </label>
            <input
              type="text"
              name="profession"
              placeholder="আপনি কি করেন ?"
              value={formData.profession}
              onChange={handleChange}
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rewayat</span>
            </label>
            <input
              type="type"
              name="rewayat"
              placeholder="কোন রেওায়াত পড়তে চান?"
              value={formData.rewayat}
              onChange={handleChange}
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button onClick={notify} className="btn bg-green-500">Login</button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default Registration;
