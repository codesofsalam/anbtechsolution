import React from 'react';
import { Send } from 'lucide-react';

const GetInTouch = () => {
  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Let's discuss how we can help transform your business
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-900 focus:ring-navy-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-900 focus:ring-navy-900"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-900 focus:ring-navy-900"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-navy-900 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-900"
              >
                <Send className="w-5 h-5 mr-2" />
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