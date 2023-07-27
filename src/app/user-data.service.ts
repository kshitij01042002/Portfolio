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
    image: './assets/myphoto.png',
    college: "Vidyavardhini's College Of Engineering & Technology",
    details:'Student | Web Developer | Open Source ENTHUSIAST',
    userDetailsList: ['STUDENT', 'DEVELOPER', 'Open Source ENTHUSIAST'],
    resume:'https://drive.google.com/file/d/1s70pn5MmTrua1ts8ttgKwKK7o5Hvb_LU/view?usp=drive_link'
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
      content:"Oppia web is an open source, free, online learning platform to make quality education accessible for all. It has over 2M+ users, + 522 contributors and codebase has 4.6k stars on GitHub.",
      color:"darkgreen",
      myJob:"Google Summer of Code '23, Contributor",
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
      position:"2021 – Present"
    },
    {
      heading:"Intel's - OpenVINO",
      content:"Coming Soon...",
      color:"darkgreen",
      image:"assets/ope.png",
      myJob:"Contributor",
      position:"Present",
      siteLink:"https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/overview.html",
    }
  ]
  timeLine=[
    {
      year:'2008 - 2018',
      content:'1-10th',
      contentTwo:'St. Thomas High School, Mumbai',
      marks: '89.80 %'
    },
    {
      year:'2018 - 2020',
      content:'11-12th',
      contentTwo:'Shri TP Bhatia College of Science, Mumbai',
      marks: '89.08 %'
    },
    {
      year:'2020 - 2024',
      content:'B.E.',
      contentTwo:'Vidyavardhinis College Of Engineering & Technology',
      marks: '.      9.2 GPA'
    }
  ]

  projectDetails = [
    {
      name:"KHETI-Your Smart Farming Assistant",
      image:"./assets/maskable.png",
      content:"Kheti - Web App for Farmers: Next.js & Flask-based application using data science algorithms (image classification, NLP, ML) to identify and treat plant diseases. Predicts crop yield, pest/disease likelihood, and recommends optimal fertilizer use. Saves time, money, and improves crop quality and yields. Valuable resource for farmers to enhance crop production.",
      githubLink:"https://github.com/kshitij01042002/kheti"
    },
    {
      name:"CodeScanner",
      image:"./assets/codescannerlogo.png",
      content:"This mobile app scans handwritten code using OCR and compiles it in six different programming languages. It has a user-friendly editor with syntax highlighting and error checking, and a built-in testing environment for debugging. It saves time and makes coding more efficient for developers who prefer pen and paper.. OCR with accuracy over 95%. ",
      githubLink:"https://github.com/kshitij01042002/CodeScanner"
    },
    {
      name:"Terra-finance",
      image:"./assets/terra.png",
      content:"Hackathon winning Problem statement based react+Flask(Firebase as database) Application. A smart finance managing application uses power of AI and machine learning to smartly manage your finance and promote usage of renewable energy by rewarding it's user.",
      githubLink:"https://github.com/kshitij01042002/Hackerstellar-BootstrapParadox",
      workingLink:""
    },
    {
      name:"Focus-Time",
      image:"./assets/focus.jpg",
      content:"This is my first react-native project. It uses concepts of hooks and Components. It allows you to focus and set a timer for a particular task. When the time slot for a given task is completed the device vibrates alarming us.",
      githubLink:"https://github.com/kshitij01042002/focustime",
      workingLink:""
    },
    {
      name:"Workshop Management System",
      image:"./assets/wms.png",
      content:"WorkShop Management System for local business made on JAVA using Google's Firestore NoSQL Database consisting of real time updates",
      githubLink:"https://github.com/kshitij01042002/Workshop-Management-System"
    },
    // {
    //   name:"To-Do list",
    //   image:"./assets/todo.png",
    //   content:"Simple Task list using Laravel FrameWork and Bootstrap",
    //   githubLink:"https://github.com/kshitij01042002/TaskList"
    // }
    {
      name:"LaravelShop",
      image:"./assets/LaravelShop.jpeg",
      content:"This Laravel-based ecommerce website offers a seamless online shopping experience with a user-friendly interface, intuitive search function, and various payment options. Administrators can manage inventory, process orders, and track sales using the built-in analytics dashboard, and customize the website's appearance and add new products.",
      githubLink:"https://github.com/kshitij01042002/E-commerce-Website"
    },
    {
      name:"Portfolio",
      image:"./assets/user.png",
      content:"Portfolio Web-App made in typescript using angular as framework with bootstrap.",
      githubLink:"https://github.com/kshitij01042002/Portfolio",
      workingLink:"#"
    },
  ]
}
