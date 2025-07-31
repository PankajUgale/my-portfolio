import React, { useRef } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import { education, certifications } from '../data/portfolioData';

const Education: React.FC = () => {
  const educationRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(educationRef, 0.3);

  return (
    <section
      ref={educationRef}
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Academic background and professional certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {edu.year}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                          {edu.score}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
                  <Award className="text-purple-600 dark:text-purple-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Certifications
                </h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                          {cert.name}
                        </h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                        {cert.year}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Additional Learning */}
                <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white">
                  <h4 className="text-lg font-bold mb-4">Continuous Learning</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Problem solving on HackerRank and coding platforms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Advanced Java concepts and Spring Framework</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Modern web development best practices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;