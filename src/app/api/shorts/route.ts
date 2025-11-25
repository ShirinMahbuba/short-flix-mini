// src/app/api/shorts/route.ts
import { NextResponse } from 'next/server';

const shorts = [
  { id: 1, title: "Cute Cat Playing", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tags: ["cat", "funny", "animal"] },
  { id: 2, title: "Beautiful Nature", videoUrl: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4", tags: ["nature", "relax"] },
  { id: 3, title: "Fast Car Driving", videoUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4", tags: ["car", "speed"] },
  { id: 4, title: "Cute Bunny Animation", videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4", tags: ["animation", "funny"] },
   { id: 5, title: "Ocean Scene", videoUrl: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4", tags: ["ocean", "relax"] },
  { id: 6, title: "Forest Drone", videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/av1/360/Big_Buck_Bunny_360_10s_1MB.mp4", tags: ["drone", "forest"] },
  { id: 7, title: "Cooking Demo", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tags: ["cooking", "food"] },
  { id: 8, title: "Nature Walk", videoUrl: "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_1MB.mp4", tags: ["nature", "adventure"] },
  { id: 9, title: "City Lights", videoUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4", tags: ["city", "night"] },
];

export async function GET() {
  return NextResponse.json(shorts);
}