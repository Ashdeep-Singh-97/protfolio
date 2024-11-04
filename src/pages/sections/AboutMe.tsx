import pdf from "/public/sample.pdf";

export default function AboutMe() {
  return (
    <div id="about" className="py-12 md:py-24 lg:py-32 flex">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</div>
          <div className="mb-4 text-gray-500 dark:text-gray-500">My introduction</div>

        </div>
        <div className="flex flex-row justify-evenly items-center">
          <img
            alt="Profile picture"
            className="aspect-square overflow-hidden rounded-2xl object-cover"
            height={300}
            src="/public/Jiraiya.jpg"
            width={300}
          />
          <div className="space-y-4">
            <div className="mb-10">
            <p className="text-gray-700 dark:text-gray-600">
              A passionate full stack developer who loves working on projects.
            </p>
            <p className="text-gray-700 dark:text-gray-600 ">
              Efficient in MERN stack , Typescript, Next.js, Prisma and PostGre.
            </p>
            </div>
            <a href={pdf} download="Ashdeep Resume" target='_blank' className="inline-flex">
              <button className="flex w-fit h-fit flex-row border-solid border-2 border-black bg-black text-white p-4 rounded-xl">
                Download CV
                <svg
                  className=" ml-2 h-5 w-5 pt-1"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
