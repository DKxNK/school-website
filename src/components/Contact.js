import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 bg-blue-50 py-20" >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side – Contact info */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions or want to visit? We’d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-700">
            <p><strong>📍 Address:</strong> 123 Main Road, Colombo, Sri Lanka</p>
            <p><strong>📞 Phone:</strong> +94 71 123 4567</p>
            <p><strong>✉️ Email:</strong> contact@ourschool.lk</p>
          </div>
        </div>

        {/* Right side – Contact form */}
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-800">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
