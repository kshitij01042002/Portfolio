import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor() { }

  userDetails = {
    name: 'Kshitij',
    email: 'kshitijpatil1098@gmail.com',
    phoneNumber: '9323544113',
    githubURL: 'https://github.com/kshitij01042002',
  }

  css ={
    brightPurple: '#C3073F',
    midPurple: '#950740',
    darkPurple: '#6F2232',
    midGray: '#4E4E50',
    darkGray: '#1A1A1D'
  }

  myDetails = {
    name: "Kshitij",
    Branch: "Computer engineering",
    image: './assets/kshitij.jpeg',
    college: "Vidyavardhini's College Of Engineering & Technology",
    details:'Student | Web Developer | Open Sorce ENTHUSIAST',
    userDetailsList: ['STUDENT', 'DEVELOPER', 'Open Sorce ENTHUSIAST'],
    resume:'https://drive.google.com/file/d/1X_-f9dc07e-rV4uNR3S_RU7A5-AvWtos/view'
  }

  socialMedia = [
    {
      imageLink: "./assets/icons/github.png",
      profileLink: "https://github.com/kshitij01042002"
    },
    {
      imageLink: "./assets/icons/linkedin.png",
      profileLink: "https://www.linkedin.com/in/kshitij-patil-743b0122b/"
    },
    {
      imageLink: "./assets/icons/insta.png",
      profileLink: "https://www.instagram.com/__kshitij__patil__/"
    },
    {
      imageLink: "./assets/icons/twitter.png",
      profileLink: "https://twitter.com/Kshitij72399724"
    },
    {
      imageLink: "./assets/icons/mail.png",
      profileLink: "mailto:kshitijpatil1098@gmail.com"
    }
  ]
  experience =[
    {
      heading:"Oppia",
      content:"Oppia web is an open source, free, online learning platform to make quality education accessible for all. It has over 1M+ users, + 522 contributors and codebase has 4.6k stars on GitHub.",
      color:"darkgreen",
      myJob:"LaCE - Team Member",
      image:"assets/oppia.png",
      position:"2022 – Present",
      siteLink:"https://github.com/oppia/",
    },
    {
      heading:"NSS VCET",
      content:"The National Service Scheme (NSS) Government of India, Ministry of Youth Affairs & Sports provides an opportunity to the student youth of INDIA to take part in various government led community service activities & programs.",
      color:"black",
      image:"assets/nsslogo.png",
      myJob:"Deputy - Treasurer",
      position:"2022 – Present",
      siteLink:"https://vcet.edu.in/nss/",
    },
    {
      heading:"Student's Council",
      content:"Student's Council conduct and organize a multifarious array of events throughout the year thereby creating an ambience for building engineers to learn, hone their talents and showcase their competences on wider platform.",
      color:"darkblue",
      image:"assets/studentcouncil.jpeg",
      myJob:"Assistant Cultural Secretary",
      position:"2021 – 2022",
      siteLink:"https://vcet.edu.in/students-council/",
    },
    {
      heading:"BitByteGo",
      content:"It's the technical team of Computer Engineering Department that oragnizes various CP contests as well as provides computer based solutions to local companies",
      color:"darkred",
      image:"assets/bitbyte.jpeg",
      myJob:"Executive member",
      position:"2020 – Present"
    }
  ]
  timeLine=[
    {
      year:'2008 - 2018',
      content:'1-10th',
      contentTwo:'St. Thomas High School, Mumbai'
    },
    {
      year:'2018 - 2020',
      content:'11-12th',
      contentTwo:'Shri TP Bhatia College of Science, Mumbai'
    },
    {
      year:'2020 - 2024',
      content:'B.E.',
      contentTwo:'Vidyavardhinis College Of Engineering & Technology'
    }
  ]

  projectDetails = [
    {
      name:"LaravelShop",
      image:"./assets/LaravelShop.jpeg",
      content:"This is an E-commerce Website made on Laravel. This includes admin panel integrated with SQL databse.",
      githubLink:"https://github.com/kshitij01042002/E-commerce-Website"
    },
    {
      name:"CodeScanner",
      image:"./assets/codescannerlogo.png",
      content:"Hand written codescanner application using OCR to convert handwritten text to editable text and compile in upti 6 different languages",
      githubLink:"https://github.com/kshitij01042002/CodeScanner"
    },
    {
      name:"Portfolio",
      image:"./assets/user.png",
      content:"Portfolio Web-App made in typescript using angular as framework with bootstrap.",
      githubLink:"https://github.com/heyimShivam/angular-Port",
      workingLink:"#"
    },
    {
      name:"Focus-Time",
      image:"./assets/focus.jpg",
      content:"This is my first react-native project. It uses concepts of hooks and Components. It allows you to focus and set a timer for a particular task. When the time slot for a given task is completed the device vibrates alarming us",
      githubLink:"https://github.com/kshitij01042002/focustime",
      workingLink:""
    },
    {
      name:"Workshop Management System",
      image:"./assets/wms.png",
      content:"WorkShop Management System for local business made on JAVA using Google's Firestore NoSQL Database consisting of real time updates",
      githubLink:"https://github.com/kshitij01042002/Workshop-Management-System"
    },
    {
      name:"To-Do list",
      image:"./assets/todo.png",
      content:"Simple Task list using Laravel FrameWork and Bootstrap",
      githubLink:"https://github.com/kshitij01042002/TaskList"
    }
  ]
}
