// src/components/VideoGrid.tsx
'use client';

import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';

interface Short {
  id: number;
  title: string;
  videoUrl: string;
  tags: string[];
}

export default function VideoGrid() {
  const [shorts, setShorts] = useState<Short[]>([]);
  const [filtered, setFiltered] = useState<Short[]>([]);
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<Short | null>(null);
  const [likes, setLikes] = useState<{[key: number]: boolean}>({});

  useEffect(() => {
    fetch('/api/shorts')
      .then(res => res.json())
      .then(data => {
        setShorts(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('likes');
    if (saved) setLikes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    let result = shorts;

    if (search) {
      result = result.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));
    }

    if (selectedTag !== 'all') {
      result = result.filter(s => s.tags.includes(selectedTag));
    }

    setFiltered(result);
  }, [search, selectedTag, shorts]);

  const allTags = ['all', ...Array.from(new Set(shorts.flatMap(s => s.tags)))];

  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search videos..."
          className="w-full md:w-96 p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-red-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2 mt-4 flex-wrap">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full ${selectedTag === tag ? 'bg-red-600' : 'bg-gray-800'} hover:bg-red-700 transition`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((short) => (
          <VideoCard
            key={short.id}
            short={short}
            onClick={() => setSelectedVideo(short)}
            isLiked={likes[short.id]}
            onLike={() => setLikes(prev => ({...prev, [short.id]: !prev[short.id]}))}
          />
        ))}
      </div>

      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </>
  );
}