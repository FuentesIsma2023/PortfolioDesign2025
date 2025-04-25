import React from 'react';
import { GraduationCap, Briefcase, Award, Laptop } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="prose dark:prose-invert prose-lg mx-auto mb-12">
            <p>
              I'm a passionate IT professional currently working as a Service Desk Analyst at Warner Bros. Discovery. 
              My journey in technology began in the security sector, where I developed valuable analytical skills 
              and attention to detail. Driven by my passion for technology, I made the transition to IT support 
              in August 2024.
            </p>
            <p>
              With a strong foundation in both technical and soft skills, I'm dedicated to providing exceptional 
              IT support while continuously expanding my knowledge in cloud computing, programming, and system 
              administration. My background in security gives me a unique perspective on IT challenges, allowing me 
              to approach problems with both security and usability in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Professional Journey</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Transitioned from security to IT support, bringing analytical skills and technical knowledge to 
                provide comprehensive support at Warner Bros. Discovery.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Continuous Learning</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Committed to ongoing professional development through certifications from Google, Microsoft, 
                Cisco, and Oracle, with current focus on cloud technologies.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Laptop className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Technical Expertise</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Proficient in multiple operating systems, cloud platforms, and IT administration tools, with 
                growing skills in programming and containerization.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Award className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Soft Skills</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Strong communication, adaptability, and problem-solving skills complemented by advanced English 
                proficiency and a commitment to exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;