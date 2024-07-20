import React from "react";
import Linkedin from "../imgs/linkedin.png";
import Github from "../imgs/github.png";
import Gmail from "../imgs/gmail.png";

export default function MorePage() {
  return (
    <div className="px-8 sm:pt-[100px] pb-20">
      <h1 className="font-['Anton_SC'] text-[25px]">About Me</h1>
      <p className="font-['Montserrat']">
        I am <span className="font-bold">Muhammad Owais</span>. I am a
        passionate developer and freelancer with a keen interest in web
        development and building dynamic, user-friendly applications. With a
        solid foundation in the MERN stack (MongoDB, Express.js, React, and
        Node.js), I strive to create efficient and scalable applications that
        solve real-world problems. My projects often reflect my dedication to
        learning and implementing the latest technologies and best practices in
        the industry. As a freelancer, I have worked on various projects,
        delivering high-quality solutions tailored to my clients' needs.
      </p>
      <h2 className="font-['Anton_SC'] mt-5">Contect Me</h2>
      <div className="flex gap-2 mt-3">
        <a href="mailto:owaistech.pk@gmail.com">
          <img className="w-10" src={Gmail} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-owais-pk/">
          <img className="w-10" src={Linkedin} alt="" />
        </a>
        <a href="https://github.com/Muhammad-Owais1">
          <img className="w-10" src={Github} alt="" />
        </a>
      </div>

      <h1 className="font-['Anton_SC'] text-[25px] mt-8">
        MERN Stack To-Do App
      </h1>
      <h2 className="font-['Anton_SC'] mt-5">Overview</h2>
      <p className="font-['Montserrat']">
        My MERN stack to-do app is a comprehensive task management application
        designed to help users efficiently manage their tasks and stay
        organized. The app leverages the power of MongoDB, Express.js, React,
        and Node.js to provide a seamless and responsive user experience.
      </p>
      <h2 className="font-['Anton_SC'] mt-5">Key Features</h2>
      <ol>
        <li>
          <p className="font-['Montserrat']">
            <span className="font-['Anton_SC'] text-xs text-slate-700">
              User Authentication:
            </span>{" "}
            Secure user registration and login functionality to ensure that each
            user has a personalized experience.
          </p>
        </li>
        <li>
          <p className="font-['Montserrat']">
            <span className="font-['Anton_SC'] text-xs text-slate-700">
              Task Management:
            </span>{" "}
            Users can create, update, delete, and mark tasks as complete. Tasks
            are categorized to help users prioritize and manage their workload
            effectively.
          </p>
        </li>
        <li>
          <p className="font-['Montserrat']">
            <span className="font-['Anton_SC'] text-xs text-slate-700">
              Real-Time Updates:
            </span>{" "}
            Leveraging WebSockets, the app provides real-time updates, ensuring
            that any changes made are instantly reflected across all devices.
          </p>
        </li>
        <li>
          <p className="font-['Montserrat']">
            <span className="font-['Anton_SC'] text-xs text-slate-700">
              Responsive Design:
            </span>{" "}
            The app is designed to be fully responsive, providing an optimal
            user experience on both desktop and mobile devices.
          </p>
        </li>
        <li>
          <p className="font-['Montserrat']">
            <span className="font-['Anton_SC'] text-xs text-slate-700">
              Search and Filter:
            </span>{" "}
            Users can easily search for specific tasks and apply filters based
            on task status, due date, and priority.
          </p>
        </li>
        <li>
          <p className="font-['Montserrat']">
            <span className="font-['Anton_SC'] text-xs text-slate-700">
              User-Friendly Interface
            </span>{" "}
            A clean and intuitive interface that makes task management easy and
            enjoyable.
          </p>
        </li>
      </ol>
      <h1 className="font-['Anton_SC'] text-[25px] mt-8">Technical Details</h1>
      <ul>
        <li className="font-['Montserrat']">
          <span className="font-['Anton_SC'] text-xs text-slate-700">
            Frontend:
          </span>{" "}
          React with functional components and hooks.
        </li>
        <li className="font-['Montserrat']">
          <span className="font-['Anton_SC'] text-xs text-slate-700">
            Backend:
          </span>{" "}
          Node.js and Express.js for handling APIs and user authentication.
        </li>
        <li className="font-['Montserrat']">
          <span className="font-['Anton_SC'] text-xs text-slate-700">
            Database:
          </span>{" "}
          MongoDB with Mongoose for data modeling.
        </li>
        <li className="font-['Montserrat']">
          <span className="font-['Anton_SC'] text-xs text-slate-700">
            Authentication:
          </span>{" "}
          JSON Web Tokens (JWT) for secure sessions.
        </li>
      </ul>
      <h2 className="font-['Anton_SC'] mt-5">Conclusion</h2>
      <p className="font-['Montserrat']">
        This MERN stack to-do app is a testament to my skills in full-stack
        development and my ability to create practical and efficient
        applications. Through this project, I have honed my expertise in React,
        Node.js, Express, and MongoDB, and I continue to explore new ways to
        enhance its functionality and user experience.
      </p>
    </div>
  );
}
