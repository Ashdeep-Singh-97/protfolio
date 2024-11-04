
export default function Contact() {
  return (
    <div id="contact" className="py-12 md:py-24 lg:py-32 flex">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</div>
          <div className="mb-4 text-gray-500 dark:text-gray-500">Get in Touch</div>
        </div>
        <div className="mr-40 md:mr-64 flex flex-row justify-around w-full">
          <a href="https://in.linkedin.com/in/ashdeep-singh-56b128193?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" >
            <img
              src="/linkedin-logo.png"
              alt="LinkedIn"
              className="h-20 w-20 hover:opacity-60 transition-opacity"
            />
          </a>
          <a href="https://github.com/Ashdeep-Singh-97" target="_blank" >
            <img
              src="/github.png"
              alt="GitHub"
              className="h-20 w-20 hover:opacity-60 transition-opacity"
            />
          </a>
          <a href="mailto:ashdeepsingh1997@gmail.com">
            <img
              src="/gmail.png"
              alt="Gmail"
              className="h-20 w-20 hover:opacity-60 transition-opacity"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
