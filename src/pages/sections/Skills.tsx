export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</div>
          <div className="mb-4 text-gray-500 dark:text-gray-500">My technical level</div>
        </div>
        <div className="justify-around flex flex-row space-x-4">
          <div className="w-96 rounded-lg border border-black bg-card p-6 shadow-sm items-center justify-center flex flex-col">
            <h3 className="mb-4 text-xl font-bold">Frontend Developer</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-500 space-y-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="w-96 rounded-lg border border-black bg-card p-6 shadow-sm items-center justify-center flex flex-col">
            <h3 className="mb-4 text-xl font-bold">Backend Developer</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-500 space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Prisma</li>
              <li>PostgreSQL</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="w-96 rounded-lg border border-black bg-card p-6 shadow-sm items-center justify-center flex flex-col">
            <h3 className="mb-4 text-xl font-bold">Miscellaneous</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-500 space-y-2">
              <li>Supertest</li>
              <li>Git & Github</li>
              <li>CI / CD</li>
              <li>Deployment</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 text-gray-500 dark:text-gray-500 text-xl">
        <div className="flex justify-center mt-10 text-gray-500 dark:text-gray-500 text-xl">
          <span>
            Checkout my blogs at{" "}
            <a target="_blank" className="text-blue-600 underline" href="https://arshthecoder.hashnode.dev/?source=top_nav_blog_home">Hashnode</a>{" "}
            and{" "}
            <a target="_blank" className="text-blue-600 underline" href="https://dev.to/arsh_the_coder">Dev</a>
          </span>
        </div>

      </div>
    </section>
  );
}
