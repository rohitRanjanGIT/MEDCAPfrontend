import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Twitter, Linkedin } from 'lucide-react';
import Logo from '../assets/medcap_logo.png';
 
const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="MedCap Logo" className="w-10 h-10 mr-2 rounded-full bg-blue-600" />
              <span className="text-xl font-bold">MedCap</span>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna.
            </p>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Psychotherapy</li>
              <li>Mental Counseling</li>
              <li>Support Groups</li>
              <li>Case Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +14 5464 8272
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                rona@domain.com
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Lazyy Tower 192,Bum Swiss
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Term Of Use</li>
            </ul>
          </div>

          {/* Maps */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4">Maps</h3>
            <div className="w-24 h-24 bg-white">
              {/* Placeholder for map */}
              <img src="/api/placeholder/96/" alt="Map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-8"></div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <Instagram size={20} />
            <Facebook size={20} />
            <Youtube size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
          </div>
          <p className="text-sm">
            copyright 2023 @medcap all right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;