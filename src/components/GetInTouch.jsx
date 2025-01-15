import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "All fields are required!",
        text: "Please fill in all the fields before submitting.",
        confirmButtonColor: "#021228",
        background: "#f9f9f9",
        customClass: {
          popup: "rounded-lg shadow-lg",
          title: "text-navy-900 font-bold",
          content: "text-navy-700",
        },
      });
      return;
    }

    const serviceId = "service_6snmdtn";
    const templateId = "template_myizwol";
    const publicKey = "YgvHE4u2Jngk8ehbK";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "ANB Tech Solution",
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully. We will get back to you soon!",
          confirmButtonColor: "#021228",
          background: "#f9f9f9",
          customClass: {
            popup: "rounded-lg shadow-lg",
            title: "text-navy-900 font-bold",
            content: "text-navy-700",
          },
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "There was an error sending your message. Please try again later.",
          confirmButtonColor: "#021228",
          background: "#f9f9f9",
          customClass: {
            popup: "rounded-lg shadow-lg",
            title: "text-navy-900 font-bold",
            content: "text-navy-700",
          },
        });
        console.error("Error sending email", error);
      });
  };

  return (
    <div id="contact" className="py-24 bg-[#021228]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-cardo">
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
                required
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
                required
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
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-[#021228]
                 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#021228]
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
