import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[#F0F2F2] tracking-wider'>
      {/* Header */}
      <div className="sticky top-0 left-0 font-mono font-bold bg-[#393E59] text-[#F0F2F2] tracking-normal">
        <ul className="flex flex-row max-w-[100%] mx-auto justify-evenly text-center py-1 md:py-4 text-[8px] md:text-[18px] md:flex-row md:max-w-[80%]">
          <li className="px-2 py-1">
            <Link href="/">
              <span className="relative after:absolute after:w-[100%] after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F0F2F2] after:origin-bottom-right after:transition-transform after:delay-[0.1s] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer">Home</span>
            </Link>
          </li>
          <li className="px-2 py-1">
            <Link href="#AboutMe">
              <span className="relative after:absolute after:w-[100%] after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F0F2F2] after:origin-bottom-right after:transition-transform after:delay-[0.1s] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer">About Me</span>
            </Link>
          </li>
          <li className="px-2 py-1">
            <Link href="#Education">
              <span className="relative after:absolute after:w-[100%] after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F0F2F2] after:origin-bottom-right after:transition-transform after:delay-[0.1s] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer">Education</span>
            </Link>
          </li>
          <li className="px-2 py-1">
            <Link href="#WorkExperience">
              <span className="relative after:absolute after:w-[100%] after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F0F2F2] after:origin-bottom-right after:transition-transform after:delay-[0.1s] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer">Work Experience</span>
            </Link>
          </li>
          <li className="px-2 py-1">
            <Link href="#Skills">
              <span className="relative after:absolute after:w-[100%] after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F0F2F2] after:origin-bottom-right after:transition-transform after:delay-[0.1s] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer">Skills</span>
            </Link>
          </li>
          <li className="px-2 py-1">
            <Link href="#ContactMe">
              <span className="relative after:absolute after:w-[100%] after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F0F2F2] after:origin-bottom-right after:transition-transform after:delay-[0.1s] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer">Contact Me</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Role */}
      <div className="w-full mx-auto font-mono text-center text-[#010326]" id="Role">
        <div className="py-[250px] md:py-[310px] mx-auto">
            <p className="text-[30px] md:text-[58px]">I am a</p>
            <p className="text-[42px] md:text-[68px] font-bold">Front End Web Developer</p>
        </div>
      </div>

      {/* About Me */}
      <div className="font-mono bg-[#393E59] text-[#F0F2F2] text-center" id="AboutMe">
        <div className="pt-6 pb-10">
          <p className="text-[40px] md:text-[60px] font-bold mb-6">About Me</p>
          <div className="flex flex-col-reverse justify-center max-w-[90%] mx-auto md:flex-row">
            <div className="flex flex-col text-left md:text-right">
              <p className="text-[22px] md:text-[32px]">My name is Harshil Prajapati.</p>
              <p className="text-[16px] md:text-[22px] mt-4">I have 5 months of experience in front end web development and a 3 month experience as a graphic designer. I am passionate about designing and making new products using my imagination and creativity into it. I am flexible with any new technology as I am quick learner too. I also have completed online course of Adobe Illustrator and Photohsop to boost creativity in my designing.</p>
              <div className="flex flex-col text-[14px] md:text-[20px] mt-8">
                <p>Phone: +91-9724241868</p>
                <p>Email: prajapatiharshil3107@gmail.com</p>
                <p>Country: India</p>
                <p>Languages Known: English, Hindi, Gujarati</p>
              </div>
            </div>
            <img src="MyPic.jpg" className="w-[350px] h-[350px] rounded-[30px] border-[5px] border-[#F0F2F2] md:ml-12 mb-4 md:mb-0 mx-auto" alt="" />
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="font-mono text-[#010326] text-center" id="Education">
        <div className="pt-6 pb-10">
          <p className="text-[40px] md:text-[60px] font-bold mb-6">Education</p>
          <div className="flex flex-col justify-between max-w-[70%] mx-auto md:flex-row">
            {/* 1 */}
            <div className='flex flex-col max-w-[500px] mb-8 md:mb-0'>
              <p className='font-bold text-[22px] md:text-[30px]'>Bachelors of Technology</p>
              <p className='text-[14px] md:text-[20px]'>
                Indian Institute of Information Technology, Surat
                <br/>Computer Science and Engineering
                <br/>July 2018 - July 2022
                <br/>8.44 / 10
              </p>
            </div>
            {/* 2 */}
            <div className="flex flex-col max-w-[500px] mb-8 md:mb-0">
              <p className="font-bold text-[22px] md:text-[30px]">Higher Secondary(12th)</p>
              <p className="text-[14px] md:text-[20px]">
                Smt. V.D. Desai (Wadiwala) Higher Secondary School, Surat
                <br/>June 2017 - March 2018
                <br/>81%
              </p>
            </div>
            {/* 3 */}
            <div className="flex flex-col max-w-[500px]">
              <p className="font-bold text-[22px] md:text-[30px]">Secondary(10th)</p>
              <p className="text-[14px] md:text-[20px]">
                Smt. V.D. Desai (Wadiwala) Secondary School, Surat
                <br/>June 2015 - March 2016
                <br/>89%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="font-mono bg-[#393E59] text-[#F0F2F2] text-center" id="WorkExperience">
        <div className="pt-6 pb-10">
          <p className="text-[40px] md:text-[60px] font-bold mb-6">Work Experience</p>
          <div className="flex flex-col justify-between max-w-[70%] mx-auto md:flex-row">
            {/* 1 */}
            <div className="flex flex-col mx-auto max-w-[500px] mb-8 md:mb-0">
              <p className="font-bold text-[22px] md:text-[30px]">The Dairing Company</p>
              <p className="text-[14px] md:text-[20px]">
                Front End Web Developer
                <br/>Create static and dynamic web pages utilizing the React framework (Next JS) in accordance with UI/UX designs.
                <br/>January 2022 - June 2022
              </p>
            </div>
            {/* 2 */}
            <div className="flex flex-col mx-auto max-w-[500px]">
              <p className="font-bold text-[22px] md:text-[30px]">SpiderG</p>
              <p className="text-[14px] md:text-[20px]">
                Graphic Designer
                <br/>Online gathering of content for social media with other employees, and building an appropriate design based on the information.
                <br/>June 2021 - September 2021
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="font-mono text-[#010326] text-center" id="Skills">
        <div className="pt-6 pb-10">
          <p className="text-[40px] md:text-[60px] font-bold mb-6">Skills</p>
          <div className="flex flex-col justify-between md:max-w-[50%] mx-auto md:flex-row">
            <div className="w-[300px] mb-8 md:mb-0 mx-auto">
              <p className="font-bold text-[22px] md:text-[30px] mb-2">Technical Skills</p>
              <p className="text-[14px] md:text-[20px]">C++, C#, Next JS, HTML5, CSS3, Tailwindcss, JavaScript, Git, SQL, Illustrator, Photoshop</p>
            </div>
            <div className="w-[300px] mx-auto">
              <p className="font-bold text-[22px] md:text-[30px] mb-2">Soft Skills</p>
              <p className="text-[14px] md:text-[20px]">Mathematics, Problem Solving, Communication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center bg-[#393E59] text-[#F0F2F2] font-mono" id="ContactMe">
        <div className="py-6">
          <p className="text-[40px] md:text-[60px] mb-6 font-bold">Contact Me</p>
          <ul className="flex flex-col justify-between max-w-[100%] md:max-w-[50%] mx-auto md:flex-row">
            <li className="mb-8 text-center md:mb-0">
              <p className="mb-2 font-bold text-[14px] md:text-[20px]">Call me on</p>
              <p className="text-[12px] md:text-[18px]">+91-9724241868</p>
            </li>
            <li className="mb-8 text-center md:mb-0">
              <p className="mb-2 font-bold text-[14px] md:text-[20px]">Email me on</p>
              <p className="text-[12px] md:text-[18px]">prajapatiharshil3107@gmail.com</p>
            </li>
            <li className="text-center">
              <p className="mb-2 font-bold text-[14px] md:text-[20px]">Social Media Links</p>
              <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/harshil-prajapati-0b099b1b6/"><img src="linkedin.png" className="w-4 mr-6 md:w-6" /></a>
                <a href="https://github.com/hARSHILp7"><img src="github.png" className="w-4 mr-6 md:w-6" /></a>
                <a href="https://www.instagram.com/__harshil__31/"><img src="instagram.png" className='w-4 md:w-6' /></a>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
