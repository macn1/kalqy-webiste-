import { VideoEmbed } from "@/components/common/VideoEmbed";
import { site } from "@/data/site";

export function ProductDemoSection() {
  return (
    <section id="demo" className="section section--white" aria-labelledby="demo-title">
      <div className="container split">
        <div className="stack" data-reveal>
          <span className="eyebrow">See it in action</span>
          <h2 id="demo-title">Learning that moves with them</h2>
          <p className="lead">
            Kalqy uses computer vision and body tracking, so children become part of the game. They move, and the game responds.
          </p>
          <ul className="check-list">
            <li>Games follow hand, pose and body movement through a webcam.</li>
            <li>No tapping or swiping. Children use their whole body.</li>
            <li>No extra hardware beyond a webcam.</li>
          </ul>
        </div>
        <div className="plate" data-reveal="right">
          <VideoEmbed youtubeId={site.demoVideo.youtubeId} title={site.demoVideo.title} />
        </div>
      </div>
    </section>
  );
}
