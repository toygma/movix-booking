import { AvengersBg, BlackPantherBg, DoctorStrangeBg, GuardiansBg, MarvelLogo, SpidermanBg } from "../../../core/images";

export const heroData = [
  {
    id: 1,
    title: "Captain America",
    year: "2018",
    duration: "2h 30m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    logo: MarvelLogo,
    background: GuardiansBg,
  },
  {
    id: 2,
    title: "Iron Man",
    year: "2019",
    duration: "3h 1m",
    genres: ["Action", "Adventure", "Drama"],
    logo: MarvelLogo,
    background: AvengersBg,
  },
  {
    id: 3,
    title: "Venom",
    year: "2021",
    duration: "2h 28m",
    genres: ["Action", "Adventure", "Fantasy"],
    logo: MarvelLogo,
    background: SpidermanBg,
  },
  {
    id: 4,
    title: "Spider-Man: No Way Home",
    year: "2022",
    duration: "2h 6m",
    genres: ["Action", "Adventure", "Fantasy"],
    logo: MarvelLogo,
    background: DoctorStrangeBg,
  },
  {
    id: 5,
    title: "DeadPool",
    year: "2018",
    duration: "2h 15m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    logo: MarvelLogo,
    background: BlackPantherBg,
  },
];

export const dummyTrailers = [
  {
    id: 1,
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=WpW36ldAqnM",
    title: "Marvel Television's Ironheart | Official Trailer | Disney+",
    description: "Join our hero on an epic journey across uncharted lands.",
  },
  {
    id: 2,
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-sAOWhvheK8",
    title: "Marvel Studios’ Thunderbolts* | Final Trailer | In Theaters May 2",
    description:
      "A heartwarming tale of love, laughter, and unexpected moments.",
  },
  {
    id: 3,
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1pHDWnXmK7Y",
    title: "Captain America: Brave New World | Official Trailer",
    description: "A suspenseful story full of twists and dark secrets.",
  },
  {
    id: 4,
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=umiKiW4En9g",
    title: "Marvel Animation’s What If…? Season 3 | Official Trailer | Disney+",
    description:
      "Explore distant galaxies and futuristic worlds in this sci-fi epic.",
  },
];
