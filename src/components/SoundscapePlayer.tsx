import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const SoundscapePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  const playSingingBowlTone = (ctx: AudioContext) => {
    const fundamental = 216; // 432Hz harmonic
    const harmonics = [fundamental, fundamental * 1.5, fundamental * 2.76, fundamental * 3.82];
    const gains = [0.12, 0.07, 0.04, 0.02];

    const now = ctx.currentTime;
    harmonics.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(gains[idx], now + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 5.5);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 6);
    });
  };

  const toggleSoundscape = () => {
    if (isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    } else {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Play immediate chime
      playSingingBowlTone(ctx);

      // Play chime periodically every 9 seconds
      const interval = window.setInterval(() => {
        if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
          playSingingBowlTone(audioCtxRef.current);
        }
      }, 9000);
      timerRef.current = interval;

      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={toggleSoundscape}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 text-xs font-medium ${
          isPlaying
            ? 'bg-[#27443B] text-[#FFF8F6] border-[#C5A880]/50 shadow-[#27443B]/20 scale-105'
            : 'bg-white/90 hover:bg-white text-[#594E4A] hover:text-[#27443B] border-[#C5A880]/35 hover:border-[#C5A880]'
        }`}
        title={isPlaying ? 'Tắt âm hưởng thiền định' : 'Bật chuông thiền định 432Hz'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#E0C298] animate-pulse" />
            <span className="hidden sm:inline">Âm hưởng tĩnh lặng</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#C5A880]" />
            <span className="hidden sm:inline">Chuông thiền</span>
          </>
        )}
      </button>
    </div>
  );
};
