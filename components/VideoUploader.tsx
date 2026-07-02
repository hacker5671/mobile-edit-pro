"use client";

import { useRef } from "react";

export default function VideoUploader({
  onVideoSelect,
}: {
  onVideoSelect: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    onVideoSelect(url);
  }

  return (
    <div>

      <button onClick={() => inputRef.current?.click()}>
        📂 Import Video
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        hidden
        onChange={upload}
      />

    </div>
  );
}