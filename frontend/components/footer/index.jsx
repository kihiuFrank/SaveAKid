export default function Footer() {
  return (
    <div className="flex justify-between items-center w-full flex-col gap-1 bg-cornflowerblue text-white">
      <div>
        <img
          id="badge-button"
          className="w-32 h-32 "
          src="/charity.png"
          alt="footer IMG"
        />
      </div>
      <div className="flex gap-2 mb-1">
        <div>
          <a href="https://github.com/kihiuFrank/SaveAKid" target={"_blank"}>
            Leave a star on Github
          </a>
        </div>
        <div>
          <a href="https://twitter.com/frankline_kihiu" target={"_blank"}>
            Follow us on Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
