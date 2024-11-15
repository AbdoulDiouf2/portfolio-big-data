import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "DALKIA EN",
      position: "Assistant Pilote Méthodes",
      period: "Avr 2024 - Oct 2024",
      description: "Développement GMAO et visualisation des KPI",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500"
    },
    {
      company: "La Poste",
      position: "Agent de Production Stagiaire",
      period: "Juin 2023 - Juil 2023",
      description: "Logistique et automatisation du tri postal",
      image: "https://images.unsplash.com/photo-1566232392379-afd9298e6a46?auto=format&fit=crop&w=500"
    },
    {
      company: "Orange Sénégal",
      position: "Stagiaire Opérations Internationales",
      period: "Juil 2022 - Août 2022",
      description: "Projets de facturation et réconciliation opérateur",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Expérience Professionnelle
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={exp.image}
                    alt={exp.company}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}