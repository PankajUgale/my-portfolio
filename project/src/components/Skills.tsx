import React, { useRef } from 'react';
import { Code, Monitor, Database, Brain, Wrench } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import { skills } from '../data/portfolioData';

const iconMap = {
  Code,
  Monitor,
  Database,
  Brain,
  Wrench
};

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(skillsRef, 0.3);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={skill.category}
                  className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {skill.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div
                        key={item}
                        className="flex items-center py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Highlight */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Problem Solving Focus</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">DSA</div>
                  <div className="text-blue-100">Arrays, LinkedLists, Stacks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">OOP</div>
                  <div className="text-blue-100">Design Patterns & Principles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Web Dev</div>
                  <div className="text-blue-100">Full Stack Applications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;