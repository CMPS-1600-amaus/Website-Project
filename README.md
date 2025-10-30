# Website-Project
Welcome to Project 2 1600 students. Now this project will be nothing like you have seen before. We will be working with a few important technologies today, that are seen in most corporate tech stacks:
- Typescript
- Firebase Authentication
- Next.js Dev environment
- Tailwind CSS
- Node Package Manager

**Deadlines:**
- Milestone 1: Monday November 10th
- Milestone 2: Monday November 17th
- Milestone 3: Presentations Start December 1st - 5th

# Pre Requisites

You will need to set up a few things before we can start messing around in our development environment. First thing we will need to do is install node package manager. 
- https://nodejs.org/en/download

Please use the link above to download node package manager onto your computers. This is how we will be able to download our packages on start up for your development environment. Once this is donwloaded you will need to navigate into the directory of where you cloned this github repository, you can do this either with your terminal instance or from within VS Code's terminal. The once you navigate into your Website-Project, please run the following command

``` bash
npm install
```

This command will install all the neccessary packages from your package.json file. This file is where all the neccessary packages for your project will live. if you would like to install outside packages for your 3rd milestone, the install command is as follows:

```bash
npm install name-of-package@version-of-package
```

Normally the default for version is the newest long term support version of the packages. In most cases that is perfectly fine. Once you have installed your packages you can proceed to milestone 1. 

# Milestone 1: Reading Documentation and Building User Creation - 30 Points 
This milestone primarily focuses on 3 major technologies that will be important to understand for this project. The following documentation links will be neccessary for milestone 1. 
- https://nextjs.org/docs/app/getting-started
- https://react.dev/learn
- https://firebase.google.com/docs/auth/web/start
- https://tailwindcss.com/docs/styling-with-utility-classes

Now a lot of this will seem very new to you guys, and it is supposed to be. We are not looking for an in depth understanding of every concept within these links. The goal of this milestone is to start to experience what it is like to navigate documentation. This is a very important skill within professional working environments, and will help you in the future when you need to pick up languages or technologies on the fly. 

**Your Tasks**: For this milestone you should read the documentation from above and be able to answer the questions below, as well as document all the files within the src/app folder. My only word of advice is to not skip reading this documentation, yes you can find these answers relatively quick. The issue will come later down the line when you have no idea what to do for any errors you get or will not be able to know what is happening within your own project. Please Answer the following questions below:
- Why do we use useState for our email and password variables within our sign in page? 2 - Point for these 
- What is the command to create a next.js project?
- What parameters do the sign in, and create user functions take in firebase?
- What is the benefit of using tailwind css versus regular css for front end design?
- Why is there a use client at the top of our landing page? 
- Explain the difference between use server and use client in next.js?
- What do all the tags in our layout and sign in page htmls mean, and why is their order important?
- Please give a brief summary of each of the documentation links above and how they are important to a website? 4 - Points for each of the 4 summaries                        

Another big deliverable of this milestone will be to follow the similar form submission in our Sign in page but for user creation. You do not need to configure the actual creation of the users in firebase, your goal is to build the UI for milestone 2 which will require you to connect your front end to your back end authenticator in firebase. Now for the UI you can use the Tailwind Documentation above and add your own stylistic flair to your create user component. You are also welcome to change up the UI for your sign in and will be great practice for milestone 3. 

**Cool UI Websites**
- https://reactbits.dev/
- https://ui.shadcn.com/

Now for react bits that will be more applicable to this project, as you can bring in components from react-bits to elevate your style. Shadcn is better for when you creating full website systems and need high level UI for professionalism. I would reccomend that everyone at least check out the websites above, and highly encourage that you use at least 1 react-bit component in your project. It is fairly easy to set up, and it looks amazing on your webiste. 

# Milestone 2: Connecting Firebase - 30 Points

This milestone focuses on creating a firebase account, and accessing your web API file. Firebase provides this file for you when you create a new project. Your goal will be to bring this file into your project, and set up your sign in and create user functions. The sign in page and create user page are configured for you. This portion will teach you the beginnings of what it means to add authentication to any projects you will build in the future.

- Display User Information on your final page and nothing else until milestone 3

# Milestone 3: Your actual website page - 40 Points

As the milestone says, you have finally added authentication to your project. Now that you can create a user and sign in, you have to be able to display something for your users, e.g, at least one page behind the login and create user. The goal of this milestone is to encourage creativity, and design whatever you would like to be on your final page. It could be a presentation of a topic, a local game made in typescript, your resume page, etc. This part of the project is meant to show you that with the right tools you can create anything you put your mind to. You will be graded based on effort and total understanding of the content. This would be a good time to put the Shadcn UI and React Bits components to use, and this could be the start to your own portfolio website to impress recruiters. If you would like to make more than one final page, you are welcome to do so.

**This portion will be graded based on a presentation of your final page, and the ability to explain whats going on to fellow classmates during your presentation.**

## Milestone 3 Presentation Guide Lines
- "Lightning Presentations" (4-7 minutes) 
- Followed by 2 mins QA
## Presentation Outline
- Introduction
- Overview of App
- App Demo
- Design walkthrough of your app (excluding sign-in and user creation)
- Q&A
- You are done congrats!!!


