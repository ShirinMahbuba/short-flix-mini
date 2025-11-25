// src/components/VideoModal.tsx
interface Short {
  id: number;
  title: string;
  videoUrl: string;
  tags: string[];
}

interface Props {
  video: Short;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button className="text-white text-4xl mb-4" onClick={onClose}>×</button>
        <video
          src={video.videoUrl}
          className="w-full rounded-lg"
          controls
          autoPlay
        />
        <h2 className="text-2xl font-bold mt-4">{video.title}</h2>
        <div className="flex gap-2 mt-2">
          {video.tags.map(tag => (
            <span key={tag} className="bg-red-600 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}