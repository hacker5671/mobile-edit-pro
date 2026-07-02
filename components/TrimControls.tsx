"use client";

type Props = {
  start: number;
  end: number;
  duration: number;
  setStart: (v: number) => void;
  setEnd: (v: number) => void;
};

export default function TrimControls({
  start,
  end,
  duration,
  setStart,
  setEnd,
}: Props) {
  return (
    <div className="trim-panel">

      <h3>✂ Trim Video</h3>

      <label>Start</label>

      <input
        type="range"
        min={0}
        max={duration}
        step={0.1}
        value={start}
        onChange={(e)=>setStart(Number(e.target.value))}
      />

      <span>{start.toFixed(1)} sec</span>

      <label>End</label>

      <input
        type="range"
        min={0}
        max={duration}
        step={0.1}
        value={end}
        onChange={(e)=>setEnd(Number(e.target.value))}
      />

      <span>{end.toFixed(1)} sec</span>

    </div>
  );
}