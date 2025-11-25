
'use client';
import VideoGrid from '@/components/VideoGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-10 mt-10">
          Short<span className="text-red-600">Flix</span>
        </h1>
        <VideoGrid />
      </div>
    </main>
  );
}