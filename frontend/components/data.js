import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Ways to give.",
  desc: "We believes every child deserves a future. That's why we do whatever it takes - every day and in times of crisis - to ensure children grow up healthy, learning and safe. Especially those hardest to reach. But we can't do this important work without your support.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Give a Single Donation",
      desc: "When you donate to Save the Children, you're creating ripples of lasting change in children's lives and, ultimately, the future we share.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Give a monthly donation",
      desc: "Join us as a monthly donor and with your help, we can give children a better future.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Gift Catalog",
      desc: "Give your loved ones the most meaningful gifts anytime– a gift that gives back. There's something for every occasion to benefit children in need.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More ways to help",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Fundraise for Kids",
      desc: "There are endless ways that you can raise funds to support children in desperate need. Whether it’s an athletic challenge, a special occasion, or your own unique creation, you can make a big difference in a child's life…and have a great time doing it.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Participate in Events",
      desc: "Team Save the Children is our international fundraising program that provides athletes of all abilities the opportunity to take on a challenge while raising funds to bring a better future for children. ",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Volunteer",
      desc: "There are many ways you can volunteer to support our mission. From one-time opportunities to ongoing partnerships, your involvement on behalf of children can start a ripple of change - changing the lives of children and the future we all share. ",
      icon: <SunIcon />,
    },
    {
      title: "Advocate for Children",
      desc: "SaveAKid is an outspoken advocate for children. We work to ensure children's voices are heard, their rights are realized and their issues are given top priority. We educate and engage policymakers to champion policies and programs that improve children's lives, especially the most vulnerable, like those suffering in may parts of Africa. Join us in educating all refugee children and promoting global gender equality. ",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
