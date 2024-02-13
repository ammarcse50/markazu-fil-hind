import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    profession: '',
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
      const response = await fetch('https://sheetdb.io/api/v1/enx2suer2z1ee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Registration successful!');
        // You can add additional logic here for successful registration
      } else {
        console.error('Registration failed');
        // You can add additional logic here for failed registration
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Profession:
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Registration;
