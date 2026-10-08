
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cake,
  Heart,
  Music2,
  Sparkles,
  Gift,
  Camera,
  ChevronDown,
  Play,
  X,
  ArrowUpRight,
} from "lucide-react";
import "./App.css";

const photos = [
  { src: "/images/bilal1.jpg", caption: "Memory no. 01" },
  { src: "/images/bilal2.jpg", caption: "Memory no. 02" },
  { src: "/images/bilal3.jpg", caption: "Memory no. 03" },
  { src: "/images/bilal4.jpg", caption: "Memory no. 04" },
  { src: "/images/bilal5.jpg", caption: "Memory no. 05" },
  { src: "/images/bilal6.jpg", caption: "Memory no. 06" },
  { src: "/images/bilal7.jpg", caption: "Memory no. 07" },
  { src: "/images/bilal8.jpg", caption: "Memory no. 08" },
];

const stars = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  delay: `${(i % 10) * 0.35}s`,
  duration: `${2 + (i % 4)}s`,
  size: i % 5 === 0 ? "3px" : "2px",
}));

function Stars() {
  return (
    <div className="stars" aria-hidden="true">
      {stars.map((star) => (
        <span
          className="star"
          key={star.id}
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </div>
  );
}

function FactCard({ emoji, label, value }) {
  return (
    <motion.div
      className="fact-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="fact-icon">{emoji}</div>
      <div>
        <span>{label}</span>
        <h3>{value}</h3>
      </div>
    </motion.div>
  );
}

function SectionHeading({ number, eyebrow, title }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function App() {
  const [started, setStarted] = useState(false);
  const [surprise, setSurprise] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [failedPhotos, setFailedPhotos] = useState([]);

  const openPhoto = (photo, index) => {
    if (failedPhotos.includes(index)) return;
    setSelectedPhoto({ ...photo, index });
  };

  return (
    <div className="app">
      <Stars />

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.main
            className="welcome-screen"
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="welcome-orb"
              animate={{
                y: [0, -12, 0],
                boxShadow: [
                  "0 0 35px rgba(77,163,255,.22)",
                  "0 0 75px rgba(77,163,255,.48)",
                  "0 0 35px rgba(77,163,255,.22)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              💙
            </motion.div>

            <motion.div
              className="welcome-content"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="eyebrow">
                <Sparkles size={15} />
                A little surprise just for you
              </p>

              <h1 className="welcome-title">
                Hey,
                <span>Bilal!</span>
              </h1>

              <p className="welcome-text">
                Someone made you a little corner
                <br className="desktop-break" />
                {" "}of the internet. 👀
                <br />
                And there's something waiting inside.
              </p>

              <motion.button
                className="primary-btn"
                onClick={() => setStarted(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Open Your Surprise
                <Gift size={18} />
              </motion.button>

              <p className="welcome-small">
                P.S. You better appreciate this. 😂
              </p>
            </motion.div>

            <div className="scroll-hint">
              <ChevronDown size={17} />
              <span>Made with a little extra love</span>
            </div>
          </motion.main>
        ) : (
          <motion.main
            className="birthday-page"
            key="birthday"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* BIRTHDAY HERO */}
            <section className="birthday-hero">
              <div className="hero-glow" />

              <motion.div
                className="floating-balloon balloon-one"
                animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🎈
              </motion.div>

              <motion.div
                className="floating-balloon balloon-two"
                animate={{ y: [0, -16, 0], rotate: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                🎈
              </motion.div>

              <motion.div
                className="cake-icon"
                animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎂
              </motion.div>

              <p className="eyebrow">
                <Sparkles size={15} />
                TODAY IS ALL ABOUT YOU
              </p>

              <motion.h1
                className="birthday-title"
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                HAPPY
                <span>BIRTHDAY</span>
                <strong>BILAL</strong>
              </motion.h1>

              <p className="birthday-subtitle">
                A whole new chapter, a whole lot of happiness. 💙
              </p>

              <div className="hero-divider">
                <span />
                <Heart size={15} fill="currentColor" />
                <span />
              </div>

              <a className="explore-link" href="#about">
                Scroll to explore <ChevronDown size={15} />
              </a>
            </section>

            {/* BILAL'S FACTS */}
            <section className="section" id="about">
              <SectionHeading
                number="01"
                eyebrow="THE BILAL FILE"
                title="A few important facts."
              />

              <div className="facts-grid">
                <FactCard
                  emoji="💙"
                  label="Favourite colour"
                  value="Blue, obviously"
                />

                <FactCard
                  emoji="🎧"
                  label="Favourite song"
                  value="Alfaz"
                />

                <FactCard
                  emoji="🎂"
                  label="Today's main character"
                  value="Bilal"
                />

                <FactCard
                  emoji="🏆"
                  label="Official status"
                  value="Birthday legend"
                />
              </div>

              <motion.div
                className="little-note"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Sparkles size={18} />
                <p>
                  Breaking news: Bilal is getting older, but we
                  still haven't confirmed if he's getting wiser. 😂
                </p>
              </motion.div>
            </section>

            {/* ALFAZ MUSIC */}
            <section className="music-section section">
              <SectionHeading
                number="02"
                eyebrow="HIS LITTLE SOUNDTRACK"
                title="A song that hits different."
              />

              <div className="music-card">
                <div className="album-art">
                  <div className="album-orbit orbit-one" />
                  <div className="album-orbit orbit-two" />
                  <Music2 size={42} />
                  <span className="album-heart">💙</span>
                </div>

                <div className="music-info">
                  <span className="music-label">
                    BILAL'S FAVOURITE
                  </span>
                  <h3>Alfaz</h3>
                  <p>A little music, a lot of feelings. 🎶</p>

                  <div className="sound-bars" aria-hidden="true">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <i key={n} style={{ animationDelay: `${n * 0.1}s` }} />
                    ))}
                  </div>
                </div>

                <a
                  className="play-btn"
                  href="https://www.youtube.com/results?search_query=Alfaz+song"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Find Alfaz on YouTube"
                  title="Listen to Alfaz"
                >
                  <Play size={20} fill="currentColor" />
                </a>
              </div>

              <p className="music-caption">
                Tap play to find the song on YouTube.
              </p>
            </section>

            {/* BIRTHDAY LETTER */}
            <section className="section letter-section">
              <SectionHeading
                number="03"
                eyebrow="SOMETHING FROM THE HEART"
                title="A little note for you."
              />

              <motion.article
                className="letter"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="letter-top">
                  <span>To: Bilal 💙</span>
                  <span>Just for you</span>
                </div>

                <div className="letter-decoration">✦</div>

                <h3>Dear Bilal,</h3>

                <p>
                  Happy Birthday to one of the most special people
                  in my life! 💙
                </p>

                <p>
                  I'm genuinely glad that I have a friend like you.
                  Thank you for the random conversations, stupid
                  jokes, unexpected laughs, and all those little
                  moments that become memories without us even
                  realising it.
                </p>

                <p>
                  I hope this new chapter brings you happiness,
                  success, peace of mind, new opportunities, and
                  everything you've been working towards.
                </p>

                <p>
                  May you always have reasons to smile, people who
                  genuinely care about you, and the courage to go
                  after the things you dream about.
                </p>

                <p>
                  And please, never stop being your wonderfully
                  chaotic self. The world has enough boring people
                  already. 😂
                </p>

                <p className="letter-highlight">
                  You deserve a year full of good things.
                  Never forget that.
                </p>

                <p className="letter-ending">
                  Happy Birthday once again, Bilal! 🎂
                  <br />
                  Here's to more laughs and unforgettable memories.
                </p>

                <div className="letter-sign">
                  <Heart size={16} fill="currentColor" />
                  Always rooting for you.
                </div>
              </motion.article>
            </section>

            {/* EIGHT PHOTO GALLERY */}
            <section className="section gallery-section" id="memories">
              <SectionHeading
                number="04"
                eyebrow="OUR LITTLE MEMORY LANE"
                title="Eight little pieces of life."
              />

              <p className="gallery-intro">
                Different pictures, different moments, and memories
                worth keeping. Here's our little collection. 💙
              </p>

              <div className="photo-grid">
                {photos.map((photo, index) => {
                  const failed = failedPhotos.includes(index);

                  return (
                    <motion.button
                      type="button"
                      className={`photo-card photo-card-${index + 1}`}
                      key={photo.src}
                      onClick={() => openPhoto(photo, index)}
                      aria-label={`Open photo ${index + 1}`}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.5,
                        delay: (index % 4) * 0.08,
                      }}
                      whileHover={failed ? {} : { y: -6 }}
                    >
                      {failed ? (
                        <div className="photo-missing">
                          <Camera size={30} />
                          <span>Add Photo {index + 1}</span>
                          <small>
                            bilal{index + 1}.jpg
                          </small>
                        </div>
                      ) : (
                        <img
                          src={photo.src}
                          alt={`Bilal birthday memory ${index + 1}`}
                          loading="lazy"
                          onError={() =>
                            setFailedPhotos((previous) =>
                              previous.includes(index)
                                ? previous
                                : [...previous, index]
                            )
                          }
                        />
                      )}

                      <span className="photo-overlay">
                        <span>{photo.caption}</span>
                        <ArrowUpRight size={17} />
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <p className="gallery-footer">
                <Heart size={14} fill="currentColor" />
                Eight frames. Countless memories.
              </p>
            </section>

            {/* FINAL WISH */}
            <section className="final-section">
              <motion.div
                className="final-star"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                ✦
              </motion.div>

              <p className="final-eyebrow">BEFORE YOU GO...</p>

              <h2>
                Here's to your
                <br />
                <span>best year yet.</span>
              </h2>

              <p className="final-subtitle">
                More happiness. More adventures.
                <br />
                More random reasons to laugh.
                <br />
                And plenty of beautiful memories. 💙
              </p>

              <motion.button
                className="surprise-btn"
                onClick={() => setSurprise(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                One Last Surprise
                <Gift size={18} />
              </motion.button>
            </section>

            <footer className="footer">
              <span>MADE ESPECIALLY FOR BILAL</span>
              <Heart size={13} fill="currentColor" />
              <span>WITH LOML ENERGY 💙</span>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>

      {/* FULL-SIZE PHOTO VIEWER */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="photo-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo"
            >
              <X size={24} />
            </button>

            <motion.img
              src={selectedPhoto.src}
              alt={selectedPhoto.caption}
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(event) => event.stopPropagation()}
            />

            <p>{selectedPhoto.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL SURPRISE MODAL */}
      <AnimatePresence>
        {surprise && (
          <motion.div
            className="surprise-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSurprise(false)}
          >
            <div className="confetti" aria-hidden="true">
              {Array.from({ length: 65 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    left: `${(i * 43 + 7) % 100}%`,
                    animationDelay: `${(i % 12) * 0.17}s`,
                    animationDuration: `${2 + (i % 4)}s`,
                  }}
                />
              ))}
            </div>

            <motion.div
              className="surprise-card"
              initial={{ scale: 0.7, y: 25, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                onClick={() => setSurprise(false)}
                aria-label="Close surprise"
              >
                <X size={19} />
              </button>

              <div className="big-gift">🎉</div>

              <p className="surprise-eyebrow">
                THIS ONE IS JUST FOR YOU
              </p>

              <h2>
                HAPPY
                <br />
                <span>BIRTHDAY!</span>
              </h2>

              <div className="blue-heart">💙</div>

              <p className="surprise-text">
                Bilal, I hope you smile a little bigger today,
                laugh a little louder, and remember that you're
                appreciated more than you know.
              </p>

              <p className="surprise-wish">
                Have the most amazing birthday! 🎂
              </p>

              <button
                className="close-btn"
                onClick={() => setSurprise(false)}
              >
                Keep the memories ✨
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;