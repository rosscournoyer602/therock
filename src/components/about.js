import React from 'react'

function about(props) {
    return (
        <div>
          <h1 className="processFieldTitle">About the KB</h1>
          <br />
          <h2 className="processFieldHeader">Why does it exist?</h2>
          <br />
          <p className="processFieldText">
            As an organization, we should only have to learn how to do something once. Futhermore,
            once we agree on the best way of doing something, we should all do it that way. This 
            site was set up as a repository for all of the institutional "how-to" knowledge.
            When we take the extra step of documenting the new things that we are able to do, we
            increase institutional momentum and decrease cognitive load on the rest of the team.
          </p>
          <br />
          <h2 className="processFieldHeader">What does it do?</h2>
          <br />
          <p className="processFieldText">
            The Knowledgebase is designed to host and serve two types of content: the process guide
            and the walkthrough video. When text is sufficient to help others understand the steps
            required to do something, we can default to using a process guide. When something needs
            visuals to be fully understood, we can use a walkthrough video. These are often screen
            recordings of a computer screen, walking us through the process. However, they can be
            any video. Hopefully, we will find innovative ways to use this over time!
          </p>
          <br />
          <h2 className="processFieldHeader">Where do things belong?</h2>
          <br />
          <p className="processFieldText">
            <strong>Business</strong> - Our business model, generating leads, pitching new business, and sales to new clients. 
            The LearningLeaders elevator pitch, how to talk to clients about what we do, and how to articulate the long term
            trajectory of the company.
          </p> 
          <br />
          <p className="processFieldText">
            <strong>Clients</strong> - Who are they and how can we help? Use systems to gather and present client data. Run
            the processes and systems that we use to interact with our client base. Describe our ideal client.
          </p> 
          <br />
          <p className="processFieldText">
            <strong>Company</strong> - The Vision, Mission, Values of LearningLeaders and The Stories Behind Our Success.
            How to explain these things to people. What do the look like in action?
          </p>
          <br />
          <p className="processFieldText">
          <strong>Design</strong> - How we approach Branding and the Identity of the Company. What are out branding guidelines?
            How to make your work brand compliant. How to maintain client facing systems like our website, wechat channel, and
            social media platforms.
          </p>
          <br />
          <p className="processFieldText">
            <strong>Experiences</strong> - How we Delight and Inspire. All you need to know about coaching students, and providing
                after-service to our clients.
          </p>
          <br />
          <p className="processFieldText">
            <strong>People</strong> - Who we Are, from Recruits to Alumni. Everything the People Team does so well. The hiring process,
            visas, attracting the best talent, and ensuring that they are a great fit for the team.
          </p>
          <br />
          <p className="processFieldText">
            <strong>Marketing</strong> - How We Share our Story with the World.
          </p>
          <br />
          <p className="processFieldText">
            <strong>Projects</strong> - How we Manage our Projects, Process, and Problems. Internal processes, and the systems that
            keep them running.
          </p>
        </div>
    )
}

export default about