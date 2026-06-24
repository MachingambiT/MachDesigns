import { useState, useRef } from "react";
import { Play, Square, Loader2 } from "lucide-react";

export default function AudioIntro({ text = "Welcome to my digital design portfolio. I craft premium, minimalist websites tailored to elevate your brand." }: { text?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fetchAndPlay = async () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }

    if (audioUrl) {
      audioRef.current?.play();
      setIsPlaying(true);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });

      if (!response.ok) throw new Error("Failed to generate audio");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);

      if (!audioRef.current) {
        audioRef.current = new Audio(url);
        audioRef.current.onended = () => setIsPlaying(false);
      } else {
        audioRef.current.src = url;
      }

      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error(error);
      alert("Failed to load audio introduction. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={fetchAndPlay}
      disabled={isLoading}
      className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-zinc-200 hover:border-emerald-500/50 transition-all duration-300 disabled:opacity-50 shadow-sm"
    >
      <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : isPlaying ? (
          <Square className="w-4 h-4 fill-current" />
        ) : (
          <Play className="w-4 h-4 fill-current ml-0.5" />
        )}
      </div>
      <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
        {isPlaying ? "Pause Introduction" : "Listen to Introduction"}
      </span>
    </button>
  );
}
