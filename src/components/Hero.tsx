import React from 'react';
import { Database, Server, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Database className="w-12 h-12 text-blue-200" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float-delayed">
          <Server className="w-12 h-12 text-purple-200" />
        </div>
        <div className="absolute bottom-1/4 left-1/2 animate-float">
          <Brain className="w-12 h-12 text-indigo-200" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          Abdoul Ahad Mbacké Diouf
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 animate-fade-in-delayed">
          Ingénieur Big Data pour la Transformation Digitale
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 animate-fade-in-delayed">
          Actuellement en formation à l'ESIGELEC, Rouen (2022-2025), spécialisé en visualisation de données 
          et développement logiciel.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delayed">
          <KeyStrength icon={<Database className="w-6 h-6" />} text="Rigueur" />
          <KeyStrength icon={<Server className="w-6 h-6" />} text="Dynamisme" />
          <KeyStrength icon={<Brain className="w-6 h-6" />} text="Esprit d'équipe" />
        </div>
      </div>
    </section>
  );
}

const KeyStrength = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
    {icon}
    <span className="font-medium text-gray-700">{text}</span>
  </div>
);