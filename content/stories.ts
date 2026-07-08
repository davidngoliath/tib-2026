// Home page → Their Stories section. 4 cards (Figma 669:732). Each has a video.
// Each card has its own brand background color (cycling yellow/pink/green/blue).
import type { ImageRef, Video } from "./types";

export type Story = {
  name: string;
  role: string; // subtitle under name
  image: ImageRef;
  video: Video; // "Watch Now"
  color: "yellow" | "pink" | "green" | "blue";
  featured?: boolean; // shown on the homepage
};

export const stories: Story[] = [
  {
    name: "Ron Finley",
    role: "Gangsta Gardner",
    color: "yellow",
    image: "/images/stories/ron-finley.jpg",
    video: { type: "embed", provider: "youtube", id: "CrdHqAIMYGA" },
    featured: true,
  },
  {
    name: "Hannah Fraser",
    role: "Performance Artist",
    color: "pink",
    image: "/images/stories/hannah-fraser.jpg",
    video: { type: "embed", provider: "youtube", id: "frITQRRVmQk" },
    featured: true,
  },
  {
    name: "Rosie Perez",
    role: "Actor & Activist",
    color: "green",
    image: "/images/stories/rosie-perez.jpg",
    video: { type: "embed", provider: "youtube", id: "plhH4MKl92k" },
    featured: true,
  },
  {
    name: "Breana Schroeder",
    role: "Tandem Surfer",
    color: "blue",
    image: "/images/stories/breana-schroeder.jpg",
    video: { type: "embed", provider: "youtube", id: "OY1YyrBuAJA" },
    featured: true,
  },
  {
    name: "Joshua Coombes",
    role: "#DoSomethingForNothing Founder, Hairdresser & Barber",
    color: "yellow",
    image: "/images/stories/joshua-coombes.jpg",
    video: { type: "embed", provider: "youtube", id: "5uAw-WWmR_o" },
  },
  {
    name: "Tiffany Parsons",
    role: "Founder of Shine on Sierra Leone",
    color: "pink",
    image: "/images/stories/tiffany-parsons.jpg",
    video: { type: "embed", provider: "youtube", id: "JD0d-PRsCk8" },
  },
  {
    name: "Jlouis Mills",
    role: "Actor",
    color: "green",
    image: "/images/stories/jlouis-mills.jpg",
    video: { type: "embed", provider: "youtube", id: "YkZBS3TKNto" },
  },
  {
    name: "Curt Smith",
    role: "Founder, Vocalist, Bass Guitarist, Tears for Fear",
    color: "blue",
    image: "/images/stories/curt-smith.jpg",
    video: { type: "embed", provider: "youtube", id: "fo7L2vlHU6g" },
  },
  {
    name: "Nikia Phoenix",
    role: "Model, Influencer, Activist, Black Girl Beautiful",
    color: "yellow",
    image: "/images/stories/nikia-phoenix.jpg",
    video: { type: "embed", provider: "youtube", id: "tSKS3a-RNrw" },
  },
  {
    name: "Father Greg Boyle",
    role: "Homeboy Industries",
    color: "pink",
    image: "/images/stories/father-greg-boyle.jpg",
    video: { type: "embed", provider: "youtube", id: "I3scrRRciso" },
  },
  {
    name: "Milla Bizotto",
    role: "Student & Optical Course Athlete",
    color: "green",
    image: "/images/stories/milla-bizotto.jpg",
    video: { type: "embed", provider: "youtube", id: "dcsk1meh77w" },
  },
  {
    name: "Marleen Verbeek",
    role: "Actor & Model",
    color: "blue",
    image: "/images/stories/marleen-verbeek.jpg",
    video: { type: "embed", provider: "youtube", id: "Seb9DED-Ohc" },
  },
  {
    name: "Alyssa Saunders",
    role: "Arts Student, Poet & Hip Hop Artist",
    color: "yellow",
    image: "/images/stories/alyssa-saunders.jpg",
    video: { type: "embed", provider: "youtube", id: "uPMBkN3mX3U" },
  },
  {
    name: "Lucy Vives",
    role: "Model & Social Influencer",
    color: "pink",
    image: "/images/stories/lucy-vives.jpg",
    video: { type: "embed", provider: "youtube", id: "fI37Z1phs0E" },
  },
  {
    name: "John Pearson",
    role: "Male Supermodel",
    color: "green",
    image: "/images/stories/john-pearson.jpg",
    video: { type: "embed", provider: "youtube", id: "E2pXY2whAsY" },
  },
  {
    name: "RSNY",
    role: "Reggae Music Group",
    color: "blue",
    image: "/images/stories/rsny.jpg",
    video: { type: "embed", provider: "youtube", id: "kkGOJyy778A" },
  },
  {
    name: "Tommy Zee",
    role: "Music Producer",
    color: "yellow",
    image: "/images/stories/tommy-zee.jpg",
    video: { type: "embed", provider: "youtube", id: "lPXcoSPC8FI" },
  },
  {
    name: "Ramsey Yousef",
    role: "Comedian",
    color: "pink",
    image: "/images/stories/ramsey-yousef.jpg",
    video: { type: "embed", provider: "youtube", id: "nQrxNxSok74" },
  },
  {
    name: "Josy Paul",
    role: "Advertising Executive",
    color: "green",
    image: "/images/stories/josy-paul.jpg",
    video: { type: "embed", provider: "youtube", id: "ZpSk3V8jC-o" },
  },
];

export const featuredStories = stories.filter((story) => story.featured);
