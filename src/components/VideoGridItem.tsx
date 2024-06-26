import { useEffect, useRef, useState } from "react";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current == null) return;
    if (
      isVideoPlaying &&
      videoRef.current.paused &&
      videoRef.current.readyState > 2
    ) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          alt=""
          className={`block w-full h-full object-cover transition[border-radius] duration-200 ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
          } `}
        ></img>
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div>
        <video
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
          } `}
          ref={videoRef}
          muted
          playsInline
          src={videoUrl}
        ></video>
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="rounded flex-shrink-0">
          <img
            className="w-12 h-12 rounded-full"
            src={channel.profileUrl}
            alt={channel.name}
            title={channel.name}
          ></img>
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
            {channel.name}
          </a>
          <a href={`/watch?v=${id}`} className="text-secondary-text text-sm">
            {VIEW_FORMATTER.format(views)} View • {formatTimeAgo(postedAt)}
          </a>
        </div>
      </div>
    </div>
  );
}
