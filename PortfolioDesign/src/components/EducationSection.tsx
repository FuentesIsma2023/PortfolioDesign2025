import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  provider: string;
  logo: string;
  description: string;
  date: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Google IT Support Professional Certificate',
    provider: 'Google',
    logo: 'https://images.pexels.com/photos/11360196/pexels-photo-11360196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Comprehensive IT support training covering troubleshooting, customer service, networking, operating systems, and security.',
    date: '2023',
    link: '#'
  },
  {
    id: 2,
    title: 'Microsoft IT Support Specialist Professional Certificate',
    provider: 'Microsoft',
    logo: 'https://images.pexels.com/photos/11360196/pexels-photo-11360196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Microsoft-certified program focused on Windows support, cloud services, and enterprise systems administration.',
    date: '2023',
    link: '#'
  },
  {
    id: 3,
    title: 'Cybersecurity Certificate',
    provider: 'Cisco',
    logo: 'https://images.pexels.com/photos/11360196/pexels-photo-11360196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Comprehensive cybersecurity training covering network security, threat detection, and security policies.',
    date: '2022',
    link: '#'
  },
  {
    id: 4,
    title: 'Network Engineering Formation',
    provider: 'Cisco',
    logo: 'https://images.pexels.com/photos/11360196/pexels-photo-11360196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Advanced networking concepts, protocols, and infrastructure management training.',
    date: '2022',
    link: '#'
  },
  {
    id: 5,
    title: 'English for IT 1 & 2',
    provider: 'Cisco',
    logo: 'https://images.pexels.com/photos/11360196/pexels-photo-11360196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Specialized English language training for IT professionals focusing on technical terminology and communication.',
    date: '2022',
    link: '#'
  },
  {
    id: 6,
    title: 'Frontend Bootcamp',
    provider: 'Oracle',
    logo: 'https://images.pexels.com/photos/11360196/pexels-photo-11360196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Intensive frontend development program covering HTML, CSS, JavaScript, and modern web development practices.',
    date: '2023',
    link: '#'
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Committed to continuous learning and professional development through industry-leading certifications
            and specialized training programs.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:transform hover:translate-y-[-5px]"
              >
                <div className="h-36 bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20 backdrop-blur-sm">
                    <Award className="text-white" size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-1">{cert.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400">{cert.provider}</p>
                    </div>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {cert.description}
                  </p>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      View Certificate <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Current Learning Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm continuously expanding my knowledge through platforms like Pluralsight, Cloud Academy, and Google Skills Boost,
              focusing on cloud computing (Azure, AWS, Google Cloud), containerization with Docker and Kubernetes, and Python programming.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Pluralsight</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced IT administration courses</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Cloud Academy</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Multi-cloud architecture and management</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Google Skills Boost</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Hands-on cloud labs and certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;