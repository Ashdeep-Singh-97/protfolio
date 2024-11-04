export default function Home() {
  return (
    <section id="home" className="py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-row text-center justify-center">
          <div className="mr-40 mt-20 md:mr-64 flex flex-col space-y-14 items-center">
            <a href="https://in.linkedin.com/in/ashdeep-singh-56b128193?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" >
              <img
                src="/linkedin-logo.png"
                alt="LinkedIn"
                className="h-10 w-10 hover:opacity-60 transition-opacity"
              />
            </a>
            <a href="https://github.com/Ashdeep-Singh-97" target="_blank" >
              <img
                src="/github.png"
                alt="GitHub"
                className="h-10 w-10 hover:opacity-60 transition-opacity"
              />
            </a>
            <a href="mailto:ashdeepsingh1997@gmail.com" target="_blank" >
              <img
                src="/gmail.png"
                alt="Gmail"
                className="h-10 w-10 hover:opacity-60 transition-opacity"
              />
            </a>
          </div>
          <div className="flex flex-col justify-start items-start space-y-8">
            <div className="space-y-8">
              <div className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Ashdeep Singh <span className="inline-block animate-wave">👋</span>
              </div>
              <div className="text-gray-500 md:text-xl dark:text-gray-400 flex">
                Turning Caffeine into Code
              </div>
            </div>
            <div>
              <div className="text-gray-500 md:text-xl dark:text-gray-400 flex">
                I'm a full stack developer based in Chandigarh.
              </div>
              <div className="text-gray-500 md:text-xl dark:text-gray-400 flex">
                Always looking forward to working with you.
              </div>
            </div>
            <div>
              <button className="bg-black text-primary-foreground text-2xl text-white rounded-lg px-10 py-4 mt-7 flex items-center">
                <a target="_blank" href="https://in.linkedin.com/in/ashdeep-singh-56b128193?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F">
                  Say Hello
                </a>
              </button>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-10 lg:ml-16 pl-12">
            <div className="blob-animation w-[300px] h-[300px] rounded-full overflow-hidden">
              <img
                src="/Myself.jpeg"
                alt="Ashdeep Singh"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .blob-animation {
        transform: scale(2.0);
          clip-path: path(
  "M 300 300 C 250 30, 300 200, 280 200 C 280 250, 200 300, 150 250 C 70 220, 80 150, 200 100 Z"
);

          animation: blob 8s infinite;
        }
        @keyframes blob {
          0% {
            clip-path: path(
              "M 150 75 C 200 20, 250 80, 220 150 C 220 200, 160 250, 100 200 C 50 180, 60 100, 150 75 Z"
            );
          }
          33% {
            clip-path: path(
              "M 150 50 C 220 20, 270 80, 220 150 C 200 230, 140 250, 80 200 C 50 150, 90 100, 150 50 Z"
            );
          }
          66% {
            clip-path: path(
              "M 150 60 C 230 50, 270 100, 200 160 C 160 220, 130 270, 80 180 C 40 120, 80 80, 150 60 Z"
            );
          }
          100% {
            clip-path: path(
              "M 150 75 C 200 20, 250 80, 220 150 C 220 200, 160 250, 100 200 C 50 180, 60 100, 150 75 Z"
            );
          }
        }
      `}</style>
    </section>
  );
}
