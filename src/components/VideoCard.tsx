// src/components/VideoCard.tsx
interface Short {
  id: number;
  title: string;
  videoUrl: string;
  tags: string[];
}

interface Props {
  short: Short;
  onClick: () => void;
  isLiked: boolean;
  onLike: () => void;
}

export default function VideoCard({ short, onClick, isLiked, onLike }: Props) {
  return (
    <div className="group relative cursor-pointer" onClick={onClick}>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <video
          src={short.videoUrl}
          className="w-full aspect-video object-cover group-hover:scale-110 transition duration-300"
          muted
          loop
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{short.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {short.tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onLike();
        }}
        className="absolute top-2 right-2 bg-black bg-opacity-70 p-2 rounded-full"
      >
        {isLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
}