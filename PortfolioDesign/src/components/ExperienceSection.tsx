import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Warner Bros. Discovery',
    position: 'Service Desk Analyst',
    period: 'August 2024 - Present',
    description: [
      'Provide technical support and troubleshooting for internal employees across multiple platforms and applications',
      'Manage and resolve incidents through ServiceNow ticketing system',
      'Support Microsoft Intune, Active Directory, and MFA administration',
      'Handle VMware Horizon and Citrix virtual desktop environments'
    ]
  },
  {
    id: 2,
    company: 'Previous Company',
    position: 'Security Specialist',
    period: 'Prior to August 2024',
    description: [
      'Developed strong analytical and case management skills',
      'Implemented effective documentation practices',
      'Demonstrated exceptional communication with stakeholders',
      'Applied problem-solving skills in security operations'
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`mb-12 md:mb-0 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-800 flex items-center justify-center z-10">
                    <Briefcase className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                </div>

                {/* Content */}
                <div 
                  className={`md:w-1/2 p-6 ${
                    index % 2 === 0 ? 'md:pl-12 md:pr-6' : 'md:pr-12 md:pl-6'
                  }`}
                >
                  <div 
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
                    data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                    data-aos-duration="1000"
                  >
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.position}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{exp.company}</p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer div for every second item */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;