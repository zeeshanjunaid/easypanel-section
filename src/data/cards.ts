import chatwootImg from "../assets/icons/chatwoot.svg";
import gravImg from "../assets/icons/grav.svg";
import laravelImg from "../assets/icons/laravel.svg";
import nextcloudImg from "../assets/icons/nextcloud.svg";
import nextjsImg from "../assets/icons/nextjs.svg";
import pythonImg from "../assets/icons/python.svg";
import roundcubeImg from "../assets/icons/roundcube.svg";
import strapImg from "../assets/icons/strap.svg";
import strapiImg from "../assets/icons/strapi.svg";
import wordpressImg from "../assets/icons/wp.svg";
export type CardType = {
  id: number;
  title: string;
  description: string;
  bg: string;
  image: string;
};

export const cardsData: CardType[] = [
  {
    id: 1,
    title: "Strapi",
    description:
      "Strapi is a leading open-source headless CMS that is fully customizable and built with 100% JavaScript.",
    image: strapiImg,
    bg: "linear-gradient(to right bottom, rgba(73, 69, 255, 0.06) 6%, rgba(255, 255, 255, .25) 94%)",
  },
  {
    id: 2,
    title: "WordPress",
    description:
      "Strapi is a leading open-source headless CMS that is fully customizable and built with 100% JavaScript.",
    image: wordpressImg,
    bg: "linear-gradient(to right bottom, rgba(15, 140, 195, 0.06) 6%, rgba(255, 255, 255, .25) 94%)",
  },
  {
    id: 3,
    title: "Laravel",
    description:
      "Strapi is a leading open-source headless CMS that is fully customizable and built with 100% JavaScript.",
    image: laravelImg,
    bg: "linear-gradient(to right bottom, rgba(255, 45, 32, 0.06) 6%, rgba(255, 255, 255, .25) 94%)",
  },
  {
    id: 4,
    title: "Next.js",
    description:
      "Strapi is a leading open-source headless CMS that is fully customizable and built with 100% JavaScript.",
    image: nextjsImg,
    bg: "linear-gradient(to right bottom, rgba(0, 0, 0, 0.06) 6%, rgba(255, 255, 255, .25) 94%)",
  },
  {
    id: 5,
    title: "Python",
    description:
      "Strapi is a leading open-source headless CMS that is fully customizable and built with 100% JavaScript.",
    image: pythonImg,
    bg: "linear-gradient(to right bottom, rgba(255, 228, 105, 0.06) 6%, rgba(255, 255, 255, .25) 94%)",
  },
  {
    id: 6,
    title: "Chatwoot",
    description:
      "Strapi is a leading open-source headless CMS that is fully customizable and built with 100% JavaScript.",
    image: chatwootImg,
    bg: "linear-gradient(to right bottom, rgba(86,185,253, 0.06) 6%, rgba(255, 255, 255, .25) 94%)",
  },
  {
    id: 7,
    title: "Grav",
    description:
      "Strapi is a leading open-source headless CMS that is fully customizable and built with 100% JavaScript.",
    image: gravImg,
    bg: "linear-gradient(to right bottom, rgba(0, 0, 0, 0.06) 6%, rgba(255, 255, 255, .25) 94%)",
  },
  {
    id: 8,
    title: "NextCloud",
    description:
      "Strapi is a leading open-source headless CMS that is fully customizable and built with 100% JavaScript.",
    image: nextcloudImg,
    bg: "linear-gradient(to right bottom, rgba(0, 130, 201, 0.06) 6%, rgba(255, 255, 255, .25) 94%)",
  },
  {
    id: 9,
    title: "Strapi",
    description:
      "Strapi is a leading open-source headless CMS that is fully customizable and built with 100% JavaScript.",
    image: strapImg,
    bg: "linear-gradient(to right bottom, rgba(65, 169, 72, 0.04) 6%, rgba(255, 255, 255, .25) 94%)",
  },
  {
    id: 10,
    title: "Roundcube",
    description:
      "Strapi is a leading open-source headless CMS that is fully customizable and built with 100% JavaScript.",
    image: roundcubeImg,
    bg: "linear-gradient(to right bottom, rgba(55, 190, 255, 0.06) 6%, rgba(255, 255, 255, .25) 94%)",
  },
];
