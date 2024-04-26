import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialLink = ({ href, icon }) => {
  console.log("Rendering SocialLink with icon: ", icon); // Tambahkan ini untuk debugging
  return (
    <a href={href} className="flex items-center px-4 py-2 mx-2 border rounded-lg">
      <FontAwesomeIcon icon={icon} className="mr-2" />
    </a>
  );
};

const FooterSection = () => {
  return (
    <div className="bg-[#edffe4] mt-24">
      <div className="max-w-4xl py-10 mx-auto px-4">
        <div className="text-center">
          <h3 className="mb-3 text-3xl">Download our HydroHealth App</h3>
          <p>Stay Healthy. All day, every day.</p>
          <div className="flex justify-center my-10">
            <SocialLink href="https://play.google.com" icon={faGooglePlay} />
            <SocialLink href="https://github.com" icon={faGithub} />
            <SocialLink href="https://instagram.com" icon={faInstagram} />
          </div>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-400 mt-12 md:flex-row md:justify-between">
          <p>&copy; Beautiful Footer, 2021.</p>
          <div>
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
