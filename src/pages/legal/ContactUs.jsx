import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-cyan-700">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              className="mt-1 w-full px-4 py-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows="4"
              className="mt-1 w-full px-4 py-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-md font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Head Office</h2>
          <p>
            <strong>Nirmala Global Corporate IT Solutions Pvt. Ltd.</strong><br />
            123, ABC Complex, Main Road<br />
            Darbhanga, Bihar – 846004<br />
            India
          </p>

          <p>
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Email:</strong> info@nirmalaglobal.com
          </p>

          <p>
            <strong>Working Hours:</strong>
            <br />
            Monday to Saturday: 10:00 AM – 6:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
