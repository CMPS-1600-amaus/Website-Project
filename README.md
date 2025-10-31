# Website-Project
Welcome to Project 2 1600 students. Now this project will be nothing like you have seen before. We will be working with a few important technologies that are seen in most corporate tech stacks:
- Typescript
- Firebase Authentication
- Next.js Dev environment
- Tailwind CSS
- Node Package Manager

**Deadlines:**
- Milestone 1: Monday November 10th
- Milestone 2: Monday November 17th
- Milestone 3: December 1st - 5th (Presentations)

## Getting Started - Let's run the project!

You will need to set up a few things before we can start messing around in our development environment. First thing we will need to do is install node package manager. 
- https://nodejs.org/en/download

Please use the link above to download node package manager onto your computers. This is how we will be able to download our packages on start up for your development environment. Once this is donwloaded you will need to navigate into the directory of where you cloned this github repository, you can do this either with your terminal instance or from within VS Code's terminal. Once you navigate into your `1600-website-Project` directory, please run the following command

``` bash
npm install
```

This command installed all neccessary packages listed in `package.json` as dependencies for your project. 

Now let's run your project!

```bash
npm run dev
```

This command compiles and starts your project. Once compiled, open [http://localhost:3000](http://localhost:3000) in a browser to see it.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Installing specific packages

If you wamt to install outside packages for your 3rd milestone, the install command is as follows:

```bash
npm install name-of-package@version-of-package
```

Normally the default for version is the newest long term support version of the packages. In most cases that is perfectly fine. Once you have installed your packages you can proceed to milestone 1. 

## Milestone 1: Reading Documentation and Building User Creation - 30 Points 
This milestone primarily focuses on 4 major technologies that will be important to understand for this project. In this milestone, you will familiarize yourself with these technologies. The following documentation links will be neccessary for milestone 1. 
- [nextjs]
- [react]
- [firebase]
- [tailwindcss]

A lot of this will seem very new, and it is supposed to be.  We are not looking for an in depth understanding of every concept within documentation websites. The goal of this milestone is to start to experience what it is like to navigate documentation. This is a very important skill within professional working environments, and will help you in the future when you need to pick up languages or technologies on the fly. 

**Your Tasks**: For this milestone you should read over documentation above and use it to answer the questions below, as well build the UI for the Create User feature of your web app. 

> **Word of advice:** Do not skip reading this documentation! Yes, you may be able to find answers to the questions below relatively quickly, but your goal should be not just to find the answers but to build up a framework of your own understanding. Without this understanding, future errors (they are inevitable) may seem unsurmountable, but with an understanding of how your project works and what is happening, and you will be able to resolve any issues that come your way. 

### Documentation Questions (15 points)

Please answer the following questions. **Enter your answers in answers.md**
1. Why do we use `useState` for our email and password variables within our sign in page? 
2. What is the command to create a **next.js** project?
3. What parameters do the sign in, and create user functions take in **firebase**?
4. What is the benefit of using **tailwind css** versus regular css for front end design?
5. Why is there a use client at the top of our landing page? 
6. Explain the difference between use server and use client in next.js?
7. What do all the tags in our layout and sign in page htmls mean, and why is their order important?
8. Please give a brief summary of each of the 4 major technologies above. What are they, and how they are important to a website?

### UI Create User (15 points)

As the second part of this milestone, you will implement the UI for creating users. You can use a similar form as your Sign In page. In this milestone, you are not implementing the actual creation of the users, just the creation of the create user UI. 

> In milestone 2 you will implement user creation where you will connect your front end to your back end authenticator in firebase. 

For your create user UI we recommend you refer to Tailwind Documentation and add your own stylistic flair to it. You are also welcome to change up the UI for your sign in (this will be great practice for milestone 3!). 

### Web Design Examples (Cool UI Websites!)
- [reactbits](https://reactbits.dev/)
- [shadcn](https://ui.shadcn.com/)

React Bits will be very helpful for your project, as you can bring in components from React Bits to elevate your style. Shadcn is useful when you are creating full website systems and need high level UI for professionalism. 

We reccomend that everyone at least check out the websites above, and highly encourage you use at least 1 react-bit component in your project. It is fairly easy to set up and looks amazing on your website. 

## Milestone 2: Implementing User Management - 30 Points

In Milestone 2 you are implementing user management using firebase as an authentication service. 

To do this, you will create a firebase account, and pull your web API file into your project. Then you will need to setup your sign in and create user functions. This portion will teach you the beginnings of what it means to add authentication to any projects you will build in the future.

- Display User Information on your final page and nothing else until milestone 3

## Milestone 3: Your actual website page - 40 Points

As the milestone says, you have finally added authentication to your project. Now that you can create a user and sign in, you have to be able to display something for your users, e.g, at least one page behind the login and create user. The goal of this milestone is to encourage creativity, and design whatever you would like to be on your final page. It could be a presentation of a topic, a local game made in typescript, your resume page, etc. This part of the project is meant to show you that with the right tools you can create anything you put your mind to. You will be graded based on effort and total understanding of the content. This would be a good time to put the Shadcn UI and React Bits components to use, and this could be the start to your own portfolio website to impress recruiters. If you would like to make more than one final page, you are welcome to do so.

**This portion will be graded based on a presentation of your final page, and the ability to explain whats going on to fellow classmates during your presentation.**

### Milestone 3 Presentation Guide Lines
- "Lightning Presentations" (4-7 minutes) 
- Followed by 2 mins QA

**Presentation Outline**

- Introduction
- Overview of App
- App Demo
- Design walkthrough of your app (excluding sign-in and user creation)
- Q&A
- You are done congrats!!!


[nextjs]: https://nextjs.org/docs
[react]: https://react.dev/learn
[firebase]: https://firebase.google.com/docs/auth/web/start
[tailwindcss]: https://tailwindcss.com/docs/styling-with-utility-classes