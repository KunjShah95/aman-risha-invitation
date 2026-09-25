import { useEffect, useRef, useState, type FC } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, MapPin, Pause, Play } from "lucide-react";

type SceneProps = { active?: boolean };

const scenes = [
  { id: "home", label: "The Invitation" },
  { id: "welcome", label: "Royal Welcome" },
  { id: "sangeet", label: "Sangeet" },
  { id: "dolce", label: "Dolce Vita" },
  { id: "wedding", label: "The Wedding" },
  { id: "last", label: "Warm Regards" },
];

function EnterGate({ onEnter }: { onEnter: () => void }) {
  const reduce = useReducedMotion();
  const [opening, setOpening] = useState(false);

  const open = () => {
    if (opening) return;
    setOpening(true);
    onEnter();
  };

  return (
    <motion.div
      className="enter-gate"
      initial={{ opacity: 1 }}
      animate={{ opacity: opening && !reduce ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0.15 : 0.7, delay: reduce ? 0 : 0.2 }}
    >
      <div className="gate-texture" />
      <div className="gate-bells" aria-hidden="true">
        <img src="/reference/Home-topRightBell.png" alt="" />
        <img src="/reference/Home-topRightBell.png" alt="" />
      </div>
      <div className="gate-flowers gate-flowers-left" aria-hidden="true" />
      <div className="gate-flowers gate-flowers-right" aria-hidden="true" />
      <div className="gate-side-copy gate-side-copy-left" aria-hidden="true">
        <span>Aman</span><i>&amp;</i><span>Risha</span><b>February 6 &amp; 7, 2026</b>
      </div>
      <div className="gate-side-copy gate-side-copy-right" aria-hidden="true">
        <MapPin size={25} />
        <p>For the best experience,<br /><strong>open this on your mobile device.</strong></p>
        <small>This preview is scaled to fit your screen.</small>
      </div>
      <motion.button
        className="envelope-button"
        type="button"
        onClick={open}
        aria-label="Open the wedding invitation"
        whileHover={reduce ? undefined : { filter: "brightness(1.03)" }}
        whileTap={reduce ? undefined : { filter: "brightness(.98)" }}
        animate={opening && !reduce ? { opacity: 0.92 } : undefined}
      >
        <span className="tap-label">Tap to Enter</span>
        <motion.img
          className="envelope-body"
          src="/reference/envebody.png"
          alt=""
          animate={opening && !reduce ? { y: 70, opacity: 0.72 } : undefined}
          transition={{ duration: 0.85, ease: [0.7, 0, 0.2, 1] }}
        />
        <motion.img
          className="envelope-head"
          src="/reference/envehead.png"
          alt=""
          animate={opening && !reduce ? { y: -120, rotate: -2, opacity: 0 } : undefined}
          transition={{ duration: 0.75, ease: [0.65, 0, 0.2, 1] }}
        />
      </motion.button>
      <div className="gate-corner-mark" aria-hidden="true">A <span>&amp;</span> R</div>
    </motion.div>
  );
}

function HomeScene() {
  const [venueVisible, setVenueVisible] = useState(false);

  return (
    <div className="story-scene home-scene">
      <img className="home-texture" src="/reference/Home-main1.png" alt="" />
      <img className="home-meadow" src="/reference/Home-main2.png" alt="" />
      <img className="home-border left" src="/reference/Home-homeborder.png" alt="" />
      <img className="home-border right" src="/reference/Home-homeborder.png" alt="" />
      <img className="home-ganpati" src="/reference/Home-ganpati.png" alt="" />
      <img className="home-bell" src="/reference/Home-topRightBell.png" alt="" />
      <img className="home-peacock" src="/reference/Home-peacock.gif" alt="" />
      <img className="home-bird-one" src="/reference/Home-homebird1.gif" alt="" />
      <img className="home-bird-two" src="/reference/Home-homebird2.gif" alt="" />

      <div className="invitation-copy">
        <p>With the blessings of</p>
        <p>Late Smt. Lata &amp; Late Shri Balwant Doshi<br />Smt. Bharti &amp; Late Shri Rajnikant Shah</p>
        <p className="invitation-parents">POONAM &amp; ASHIT DOSHI</p>
        <p>cordially invite you to attend the<br />Wedding Celebrations of their son</p>
        <span className="couple-name">Aman</span>
        <span className="couple-with">With</span>
        <span className="couple-name">Risha</span>
        <p>Daughter of Mrs. Payal &amp; Mr. Yayesh Jhaveri</p>
        <p>February 6 &amp; 7, 2026</p>
        <p className="invitation-at">at</p>
        {venueVisible ? (
          <a className="venue-revealed" href="https://maps.google.com/?q=Hyatt+Regency+Jaipur+Mansarovar" target="_blank" rel="noreferrer">
            <MapPin size={14} /> Hyatt Regency Jaipur Mansarovar
          </a>
        ) : (
          <button className="venue-reveal" type="button" onClick={() => setVenueVisible(true)}>
            <span>Scratch to<br />reveal the venue</span>
          </button>
        )}
        <p>Eagerly awaiting,</p>
        <p>Dhruvi, Dhruven &amp; Shloka</p>
      </div>
      <a className="home-scroll" href="#welcome" aria-label="Continue to the royal welcome">
        <span>Scroll to explore</span><ChevronDown size={17} />
      </a>
    </div>
  );
}

function WelcomeScene() {
  return (
    <div className="story-scene welcome-scene">
      <div className="welcome-wall" />
      <img className="welcome-arch" src="/reference/FirstFrame-whiteWall.png" alt="" />
      <img className="welcome-parrot" src="/reference/FirstFrame-parrot.gif" alt="" />
      <img className="welcome-branch" src="/reference/FirstFrame-branch.gif" alt="" />
      <img className="welcome-flowers" src="/reference/FirstFrame-bottomFlower.png" alt="" />
      <img className="welcome-date" src="/reference/FirstFrame-dateFirstFrame.png" alt="11:00 AM" />
      <div className="welcome-copy">
        <h2>RANI BAGH</h2>
        <p className="welcome-subtitle">A Royal Welcome</p>
        <p>11:00 AM <i>at</i> Chauras Bagh</p>
        <p>Dress Code: Vibrant Indian</p>
      </div>
    </div>
  );
}

function SangeetScene() {
  return (
    <div className="story-scene sangeet-scene">
      <div className="sangeet-bg" />
      <img className="sangeet-glitter" src="/reference/Sangeet-glitter.gif" alt="" />
      <img className="sangeet-disc" src="/reference/Sangeet-disc2.png" alt="" />
      <img className="sangeet-hand left" src="/reference/Sangeet-leftHand.png" alt="" />
      <img className="sangeet-hand right" src="/reference/Sangeet-rightHand.png" alt="" />
      <img className="sangeet-corner left" src="/reference/Sangeet-topleft.gif" alt="" />
      <img className="sangeet-corner right" src="/reference/Sangeet-topright.gif" alt="" />
      <img className="sangeet-bottom" src="/reference/Sangeet-sangeetbottom.gif" alt="" />
      <img className="sangeet-copy-art" src="/reference/Sangeet-centerTextSangeet.png" alt="Symphony of Love, Sangeet, February 6 2026, 7:00 PM at Regency Ballroom. Dress code: Indian Glamorous." />
    </div>
  );
}

function DolceScene({ active }: SceneProps) {
  return (
    <div className={`story-scene dolce-scene${active ? " open" : ""}`}>
      <div className="dolce-bg" />
      <img className="dolce-table" src="/reference/DolceVita-Table.png" alt="" />
      <img className="dolce-curtain" src="/reference/DolceVita-curtain.png" alt="" />
      <img className="dolce-fan" src="/reference/DolceVita-fan.gif" alt="" />
      <img className="dolce-stamp-two" src="/reference/DolceVita-stamp2.png" alt="" />
      <div className="dolce-stamp-one"><img src="/reference/DolceVita-stamp1content.png" alt="" /></div>
      <div className="dolce-card">
        <img className="dolce-card-bg" src="/reference/DolceVita-textBgWhite.png" alt="" />
        <div className="event-copy">
          <h2>LA<br />DOLCE VITA</h2>
          <p className="event-eyebrow">Brunch</p>
          <p>10:30 AM <i>at</i> Navras Bagh</p>
          <p>Dress Code: Western Chic</p>
        </div>
      </div>
      <img className="dolce-door left" src="/reference/doorleft.png" alt="" />
      <img className="dolce-door right" src="/reference/doorright.png" alt="" />
    </div>
  );
}

function WeddingScene() {
  return (
    <div className="story-scene wedding-scene">
      <div className="wedding-bg" />
      <img className="wedding-trees" src="/reference/Wedding-treesBg.png" alt="" />
      <img className="wedding-pillars" src="/reference/Wedding-pillars.png" alt="" />
      <img className="wedding-fountain" src="/reference/Wedding-fountain.png" alt="" />
      <img className="wedding-diya" src="/reference/Wedding-diyaStand.png" alt="" />
      <img className="wedding-flowers" src="/reference/Wedding-weddflowers.gif" alt="" />
      <img className="wedding-candles" src="/reference/Wedding-candles.gif" alt="" />
      <img className="wedding-peacock left" src="/reference/Wedding-leftPeacock.png" alt="" />
      <img className="wedding-peacock right" src="/reference/Wedding-rightPeacock.png" alt="" />
      <img className="wedding-date" src="/reference/Wedding-dateWedding.png" alt="February 7, 2026" />
      <div className="event-copy wedding-copy">
        <h2>ISHQ KA JASHN</h2>
        <p className="event-eyebrow">Wedding</p>
        <p>5:00 PM <i>at</i> Central Courtyard</p>
        <p>&amp; Chauras Bagh</p>
        <p>Dress Code: Graceful Heritage</p>
      </div>
      <img className="wedding-petals" src="/reference/Wedding-petals.png" alt="" />
    </div>
  );
}

function LastScene() {
  return (
    <div className="story-scene last-scene">
      <div className="last-bg" />
      <img className="last-castle" src="/reference/LastFrame-castle.png" alt="" />
      <img className="last-greenery" src="/reference/LastFrame-greenary.png" alt="" />
      <img className="last-handshake" src="/reference/LastFrame-handshake.gif" alt="" />
      <div className="last-copy">
        <p className="last-warm">Warm Regards,</p>
        <h2>DOSHI AND JHAVERI FAMILY</h2>
        <p>We look forward to your presence!</p>
      </div>
    </div>
  );
}

const sceneComponents: FC<SceneProps>[] = [HomeScene, WelcomeScene, SangeetScene, DolceScene, WeddingScene, LastScene];

function App() {
  const [entered, setEntered] = useState(false);
  const [scene, setScene] = useState(0);
  const [musicOn, setMusicOn] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const goToScene = (index: number) => {
    const next = Math.max(0, Math.min(scenes.length - 1, index));
    const viewport = viewportRef.current;
    if (!viewport) return;
    setScene(next);
    viewport.scrollTo({ top: next * viewport.clientHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !entered) return;
    let timer = 0;
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setScene(Math.round(viewport.scrollTop / viewport.clientHeight)), 90);
    };
    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      viewport.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, [entered]);

  const startInvitation = () => {
    setEntered(true);
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.58;
    void audio.play().then(() => setMusicOn(true)).catch(() => setAudioError(true));
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    try {
      await audio.play();
      setAudioError(false);
    } catch {
      setAudioError(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/reference/sunehra.mp3"
        loop
        preload="auto"
        onCanPlay={() => setAudioError(false)}
        onPlay={() => { setAudioError(false); setMusicOn(true); }}
        onPause={() => setMusicOn(false)}
        onError={() => { setAudioError(true); setMusicOn(false); }}
      />
      <AnimatePresence>{!entered && <EnterGate key="gate" onEnter={startInvitation} />}</AnimatePresence>
      {entered && (
        <div className="invitation-app">
          <div className="desktop-bars">
            <Bar side="left" scene={scene} onSelect={goToScene} />
            <Bar side="right" scene={scene} onSelect={goToScene} />
          </div>
          <motion.div
            className="phone-frame"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="dynamic-island"><span /><i /></div>
            <div className="phone-viewport" ref={viewportRef}>
              {sceneComponents.map((Scene, index) => (
                <section className="scene-panel" id={scenes[index].id} key={scenes[index].id} aria-label={scenes[index].label}>
                  <Scene active={scene === index} />
                </section>
              ))}
            </div>
            <button
              className={`audio-toggle ${audioError ? "has-error" : ""}`}
              type="button"
              onClick={() => void toggleMusic()}
              aria-label={audioError ? "Retry music" : musicOn ? "Pause music" : "Play music"}
              aria-pressed={musicOn}
            >
              {musicOn ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}
            </button>
            <div className="home-indicator" />
          </motion.div>
        </div>
      )}
    </>
  );
}

function Bar({ side, scene, onSelect }: { side: "left" | "right"; scene: number; onSelect: (index: number) => void }) {
  return (
    <div className={`desktop-bar ${side}`}>
      {side === "left" ? (
        <>
          <div className="desktop-names"><span>Aman</span><i>&amp;</i><span>Risha</span><b>February 6 &amp; 7, 2026</b></div>
          <button type="button" onClick={() => onSelect(Math.max(0, scene - 1))} aria-label="Previous scene"><ChevronLeft size={20} /></button>
        </>
      ) : (
        <>
          <button type="button" onClick={() => onSelect(Math.min(scenes.length - 1, scene + 1))} aria-label="Next scene"><ChevronRight size={20} /></button>
          <div className="phone-tip"><MapPin size={25} /><p>For the best experience,<br /><strong>open this on your mobile device.</strong></p><span>This preview is scaled to fit your screen.</span></div>
        </>
      )}
    </div>
  );
}

export default App;
