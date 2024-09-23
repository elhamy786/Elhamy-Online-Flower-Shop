const ContactPage = () => {
    return (
      <div className="py-16 bg-gradient-to-b from-pink-50 via-yellow-100 to-green-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          {/* Header */}
          <h2 className="text-5xl font-bold text-green-700 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-10">
             Are you interested in buying some of our beautiful flowers? We&apos;d love to help! Fill out the form below and we will get back to you with more information.
          </p>
          {/* Contact Form */}
          <form className="mt-8 max-w-lg mx-auto space-y-6">
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-flower-pink focus:border-flower-pink"
              />
            </div>
  
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-flower-pink focus:border-flower-pink"
              />
            </div>
  
            {/* Message Input */}
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-flower-pink focus:border-flower-pink"
                rows={6}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-lavender text-rich-green font-bold py-3 px-6 rounded-full shadow-lg hover:bg-sunset-orange hover:text-deep-purple transition duration-300 border border-light-pink"
            >
              Contact Me
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default ContactPage;
  