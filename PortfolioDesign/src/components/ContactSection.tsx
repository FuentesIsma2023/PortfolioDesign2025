import React from 'react';
import { Mail, Linkedin, Github as GitHub, PhoneCall } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 shrink-0">
                      <Mail className="text-blue-600 dark:text-blue-400" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                      <a href="mailto:ismael.najera@example.com" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        ismael.najera@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 shrink-0">
                      <PhoneCall className="text-blue-600 dark:text-blue-400" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                      <a href="tel:+1234567890" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 shrink-0">
                      <Linkedin className="text-blue-600 dark:text-blue-400" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">LinkedIn</p>
                      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        linkedin.com/in/ismael-najera
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 shrink-0">
                      <GitHub className="text-blue-600 dark:text-blue-400" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">GitHub</p>
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        github.com/ismael-najera
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-300 w-full"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl text-lg font-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;