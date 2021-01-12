import React from "react";
import './Soundcloud.css';

const SoundCloudWidget = () => {
  const widgetHeight = "450px"
  const widgetWidth = "100%"

  return (
    <div className="soundCloudWidget" id="soundCloudWidget">
      <iframe
        className="iframe"
        width={widgetWidth}
        height={widgetHeight}
        scrolling="no"
        frameBorder="no"
        title="SoundCloud"
        src="https://w.soundcloud.com/player/?url=https://soundcloud.com/kiko_djofficial&amp;auto_play=false&amp;buying=true&amp;liking=true&amp;download=true&amp;sharing=true&amp;show_artwork=true&amp;show_comments=true&amp;show_playcount=true&amp;show_user=true&amp;hide_related=false&amp;visual=true&amp;start_track=0&amp;callback=true"
      ></iframe>
    </div>
  )
}

export default SoundCloudWidget
