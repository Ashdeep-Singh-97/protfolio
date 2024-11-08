import { useState } from 'react';

export default function EdEx() {
  const [activeTab, setActiveTab] = useState<'education' | 'projects'>('education');

  const educationData = [
    {
      title: "Bachelor's in Computer Science",
      institution: "CCET, Degree Wing, Chandigarh",
      period: "2019 - 2023",
    },
    {
      title: "Diploma in Computer Science",
      institution: "CCET, Diploma Wing, Chandigarh",
      period: "2017 - 2020",
    },
  ];

  const projectData = [
    {
      name: "Chatter G",
      deployment: "https://social-media-six-livid.vercel.app/",
      github: "https://github.com/Ashdeep-Singh-97/socialMedia",
      summary: "A social media application with features like comment, post, and chat. Uses Next.js, PostgreSQL, and a 3rd party API for images. Users can friend, unfriend, block, unblock, and chat."
    },
    // {
    //   name: "ChatBot",
    //   deployment: "https://chatbot-cfpo.vercel.app/",
    //   github: "https://github.com/Ashdeep-Singh-97/Chatbot",
    //   summary: "A ChatGPT Clone utilizing OpenAI APIs for responses. Key tech includes MongoDB for storing sessions, chats, and messages."
    // },
    {
      name: "Book Finder",
      deployment: "https://book-finder-s7v4.vercel.app/",
      github: "https://github.com/Ashdeep-Singh-97/BookFinder",
      summary: "An app for finding books, using Google API to fetch results. Includes skeletons, filters, and a side drawer. Frontend and backend are deployed separately."
    },
    {
      name: "Git prototype",
      deployment: "It is a CLI based tool.",
      github: "https://github.com/Ashdeep-Singh-97/gitClone",
      summary: "A Git clone built with Javascript, using zlib encryption-decryption for torrents. Works for every local git function."
    },
  ];

  return (
    <section
      id="education"
      className="py-12 md:py-24 lg:py-32"
    >
      <div className=" px-4 md:px-6 max-w-3xl mx-auto" style={{ height: '600px', overflowY: 'auto' }}>
      <h2 className="mb-4 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">Qualification</h2>
        <p className="mb-8 text-gray-500 dark:text-gray-600 text-center text-lg">My personal journey</p>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`bg-black text-white px-4 py-2 rounded ${
              activeTab === 'education' ? 'bg-primary text-primary-foreground' : 'bg-gray-600 text-gray-800'
            }`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`bg-black text-white px-4 py-2 rounded ${
              activeTab === 'projects' ? 'bg-primary text-primary-foreground' : 'bg-gray-600 text-gray-800'
            }`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
        </div>
        <div className="mt-8 space-y-8">
          {activeTab === 'education' ? (
            educationData.map((item, index) => (
              <div key={index} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                  {index !== educationData.length - 1 && <div className="h-full w-px bg-border" />}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-md text-gray-500 dark:text-gray-400">{item.institution}</p>
                  <p className="text-md text-gray-500 dark:text-gray-400">{item.period}</p>
                </div>
              </div>
            ))
          ) : (
            projectData.map((project, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="text-lg text-gray-500 dark:text-gray-400">{project.summary}</p>
                <p className="text-md text-gray-500 dark:text-gray-400">
                  <strong>Deployment:</strong>{' '}
                  {project.deployment.startsWith('http') ? (
                    <a
                      href={project.deployment}
                      target="_blank"
                      
                      className="text-blue-600 underline"
                    >
                      {project.deployment}
                    </a>
                  ) : (
                    project.deployment
                  )}
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400">
                  <strong>GitHub:</strong>{' '}
                  <a
                    href={project.github}
                    target="_blank"
                    
                    className="text-blue-600 underline"
                  >
                    {project.github}
                  </a>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
