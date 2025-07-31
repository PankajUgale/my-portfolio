import React, { useRef } from 'react';
import { User, Target, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(aboutRef, 0.3);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <User className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Professional Summary
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Enthusiastic B.E. graduate eager to apply and enhance expertise in Java, SQL, HTML, CSS, and Spring. 
                    Passionate about building scalable web apps and solving real-world problems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Target className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Goals & Vision
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Committed to continuous learning and staying updated with the latest technologies. 
                    My goal is to contribute to innovative projects that make a positive impact on users' lives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Lightbulb className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Innovation & Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I believe in the power of technology to solve complex problems. Always exploring new frameworks, 
                    tools, and best practices to deliver exceptional software solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">2024</div>
                    <div className="text-blue-100">Graduate</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold mb-1">7.51</div>
                      <div className="text-blue-100 text-sm">CGPA</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1">5+</div>
                      <div className="text-blue-100 text-sm">Projects</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-lg font-semibold mb-2">Ready to Contribute</div>
                    <div className="text-blue-100 text-sm">
                      Seeking opportunities to apply my skills in a dynamic development environment
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

export default About;