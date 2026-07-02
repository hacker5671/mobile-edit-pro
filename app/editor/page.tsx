export default function Editor() {
  return (
    <div className="editor">

      <aside className="sidebar">
        <h2>Mobile Edit Pro</h2>

        <button>📂 Import</button>
        <button>🎵 Audio</button>
        <button>📝 Text</button>
        <button>✨ Effects</button>
        <button>🎬 Transitions</button>
        <button>📤 Export</button>
      </aside>

      <main className="workspace">

        <div className="preview">
          <h1>Video Preview</h1>

          <video controls width="100%">
          </video>
        </div>

        <div className="timeline">
          <h3>Timeline</h3>

          <div className="track">
            Drag clips here...
          </div>

        </div>

      </main>

    </div>
  );
}