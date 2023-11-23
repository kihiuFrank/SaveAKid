import Image from "next/image";
import heroImg from "../public/img/01.png";
import Container from "./containers/Container";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap relative py-32">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              A donations platform for supporting children in Africa.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              SaveAKid is a donations platform aiming to provide support for
              children and young people each year by creating a space where
              charity organizations and children homes are connected with donors
              from all over the world. <br /> <br />
              When you make a donation today, you're not only creating a
              brighter world, you are also helping a child meet some of their
              greatest needs. <br /> <br /> Support a child in need by making a
              donation today!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Donate Now
              </a>
              {/* <a
                href=""
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <span> View Homes</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
