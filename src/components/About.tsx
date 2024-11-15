import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  const education = [
    {
      period: "2022-2025",
      school: "ESIGELEC Rouen",
      degree: "Diplôme d'Ingénieur en Big Data"
    },
    {
      period: "2020-2022",
      school: "ESMT Dakar",
      degree: "Classes Préparatoires"
    }
  ];

  const skills = [
    {
      category: "Programmation",
      items: ["C", "Java", "Python", "C#", "R"]
    },
    {
      category: "Gestion de Bases de Données",
      items: ["MySQL", "PL/SQL", "NoSQL"]
    },
    {
      category: "Technologies Web",
      items: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      category: "Logiciels",
      items: ["Docker", "Power BI", "Hadoop", "SAP BI 4", "SQL Developer", "VS Code"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          À Propos
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-blue-600" />
              Formation
            </h3>
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-sm text-blue-600 font-medium">{edu.period}</div>
                <div className="text-xl font-semibold mt-2">{edu.school}</div>
                <div className="text-gray-600 mt-1">{edu.degree}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-blue-600" />
              Compétences & Certifications
            </h3>
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="font-semibold text-lg mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2">Certifications</h4>
              <div className="flex items-center gap-2">
                <Award className="text-blue-600" size={20} />
                <span>PSC1 - Premiers Secours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}