import React from 'react';
import { Code2, Database, Cloud, LineChart } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "R", level: 75 }
      ]
    },
    {
      title: "Technologies de Base de Données",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PL/SQL", level: 85 },
        { name: "NoSQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Cloud & Big Data",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Hadoop", level: 85 },
        { name: "Hive", level: 80 },
        { name: "Azure Cloud", level: 75 },
        { name: "Docker", level: 85 }
      ]
    },
    {
      title: "Outils de Visualisation",
      icon: <LineChart className="w-6 h-6" />,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Looker Studio", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "D3.js", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Compétences Techniques
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform origin-left transition-transform duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}