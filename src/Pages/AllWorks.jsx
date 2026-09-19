import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import InfiniteSpiral from '../components/InfiniteSpiral';
import './allworks.css';

const portfolioImages = [
  { src: '/images/Artboard.png', alt: 'Artboard 1' },
  { src: '/images/BANANA%20Scoop.png', alt: 'Banana scoop' },
  { src: '/images/chair.jpeg', alt: 'Chair' },
  { src: '/images/Travel.png', alt: 'Travel' },
  { src: '/images/Hathor%20final.png', alt: 'Hathor' },
  { src: '/images/Dubai%20Parlour.png', alt: 'Dubai Parlour' },
  { src: '/images/New%20Project.png', alt: 'New Project' },
];

const LOCAL_ANIME_GIFS = [
  '/Chaisaw.gif',
  '/Bye.gif',
  '/Juvia.gif',
  '/Salute%20Yellow%20girl.gif',
];

const AllWorks = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [currentGif, setCurrentGif] = useState(LOCAL_ANIME_GIFS[0]);
  const navigate = useNavigate();

  // Audio Reference
  const audioRef = useRef(null);

  useEffect(() => {
    const audioPath = encodeURI('/Self Aware - Temper City.mp3');
    const audio = new Audio(audioPath);
    audio.loop = true;
    audioRef.current = audio;

    const interactionEvents = [
      'mousemove',
      'scroll',
      'click',
      'touchstart',
      'pointerdown',
      'keydown',
      'wheel',
    ];

    const cleanListeners = () => {
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleUserInteraction);
        document.removeEventListener(event, handleUserInteraction);
      });
    };

    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            cleanListeners(); // Remove listeners once playing succeeds
          })
          .catch(err => {
            console.warn('Autoplay blocked by browser policy:', err);
          });
      }
    };

    // 1. Try immediate execution on component mount
    handleUserInteraction();

    // 2. Attach listeners for user interactions (mousemove, scroll, click, etc.)
    interactionEvents.forEach(event => {
      window.addEventListener(event, handleUserInteraction, { passive: true });
      document.addEventListener(event, handleUserInteraction, {
        passive: true,
      });
    });

    // Cleanup on component unmount
    return () => {
      cleanListeners();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, []);

  // Scroll threshold detector
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 100 || windowHeight + scrollTop >= documentHeight - 150) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBackClick = () => {
    const randomIndex = Math.floor(Math.random() * LOCAL_ANIME_GIFS.length);
    setCurrentGif(LOCAL_ANIME_GIFS[randomIndex]);
    setIsLeaving(true);

    setTimeout(() => {
      navigate('/');
    }, 2500);
  };

  return (
    <div className="infinite-gallery-container">
      {/* Gallery Header */}
      <div className="gallery-nav">
        <h1>Jeffin's Vault</h1>
        <p>Scroll to explore</p>
      </div>

      <InfiniteSpiral
        items={portfolioImages}
        animationMode="scroll"
        radius={isMobile ? 90 : 170}
        cardWidth={isMobile ? 120 : 250}
        cardHeight={isMobile ? 160 : 350}
        verticalSpacing={isMobile ? 40 : 60}
        centerScale={1.2}
        edgeFade={0.3}
        edgeBlur={6}
        speed={0.55}
        cardsPerTurn={7}
        pauseOnHover
        direction="up"
        rotation={0}
        cardTilt={0}
        imageFit="cover"
        grayscale={0}
      />

      {/* Viewport Bottom-Centered Wrapper */}
      <div className="bottom-fixed-wrapper">
        <AnimatePresence>
          {(isAtBottom || isLeaving) && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              {!isLeaving ? (
                <button onClick={handleBackClick} className="back-btn">
                  <ArrowLeft className="arrow-icon" />
                  <span>Back to Home</span>
                </button>
              ) : (
                <div className="anime-farewell-card">
                  <div className="anime-gif-box">
                    <img src={currentGif} alt="Anime Goodbye" />
                  </div>
                  <div className="anime-farewell-text">
                    <span>Mata ne~! See you homie... ♡</span>
                    <Sparkles className="sparkle-icon" />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllWorks;
