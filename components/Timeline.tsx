"use client";

type TimelineProps = {
  duration: number;
  currentTime: number;
  onSeek: (time: number) => void;
};

export default function Timeline({
  duration,
  currentTime,
  onSeek,
}: TimelineProps) {
  return (
    <div className="timeline-panel">
      <input
        type="range"
        min={0}
        max={duration || 0}
        step={0.1}
        value={currentTime}
        onChange={(e) => onSeek(Number(e.target.value))}
      />

      <div className="time-info">
        <span>{currentTime.toFixed(1)} s</span>
        <span>{duration.toFixed(1)} s</span>
      </div>
    </div>
  );
}