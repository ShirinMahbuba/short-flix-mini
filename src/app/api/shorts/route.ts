// src/app/api/shorts/route.ts
import { NextResponse } from 'next/server';

const shorts = [
  { id: 1, title: "Cute Cat Playing", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tags: ["cat", "funny", "animal"] },
  { id: 2, title: "Beautiful Nature", videoUrl: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4", tags: ["nature", "relax"] },
  { id: 3, title: "Fast Car Driving", videoUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4", tags: ["car", "speed"] },
  { id: 4, title: "Funny Dance", videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", tags: ["dance", "funny"] },
  { id: 5, title: "Ocean Waves", videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-ocean-4188-small.mp4", tags: ["ocean", "relax"] },
  { id: 6, title: "Baby Laughing", videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-baby-laughing-in-the-park-4221-small.mp4", tags: ["baby", "cute"] },
  { id: 7, title: "Drone View Forest", videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-drone-over-a-forest-4190-small.mp4", tags: ["drone", "nature"] },
  { id: 8, title: "Cooking Pasta", videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cooking-pasta-in-boiling-water-4195-small.mp4", tags: ["cooking", "food"] },
];

export async function GET() {
  return NextResponse.json(shorts);
}