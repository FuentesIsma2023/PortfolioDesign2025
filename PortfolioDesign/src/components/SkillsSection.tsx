import React, { useState } from 'react';
import { Server, Monitor, Database, Code, Cloud, File, Terminal, Users } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'systems',
    name: 'Operating Systems',
    icon: <Monitor size={24} />,
    skills: [
      { name: 'Windows OS', level: 90 },
      { name: 'macOS', level: 85 },
      { name: 'Linux (Ubuntu)', level: 80 }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    icon: <Cloud size={24} />,
    skills: [
      { name: 'Microsoft Azure', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Google Cloud', level: 70 }
    ]
  },
  {
    id: 'admin',
    name: 'Administration',
    icon: <Server size={24} />,
    skills: [
      { name: 'Microsoft Intune', level: 85 },
      { name: 'Active Directory', level: 80 },
      { name: 'MFA', level: 85 },
      { name: 'VMware Horizon', level: 75 },
      { name: 'Citrix', level: 75 }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Software',
    icon: <File size={24} />,
    skills: [
      { name: 'ServiceNow', level: 85 },
      { name: 'Jira', level: 80 },
      { name: 'Excel (+ Macros)', level: 90 },
      { name: 'Pivot Tables', level: 85 },
      { name: 'Databases', level: 75 }
    ]
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: <Code size={24} />,
    skills: [
      { name: 'Python', level: 65 },
      { name: 'Docker', level: 60 },
      { name: 'Kubernetes', level: 55 }
    ]
  },
  {
    id: 'soft',
    name: 'Soft Skills',
    icon: <Users size={24} />,
    skills: [
      { name: 'Troubleshooting', level: 95 },
      { name: 'English Proficiency', level: 90 },
      { name: 'Communication', level: 90 },
      { name: 'Customer Service', level: 95 },
      { name: 'Adaptability', level: 90 },
      { name: 'Documentation', level: 85 }
    ]
  }
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Categories Selector */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-md'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="mb-2">{category.icon}</div>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Skills Display */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <span className="mr-3">{category.icon}</span>
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;