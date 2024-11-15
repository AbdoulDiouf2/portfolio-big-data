import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Me Contacter
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Informations de Contact</h3>
            
            <ContactItem 
              icon={<Mail />}
              title="Email"
              content="aad.mbacke691@gmail.com"
              href="mailto:aad.mbacke691@gmail.com"
            />
            
            <ContactItem 
              icon={<Phone />}
              title="Téléphone"
              content="+33 7 49 05 18 79"
              href="tel:+33749051879"
            />
            
            <ContactItem 
              icon={<MapPin />}
              title="Localisation"
              content="Rouen, France"
            />
            
            <div className="flex space-x-4 pt-6">
              <SocialLink 
                href="https://github.com"
                icon={<Github />}
                label="GitHub"
              />
              <SocialLink 
                href="https://linkedin.com"
                icon={<Linkedin />}
                label="LinkedIn"
              />
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Envoyer le Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const ContactItem = ({ 
  icon, 
  title, 
  content, 
  href 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  href?: string;
}) => (
  <div className="flex items-start space-x-3">
    <div className="text-blue-600">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-gray-900">{title}</h4>
      {href ? (
        <a 
          href={href}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-50 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);