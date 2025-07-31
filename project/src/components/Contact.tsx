import React, { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isVisible = useIntersectionObserver(contactRef, 0.3);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        'service_mail',     
        'template_fxdpeuk',    
        formData,
        't742dAprNiMy2A5O5'     
      )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pankajugale2020@gmail.com',
      href: 'mailto:pankajugale2020@gmail.com',
      color: 'text-red-600 dark:text-red-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8308009147',
      href: 'tel:+918308009147',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/pankajugale',
      href: 'https://www.linkedin.com/in/pankajugale',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Maharashtra, India',
      href: '#',
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <section
      ref={contactRef}
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in hearing about new opportunities, exciting projects, 
                  or just having a chat about technology and development. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={info.label}
                      className={`flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className={`p-3 rounded-lg bg-white dark:bg-gray-900 ${info.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</div>
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-800 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Ready to collaborate?</h4>
                <p className="text-blue-100 mb-4">
                  I'm available for full-time opportunities, freelance projects, or consulting work.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Full Stack Development</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Java Applications</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">React Projects</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="contact_number" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello!"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
                >
                  <Send size={20} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 dark:text-green-400 mt-2 text-sm">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 dark:text-red-400 mt-2 text-sm">Failed to send. Try again later.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
