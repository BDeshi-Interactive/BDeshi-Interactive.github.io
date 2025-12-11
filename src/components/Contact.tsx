import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:bdeshiinteractive@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
 
          <p className="text-xl text-gray-300">
            Have a question, partnership opportunity, or just want to say hello? 
          </p>
          <p className="text-xl text-gray-300">
            We'd love to hear from you.
          </p>
          <br/>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary/90 text-white  px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send Message
          </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;