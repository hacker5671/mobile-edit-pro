"use client";

import { useState } from "react";
import VideoUploader from "@/components/VideoUploader";

export default function Editor() {

  const [video,setVideo]=useState("");

  return(

<div className="editor">

<aside className="sidebar">

<h2>Mobile Edit Pro</h2>

<VideoUploader
onVideoSelect={setVideo}
/>

<button>🎵 Audio</button>
<button>📝 Text</button>
<button>✨ Effects</button>
<button>🎬 Transition</button>
<button>📤 Export</button>

</aside>

<main className="workspace">

<div className="preview">

{video?(
<video
src={video}
controls
width="100%"
/>
):(
<h2>Import a video</h2>
)}

</div>

<div className="timeline">

<h3>Timeline</h3>

<div className="track">

No clips yet...

</div>

</div>

</main>

</div>

);

}