import {
  IconDefinition,
  faCube,
  faGamepad,
  faGun,
  faHatCowboy,
  faRobot,
  faRocket,
  faRodSnake,
} from "@fortawesome/free-solid-svg-icons";

export type DeadProject = {
  title: string;
  description: string;
  icon: IconDefinition;
  survival: string;
};

export const theGraveyard: DeadProject[] = [
  {
    title: "Spacehut",
    description:
      "Spacehut was a project I've invested quite some time in it. It was a chatting application that cares about its community. Due to my lack of motivation in pursuing the project, I've abandoned it.",
    icon: faRocket,
    survival: "2021-2022",
  },
  {
    title: "Xenomorph",
    description:
      "Xenomorph was a Discord bot made for encryption, decryption, encoding, decoding, etc. written in Go, my first project in Go, that I've abandoned due to Discord's support being absolute madness and myself not wanting to pay for a VPS when only a few commands were used per day.",
    icon: faRobot,
    survival: "2020-2022",
  },
  {
    title: 'All-in-one "Hacking" Tool',
    description:
      'An attempt at making an all-in-one "hacking" tool with some features like port scanning, bruteforce attack, etc. Died really quickly as I believed it served no real purpose',
    icon: faHatCowboy,
    survival: "2021-2021",
  },
  {
    title: "UE4 Game",
    description:
      "After moving away from Minecraft and CS:GO, I wanted to create my own basic FPS game in Unreal Engine 4 to get started into something new. After getting the core mechanics the project has been abandoned due to the lack of skills.",
    icon: faGamepad,
    survival: "2020-2021",
  },
  {
    title: "Minecraft Client",
    description:
      "A Minecraft cheating client, named Mutation, that I've worked on for some time. After losing interest in the Minecraft cheating scene, it has been abandoned.",
    icon: faCube,
    survival: "2017-2020",
  },
  {
    title: "minecraft.py",
    description:
      "An attempt at making Minecraft in Python that survived only a few days...",
    icon: faRodSnake,
    survival: "2019-2019",
  },
  {
    title: "CS:GO Client",
    description:
      "A CS:GO cheating client, with no specific name, that I've worked on for some time. After losing interest in the CS:GO game itself, it has been abandoned.",
    icon: faGun,
    survival: "2019-2019",
  },
];
