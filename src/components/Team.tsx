import React from 'react';
import { Mail, Linkedin, Twitter, Instagram, Youtube, Music  } from 'lucide-react';
import { FaBluesky, FaArtstation, FaGlobe, FaSpotify, FaItchIo } from "react-icons/fa6";

interface TeamMember {
  name: string;
  image: string;
  description: string;
  roles: string[];
  games: string[];
  social?: {
    email?: string;
    linkedin?: string;
    itch?: string;
    bsky?: string;
    twitter?: string;
    website?: string;
    spotify?: string;
    instagram?: string;
    artstation?: string;
    youtube?: string;
  };
}
var COMPRESS_SPACE_GAME = "Compress(space)";
var CONTROL_OVERRIDE_GAME = "Control:Override";

const Team: React.FC = () => {
  const coreTeam: TeamMember = {
    name: "Fahim Faysal (B-DeshiDev)",
    image: "https://cdn.bsky.app/img/avatar/plain/did:plc:njt534dopilwdplg4aoa4eop/bafkreicyeaq3nt53tn3xpbxugwd7yafnhlfiy4ou62t5wvhzud6fdi72hi@jpeg",
    description: "I'm B-DeshiDev, a Bangladeshi indie game developer. I aim to make games that are interesting and novel in terms of both gameplay and story. I've released games on Steam and XBOX and they've have been featured in places such as Warpdoor.",
    roles: ["Lead Developer", "Gameplay Programmer", "Level Designer"],
    games: [
      COMPRESS_SPACE_GAME, CONTROL_OVERRIDE_GAME
    ],
    social: {
      twitter: "https://x.com/B_DeshiDev",
      bsky: "https://bsky.app/profile/b-deshidev.bsky.social", 
      itch: "https://b-deshidev.itch.io/"
    }
  };

  const collaborators: TeamMember[] = [
    {
      name: "Drew Marcum",
      image: "https://static.wixstatic.com/media/000196_ff667b7dc06e4401b5b0988436910cbf~mv2.jpg/v1/fill/w_873,h_538,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/000196_ff667b7dc06e4401b5b0988436910cbf~mv2.jpg",
      description: "A technical sound designer and composer with 10 shipped titles, over 50 million music streams, and credits with Pixar, Apple TV+, MTV, and more.",
      games: [
        COMPRESS_SPACE_GAME
      ],
      roles: ["Sound Designer"],
      social: {
        website: "https://www.drewgmarcum.com/",
        spotify: "https://open.spotify.com/playlist/3NxsxpvvrqB9wMPY0u8cb3?go=1&sp_cid=c986f4cf1dfa4435d9d35b47dfe868d8&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=fd96fae0457b475b"
      }
    },
    {
      name: "The Oozy Artist",
      image: "https://yt3.googleusercontent.com/69vDMQU0Ug-uVn90qPpF9QWIbwzQ4VVf4N8jbMcckZ2O9RkL7aDik5UXWqNBeI9lzG_HEG97fE8=s160-c-k-c0x00ffffff-no-rj",
      description: "A Bangladeshi 3D Artist | Illustrator.",
      roles: ["Artist"],    
      games: [
        COMPRESS_SPACE_GAME
      ],
      social: {
        artstation: "https://www.artstation.com/theoozyartist",
        instagram: "https://www.instagram.com/theoozyartist",
      }
    },
  ];

  const TeamMemberCard = ({ member, isCore = false }: { member: TeamMember; isCore?: boolean }) => (
    <div 
      className={`bg-surface rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 ${
        isCore ? 'max-w-2xl mx-auto' : ''
      }`}
    >
      <div className={`flex flex-col ${isCore ? 'items-center text-center' : 'sm:flex-row'} gap-6`}>
        <div className="flex-shrink-0">
          <img
            src={member.image}
            alt={member.name}
            className={`${isCore ? 'w-32 h-32' : 'w-24 h-24'} rounded-full object-cover mx-auto sm:mx-0`}
          />
        </div>
        
        <div className={`flex-1 ${isCore ? 'text-center' : 'text-center sm:text-left'}`}>
          <h3 className={`${isCore ? 'text-2xl' : 'text-xl'} font-bold text-white mb-2 font-title`}>
            {member.name}
          </h3>
          
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {member.description}
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Games:</h4>
            <div className={`flex flex-wrap gap-2 mb-4 ${isCore ? 'justify-center' : 'justify-center sm:justify-start'}`}>
              {member.games.map((game, gameIndex) => (
                <span
                  key={gameIndex}
                  className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium border border-secondary/30"
                >
                  {game}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Roles:</h4>
            <div className={`flex flex-wrap gap-2 ${isCore ? 'justify-center' : 'justify-center sm:justify-start'}`}>
              {member.roles.map((role, roleIndex) => (
                <span
                  key={roleIndex}
                  className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/30"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
          
          {member.social && (
            <div className={`flex gap-3 ${isCore ? 'justify-center' : 'justify-center sm:justify-start'}`}>
              
              {member.social.email && (
                <a
                  href={`mailto:${member.social.email}`}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                </a>
              )}
              {member.social.website && (
                <a
                  href={member.social.website}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaGlobe size={18} />
                </a>
              )}
              {member.social.itch && (
                <a
                  href={member.social.itch}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaItchIo size={18} />
                </a>
              )}
              {member.social.spotify && (
                <a
                  href={member.social.spotify}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaSpotify size={18} />
                </a>
              )}
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.social.instagram && (
                <a
                  href={member.social.instagram}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Instagram size={18} />
                </a>
              )}
              {member.social.bsky && (
                <a
                  href={member.social.bsky}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaBluesky size={18} />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Twitter size={18} />
                </a>
              )}
              {member.social.artstation && (
                <a
                  href={member.social.artstation}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaArtstation size={18} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Core Team Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-title">
              Core Team
            </h2>
            <p className="text-xl text-gray-300">
             B-Deshi Interactive is a fully remote Bangladeshi game studio. We maintain a rotating team depending on the needs of each game. We prioritize working with Bangladeshi game developers to support the local industry.
            </p>
          </div>

          <TeamMemberCard member={coreTeam} isCore={true} />
        </div>

        {/* Collaborators Section */}
        <div>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-title">
              People We've Collaborated With
            </h2>
            <p className="text-xl text-gray-300">
              The talented individuals who help bring our creative visions to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collaborators.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;