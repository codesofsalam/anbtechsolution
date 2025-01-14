import { Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_ccm7sfw';
    const templateId = 'template_m7rwozo';
    const publicKey = '8fhpfjLJAZs8-jOQw';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Abdul Salam',
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert(
          'Message sent successfully! Abdul Salam will get back to you soon.',
          response
        );
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  };

  return (
    <div id="contact" className="py-24 bg-[#021228]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Let&apos;s discuss how we can help transform your business or idea
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-white border-gray-300 text-navy-900
                 focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-white border-gray-300 text-navy-900
                 focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-white border-gray-300 text-navy-900
                 focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-[#021228]
                 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 focus:ring-blue-500
                transition-colors"
              >
                <Send className="w-5 h-5 mr-2 mt-1" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
