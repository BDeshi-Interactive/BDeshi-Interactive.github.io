import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { SiSteam, SiItchdotio } from 'react-icons/si';
import { FaXbox } from 'react-icons/fa';

interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  screenshots: string[];
  platforms: {
    steam?: string;
    xbox?: string;
    itch?: string;
  };
}

const Games: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState<{[key: string]: number}>({});

  const games: Game[] = [
    {
      id: 'compress-space',
      title: 'Compress(space)',
      description: 'A mind and space-bending puzzle game where you fold space to cheat your way through puzzles. Master space manipulation and reach beyond the stars to uncover the mystery at the end of the universe.',
      thumbnail: './GameAssets/cs-steam-capsule.png',
      screenshots: [
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3664840/extras/compress_space_1.gif?t=1748719351',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3664840/extras/compress_space_spoiler_gif_1.gif?t=1748719351',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3664840/extras/level_select_loop_1.gif?t=17487193510',
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3664840/14e91316396e6a4dd62b7c87e59771fbc68998a5/ss_14e91316396e6a4dd62b7c87e59771fbc68998a5.1920x1080.jpg?t=1755193251',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3664840/4adf34517f979d7eb0e1449674895e1055eb488d/ss_4adf34517f979d7eb0e1449674895e1055eb488d.600x338.jpg?t=1748719351',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3664840/9870102654d307cdd5bd2725993af4fcc398951d/ss_9870102654d307cdd5bd2725993af4fcc398951d.600x338.jpg?t=1748719351',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3664840/b23b933133daf95406d30fb00b548875db7c93aa/ss_b23b933133daf95406d30fb00b548875db7c93aa.600x338.jpg?t=1748719351',
      ],
      platforms: {
        steam: 'https://store.steampowered.com/app/3664840/Compressspace/',
        // itch: 'https://b-deshidev.itch.io/compressspace-expanded'
      }
    },
    {
      id: 'control-override',
      title: 'Control:Override',
      description: 'Control:Override is a puzzle game where you must share control between the environment and yourself. Solve puzzles. Defy Physics. Terminate the rogue AI. And perhaps confront the truth about why it went rogue.',
      thumbnail: './GameAssets/co-steam-capsule.jpg',
      screenshots: [
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1406090/extras/nocontrol.gif?t=1747778375',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1406090/extras/not-a-gif.gif?t=1747778375',
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1406090/extras/bugs-features-tools.gif?t=1747778375',
        './GameAssets/co-ss1.jpg',
        './GameAssets/co-ss2.jpg',
        './GameAssets/co-ss3.jpg',
        './GameAssets/co-ss4.jpg',
        './GameAssets/co-ss5.jpg'
      ],
      platforms: {
        steam: 'https://store.steampowered.com/app/1406090/ControlOverride/',
        itch: 'https://b-deshidev.itch.io/control-override',
        xbox: 'https://www.xbox.com/en-US/games/store/controloverride/9N73W1728BG8',
      }
    }
  ];

  const nextScreenshot = (gameId: string, screenshotCount: number) => {
    setCurrentScreenshot(prev => ({
      ...prev,
      [gameId]: ((prev[gameId] || 0) + 1) % screenshotCount
    }));
  };

  const prevScreenshot = (gameId: string, screenshotCount: number) => {
    setCurrentScreenshot(prev => ({
      ...prev,
      [gameId]: ((prev[gameId] || 0) - 1 + screenshotCount) % screenshotCount
    }));
  };

  const PlatformIcon = ({ platform }: { platform: string }) => {
    switch (platform) {
      case 'steam':
        return <SiSteam size={20} />;
      case 'xbox':
        return <FaXbox size={20} />;
      case 'itch':
        return <SiItchdotio size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-title">
            Our Games
          </h2>
        </div>

        <div className="space-y-12">
          {games.map((game) => (
            <div 
              key={game.id}
              className="bg-surface rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8">
                  <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-full h-full lg:h-80 object-cover rounded-xl mb-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(game.thumbnail)}
                  />
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-title">
                    {game.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {game.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {Object.entries(game.platforms).map(([platform, url]) => (
                      url && (
                        <a
                          key={platform}
                          href={url}
                          className="flex items-center gap-2 bg-surface-light hover:bg-gray-600 px-4 py-2 rounded-full text-sm font-medium transition-colors text-white border border-gray-600"
                        >
                          <PlatformIcon platform={platform} />
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                          <ExternalLink size={14} />
                        </a>
                      )
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8">
                  <div className="relative">
                    <img
                      src={game.screenshots[currentScreenshot[game.id] || 0]}
                      alt={`${game.title} screenshot`}
                      className="w-full lg:h-100 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedImage(game.screenshots[currentScreenshot[game.id] || 0])}
                    />
                    
                    <button
                      onClick={() => prevScreenshot(game.id, game.screenshots.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    
                    <button
                      onClick={() => nextScreenshot(game.id, game.screenshots.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  
                  <div className="flex gap-2 mt-4 justify-center">
                    {game.screenshots.map((screenshot, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentScreenshot(prev => ({ ...prev, [game.id]: index }))}
                        className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                          (currentScreenshot[game.id] || 0) === index 
                            ? 'border-primary shadow-lg' 
                            : 'border-gray-600 hover:border-gray-400'
                        }`}
                      >
                        <img
                          src={screenshot}
                          alt={`${game.title} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Games;