/* ==========================================================================
   AGOMONI VIBES - INTERACTIVE DELUXE SALOON LOGIC (YOUTUBE AUDIO STREAMING)
   ========================================================================== */

// --- 1. Playlist Data (Includes Nachiketa's Se Pratham Prem Amar / Nilanjana) ---
const playlist = [
  {
    "id": "t7jpLyDaJrc",
    "title": "Gold Printer Sari Pore",
    "artist": "Mita Chatterjee",
    "thumbnail": "https://i.ytimg.com/vi/t7jpLyDaJrc/hqdefault.jpg",
    "duration": 240
  },
  {
    "id": "F4P7lkdHKok",
    "title": "Hoyto Amake Karo Mone Nei",
    "artist": "Kishore Kumar",
    "thumbnail": "https://i.ytimg.com/vi/F4P7lkdHKok/hqdefault.jpg",
    "duration": 255
  },
  {
    "id": "VC1KzyzvQes",
    "title": "Aebar Pujoye Chaaye Amar",
    "artist": "Alka Yagnik",
    "thumbnail": "https://i.ytimg.com/vi/VC1KzyzvQes/hqdefault.jpg",
    "duration": 270
  },
  {
    "id": "yYKHuW_FS_U",
    "title": "Coffee Houser Sei Addata Aaj Aar Nei",
    "artist": "Manna Dey",
    "thumbnail": "https://i.ytimg.com/vi/yYKHuW_FS_U/hqdefault.jpg",
    "duration": 300
  },
  {
    "id": "2xYhUKy7jtA",
    "title": "Palki Te Bou Chole Jai",
    "artist": "Mita Chatterjee",
    "thumbnail": "https://i.ytimg.com/vi/2xYhUKy7jtA/hqdefault.jpg",
    "duration": 315
  },
  {
    "id": "mAlW7Z9W0u0",
    "title": "Amay Proshno Kore Nil Dhrubo Tara",
    "artist": "Srikanto Acharya",
    "thumbnail": "https://i.ytimg.com/vi/mAlW7Z9W0u0/hqdefault.jpg",
    "duration": 330
  },
  {
    "id": "NWby0xG1PY0",
    "title": "Prithibi Hariye Gelo",
    "artist": "Mohammed Aziz",
    "thumbnail": "https://i.ytimg.com/vi/NWby0xG1PY0/hqdefault.jpg",
    "duration": 345
  },
  {
    "id": "Yv5Gx0TtgPU",
    "title": "Chai Na Amar Reshmi Churi",
    "artist": "Bengali Puja Special",
    "thumbnail": "https://i.ytimg.com/vi/Yv5Gx0TtgPU/hqdefault.jpg",
    "duration": 240
  },
  {
    "id": "e6hLqoLVJTE",
    "title": "Bou Khatha Kou",
    "artist": "Mita Chatterjee",
    "thumbnail": "https://i.ytimg.com/vi/e6hLqoLVJTE/hqdefault.jpg",
    "duration": 270
  },
  {
    "id": "64vvyOokAn4",
    "title": "Aar Koto Raat Eka Thakbo",
    "artist": "Asha Bhosle",
    "thumbnail": "https://i.ytimg.com/vi/64vvyOokAn4/hqdefault.jpg",
    "duration": 285
  },
  {
    "id": "r5hFH-Hvieg",
    "title": "Katha Dilam",
    "artist": "Kishore Kumar & Asha Bhosle",
    "thumbnail": "https://i.ytimg.com/vi/r5hFH-Hvieg/hqdefault.jpg",
    "duration": 300
  },
  {
    "id": "tBfSnLqnJ0U",
    "title": "Andho Aaalo Chayate",
    "artist": "Mithun & Sharmila Tagore",
    "thumbnail": "https://i.ytimg.com/vi/tBfSnLqnJ0U/hqdefault.jpg",
    "duration": 315
  },
  {
    "id": "ZvpgGrFZZNI",
    "title": "Amar Swapno Je",
    "artist": "Kishore Kumar & Lata Mangeshkar",
    "thumbnail": "https://i.ytimg.com/vi/ZvpgGrFZZNI/hqdefault.jpg",
    "duration": 330
  },
  {
    "id": "hVWDMkW8M_s",
    "title": "Shundori Komola",
    "artist": "SVF Music Folk",
    "thumbnail": "https://i.ytimg.com/vi/hVWDMkW8M_s/hqdefault.jpg",
    "duration": 240
  },
  {
    "id": "pF42On34nZY",
    "title": "Kotha Kotha Khunjechhi Tomay",
    "artist": "Asha Bhosle",
    "thumbnail": "https://i.ytimg.com/vi/pF42On34nZY/hqdefault.jpg",
    "duration": 270
  },
  {
    "id": "AGUlYXqUKTM",
    "title": "Mon Bolchey",
    "artist": "Echo Bengali Movie Hits",
    "thumbnail": "https://i.ytimg.com/vi/AGUlYXqUKTM/hqdefault.jpg",
    "duration": 285
  },
  {
    "id": "sCu1hKTjQRs",
    "title": "Sandhya Belay Tumi Ami",
    "artist": "Asha Bhosle & R.D. Burman",
    "thumbnail": "https://i.ytimg.com/vi/sCu1hKTjQRs/hqdefault.jpg",
    "duration": 315
  },
  {
    "id": "RZt8UzEZ1a4",
    "fallbackIds": ["odAzrQ3NCbY", "uNrEs9Pis6w"],
    "title": "Se Pratham Prem Amar (Nilanjana)",
    "artist": "Nachiketa",
    "thumbnail": "https://i.ytimg.com/vi/RZt8UzEZ1a4/hqdefault.jpg",
    "duration": 310
  },
  {
    "id": "3Gg0GP8DxhU",
    "fallbackIds": ["dukVk7ks6us", "hbXuXt7gkFY", "m7JTkDgyeX4"],
    "title": "Dhake Jei Porlo Kathi",
    "artist": "Bengali Sharod Uttsav",
    "thumbnail": "https://i.ytimg.com/vi/3Gg0GP8DxhU/hqdefault.jpg",
    "duration": 250
  }
];

// --- Global Player State ---
let ytPlayer = null;
let isYtReady = false;
let currentTrackIndex = 0;
let isPlaying = false;
let isMuted = false;
let savedVolume = 80;
let progressInterval = null;

// --- Global YouTube API Callbacks ---
window.onYouTubeIframeAPIReady = function () {
  ytPlayer = new YT.Player('youtube-player', {
    height: '1',
    width: '1',
    videoId: playlist[0].id,
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'disablekb': 1,
      'fs': 0,
      'modestbranding': 1,
      'rel': 0,
      'enablejsapi': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
};

function onPlayerReady(event) {
  isYtReady = true;
  if (ytPlayer && ytPlayer.setVolume) {
    ytPlayer.setVolume(savedVolume);
  }
}

function onPlayerError(event) {
  console.warn('YouTube Player Error Code:', event.data);
  const currentTrack = playlist[currentTrackIndex];
  if (currentTrack && currentTrack.fallbackIds && currentTrack.fallbackIds.length > 0) {
    const fallbackId = currentTrack.fallbackIds.shift();
    if (ytPlayer && isYtReady) {
      ytPlayer.loadVideoById(fallbackId);
      return;
    }
  }
  // Auto advance if no fallback works
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) nextBtn.click();
}

function onPlayerStateChange(event) {
  const playIcon = document.getElementById('playIcon');
  const playBtn = document.getElementById('playBtn');
  const albumArt = document.getElementById('albumArt');

  if (typeof YT !== 'undefined') {
    if (event.data === YT.PlayerState.PLAYING) {
      isPlaying = true;
      if (playIcon) playIcon.className = 'fas fa-pause';
      if (playBtn) playBtn.classList.add('playing');
      if (albumArt) albumArt.classList.add('playing');
      startProgressTracking();
    } else if (event.data === YT.PlayerState.PAUSED) {
      isPlaying = false;
      if (playIcon) playIcon.className = 'fas fa-play';
      if (playBtn) playBtn.classList.remove('playing');
      if (albumArt) albumArt.classList.remove('playing');
      stopProgressTracking();
    } else if (event.data === YT.PlayerState.ENDED) {
      const nextBtn = document.getElementById('nextBtn');
      if (nextBtn) nextBtn.click();
    }
  }
}

function startProgressTracking() {
  stopProgressTracking();
  const currentTimeEl = document.getElementById('currentTime');
  const totalTimeEl = document.getElementById('totalTime');
  const progressFill = document.getElementById('progressFill');
  const seekSlider = document.getElementById('seekSlider');

  progressInterval = setInterval(() => {
    if (ytPlayer && ytPlayer.getCurrentTime && ytPlayer.getDuration) {
      const cur = ytPlayer.getCurrentTime() || 0;
      const dur = ytPlayer.getDuration() || playlist[currentTrackIndex].duration || 1;
      if (currentTimeEl) currentTimeEl.innerText = formatTime(cur);
      if (totalTimeEl) totalTimeEl.innerText = formatTime(dur);
      const pct = (cur / dur) * 100;
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (seekSlider) seekSlider.value = pct;
    }
  }, 400);
}

function stopProgressTracking() {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds <= 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// --- DOM Event Listener Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  const bgImage = document.getElementById('bgImage');
  const particleCanvas = document.getElementById('particle-canvas');
  const pCtx = particleCanvas.getContext('2d');

  const topClock = document.getElementById('topClock');
  const onlineCount = document.getElementById('onlineCount');

  const playBtn = document.getElementById('playBtn');
  const playIcon = document.getElementById('playIcon');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const albumArt = document.getElementById('albumArt');
  const trackTitle = document.getElementById('trackTitle');
  const trackArtist = document.getElementById('trackArtist');

  const muteBtn = document.getElementById('muteBtn');
  const muteIcon = document.getElementById('muteIcon');
  const volumeRange = document.getElementById('volumeRange');
  const currentTimeEl = document.getElementById('currentTime');
  const totalTimeEl = document.getElementById('totalTime');
  const progressFill = document.getElementById('progressFill');
  const seekSlider = document.getElementById('seekSlider');

  // 1. LIVE CLOCK & ONLINE COUNTER
  function updateClock() {
    const now = new Date();
    if (topClock) {
      topClock.innerText = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }
  }
  setInterval(updateClock, 1000);
  updateClock();

  let currentCount = 4;
  setInterval(() => {
    const delta = Math.floor(Math.random() * 3) - 1;
    currentCount = Math.max(3, Math.min(5, currentCount + delta));
    if (onlineCount) onlineCount.innerText = currentCount;
  }, 4000);

  // 2. PARALLAX BACKGROUND
  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 55;
    const y = (window.innerHeight / 2 - e.clientY) / 55;
    if (bgImage) bgImage.style.transform = `scale(1.03) translate3d(${x}px, ${y}px, 0)`;
  });

  // 3. CANVAS FIREFLIES PARTICLE ENGINE
  let particles = [];
  const particleDensity = 50;

  function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    initParticles();
  }
  window.addEventListener('resize', resizeCanvas);

  class Firefly {
    constructor() {
      this.reset();
      this.y = Math.random() * particleCanvas.height;
    }
    reset() {
      this.x = Math.random() * particleCanvas.width;
      this.y = particleCanvas.height + 15;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = -(Math.random() * 0.6 + 0.2);
      this.speedX = Math.random() * 0.4 - 0.2;
      this.alpha = Math.random() * 0.5 + 0.3;
      this.pulseSpeed = Math.random() * 0.04 + 0.01;
      this.pulseOffset = Math.random() * Math.PI;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y / 30) * 0.15;
      this.alphaVal = this.alpha + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.25;
      this.alphaVal = Math.max(0.1, Math.min(0.9, this.alphaVal));
      if (this.y < -15 || this.x < -15 || this.x > particleCanvas.width + 15) {
        this.reset();
      }
    }
    draw() {
      pCtx.save();
      pCtx.shadowBlur = this.size * 4;
      pCtx.shadowColor = 'rgba(255, 215, 0, 0.8)';
      pCtx.fillStyle = `rgba(255, 225, 120, ${this.alphaVal})`;
      pCtx.beginPath();
      pCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      pCtx.fill();
      pCtx.restore();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleDensity; i++) {
      particles.push(new Firefly());
    }
  }

  function animateParticles() {
    pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
  }

  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
  initParticles();
  animateParticles();

  // 4. PLAYER CONTROLS
  function loadTrack(index, autoPlay = true) {
    currentTrackIndex = index;
    const track = playlist[index];
    if (trackTitle) trackTitle.innerText = `"${track.title}"`;
    if (trackArtist) trackArtist.innerText = track.artist;
    if (totalTimeEl) totalTimeEl.innerText = formatTime(track.duration);
    if (albumArt) albumArt.style.backgroundImage = `url('${track.thumbnail}')`;

    if (ytPlayer && isYtReady) {
      if (autoPlay) {
        ytPlayer.loadVideoById(track.id);
      } else {
        ytPlayer.cueVideoById(track.id);
      }
    }
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (ytPlayer && isYtReady) {
        if (isPlaying) {
          ytPlayer.pauseVideo();
        } else {
          ytPlayer.playVideo();
        }
      } else {
        isPlaying = !isPlaying;
        if (isPlaying) {
          if (playIcon) playIcon.className = 'fas fa-pause';
          if (playBtn) playBtn.classList.add('playing');
          if (albumArt) albumArt.classList.add('playing');
        } else {
          if (playIcon) playIcon.className = 'fas fa-play';
          if (playBtn) playBtn.classList.remove('playing');
          if (albumArt) albumArt.classList.remove('playing');
        }
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
      loadTrack(currentTrackIndex, isPlaying);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
      loadTrack(currentTrackIndex, isPlaying);
    });
  }

  if (seekSlider) {
    seekSlider.addEventListener('input', (e) => {
      if (ytPlayer && isYtReady && ytPlayer.getDuration) {
        const dur = ytPlayer.getDuration() || playlist[currentTrackIndex].duration;
        const targetSec = (e.target.value / 100) * dur;
        ytPlayer.seekTo(targetSec, true);
        if (currentTimeEl) currentTimeEl.innerText = formatTime(targetSec);
        if (progressFill) progressFill.style.width = `${e.target.value}%`;
      }
    });
  }

  if (volumeRange) {
    volumeRange.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      savedVolume = val;
      if (ytPlayer && isYtReady && ytPlayer.setVolume) {
        ytPlayer.setVolume(val);
      }
      if (muteIcon) {
        muteIcon.className = (val === 0) ? 'fas fa-volume-mute' : 'fas fa-volume-up';
      }
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      if (isMuted) {
        if (ytPlayer && isYtReady && ytPlayer.unMute) {
          ytPlayer.unMute();
          ytPlayer.setVolume(savedVolume);
        }
        if (volumeRange) volumeRange.value = savedVolume;
        if (muteIcon) muteIcon.className = 'fas fa-volume-up';
        isMuted = false;
      } else {
        if (ytPlayer && isYtReady && ytPlayer.mute) {
          ytPlayer.mute();
        }
        if (volumeRange) volumeRange.value = 0;
        if (muteIcon) muteIcon.className = 'fas fa-volume-mute';
        isMuted = true;
      }
    });
  }

  // Load track 0 initially without autoPlay
  loadTrack(0, false);
});
