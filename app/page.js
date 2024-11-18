"use client";

import './globals.css';
import { Roboto, Montserrat_Alternates, Raleway, Playfair_Display } from 'next/font/google';

import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import '../next-i18next.config.js';
import Image from 'next/image';
import Carousel from "./carrossel";

import { RiNextjsFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { DiCodeigniter, DiWordpress } from "react-icons/di";
import { IoMenu } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";

const raleway = Raleway({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

const montserrat = Montserrat_Alternates({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],

})



const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
})
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Você pode escolher diferentes pesos
});

const projects = [
  {
    image: "/images/projeto1.png",
    link: "https://challenge-frontend-mentor-eight.vercel.app/"
  },
  {
    image: "/images/projeto2.png",
    link: "https://bytes4colors-j9vc9ns42-andrezzalima.vercel.app/"
  },
  {
    image: "/images/projeto4.png",
    link: "https://pixel-31hycb1qw-andrezzalimas-projects.vercel.app/"
  },
  {
    image: "/images/projeto5.png",
    link: "https://cristianefabres.vercel.app/"
  }
];

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Mensagem enviada com sucesso');
        alert('Mensagem enviada com sucesso!');
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error('Erro ao enviar a mensagem');
        alert('Erro ao enviar a mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      alert('Erro ao enviar a mensagem');
    }
  };


  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('pt');
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(language, () => {
      setIsLanguageLoaded(true);
    });
  }, [i18n, language]);

  const handleLanguageChange = (value) => {
    setLanguage(value);
    setIsLanguageLoaded(false);
    i18n.changeLanguage(value, () => {
      setIsLanguageLoaded(true);
    });
    setIsOpen(false);
  };
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>

      {isLanguageLoaded ? (
        <section className={`flex flex-col md:min-h-screen md:w-screen w-scren text-customBlack ${raleway.className} md:px-52  md:bg-customBlack`}>

          <div className='relative bg-customGray flex flex-col items-center'>
            {/* Botão do menu hambúrguer */}
            <div className="fixed top-5 left-5 md:left-auto z-10 w-2/3">
              <div className="flex flex-col justify-center md:flex-row md:px-10 px-5">
                {/* Botão para dispositivos móveis */}
                <button
                  className="md:hidden block z-50"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <IoMenu
                    className={`text-3xl md:text-6xl ${isMenuOpen ? "text-customPurple" : "text-customRose"
                      }`}
                  />
                </button>

                {/* Menu */}
                <div
                  className={`${isMenuOpen && window.innerWidth < 768
                    ? "flex w-full h-screen fixed top-0 left-0 gap-5 bg-customRose"
                    : "hidden"
                    } md:flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center gap-20 text-sm uppercase w-ful z-[20] h-8`}
                >
                  <a
                    href="#about"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="hover:text-purple-700 transition-all duration-300"
                  >
                    {t("about-me")}
                  </a>
                  <a
                    href="#projects"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="hover:text-purple-700 transition-all duration-300"
                  >
                    {t("my-projects")}
                  </a>
                  <a
                    href="#experience"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="hover:text-purple-700 transition-all duration-300"
                  >
                    {t("my-experience")}
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="hover:text-purple-700 transition-all duration-300"
                  >
                    {t("contact")}
                  </a>
                  <a
                    href="#technologies"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="hover:text-purple-700 transition-all duration-300"
                  >
                    {t("technologies")}
                  </a>
                </div>
              </div>
            </div>


            <div className={` absolute top-5 right-7 ${raleway.className}`}>
              <div className="relative">
                <button
                  className="flex items-center bg-transparent hover:cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <Image src={language === 'pt' ? '/images/portugal.png' : '/images/inglaterra.png'}
                    alt={language === 'pt' ? 'PT' : 'EN'}
                    width={30}
                    height={30}
                    className="mr-1" />
                </button>
                {isOpen && (
                  <ul className="absolute right-0 top-8 rounded-lg bg-slate-700/70 z-10 text-emerald-50">
                    <li className="flex items-center p-2 hover:bg-gray-200 cursor-pointer rounded-t-lg "
                      onClick={() => handleLanguageChange('pt')}>
                      <Image
                        src="/images/portugal.png"
                        width={20}
                        height={20}
                        alt="PT"
                      />
                      <span className="ml-1 text-xs p-2 mr-4">PT</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-200 rounded-b-lg cursor-pointer"
                      onClick={() => handleLanguageChange('en')} >
                      <Image
                        src="/images/inglaterra.png"
                        width={20}
                        height={20}
                        alt="EN"
                      />
                      <span className="ml-1 text-xs p-2">EN</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            {/* Sobre mim */}
            <div id="about" className='flex flex-col items-center md:h-full px-10 md:px-20 w-full min-h-screen bg-customGray'>

              {/* OI, EU SOU */}
              <div className='flex flex-col items-center justify-center w-full md:w-full text-sm mt-5 p-1'>
                <div className={`text-xl md:text-3xl w-full mt-20 ${raleway.className}`}>
                  <h2 className='mb-4 text-4xl md:text-7xl animate-fade-in-up uppercase font-bold'>
                    {t('hi')}
                  </h2>
                  <p className='mb-4 text-4xl md:text-6xl md:ml-40 ml-20 animate-fade-in-up uppercase font-bold'>
                    {t('i-am')}
                  </p>
                  {/*NOME */}
                  <div className='relative font-bold animate-fade-in-up m-0 p-0 h-96'>
                    <div className='flex justify-center'>
                      <img src='/images/ft_1.png' className='w-96'></img>
                    </div>
                    <p
                      className={`absolute bottom-12 left-3 md:top-16 md:left-96 mb-4 text-4xl md:text-6xl md:ml-48 animate-fade-in-up uppercase  text-customRose md:text-customBlack z-[10] font-semibold w-1/2  text-stroke`}
                    >
                      {t("name")}
                    </p>
                    <p
                      className={`absolute bottom-12 -right-12 md:top-32 md:-right-52 mb-4 text-4xl md:text-6xl md:ml-24 animate-fade-in-up uppercase text-customRose md:text-customBlack z-[10] font-semibold w-1/2`}

                    >
                      {t("lastname")}
                    </p>
                  </div>

                </div>
              </div>

              {/* div descrição */}
              <div className='relative -top-20 w-full md:h-screen md:w-full text-sm mt-5 md:mt-16 p-1 md:pl-10 bg-customBlack rounded-b-lg text-customGray z-[0] pt-20 animate-fade-in-up'>
                <div className='w-full mb-5 md:p-10 md:px-24 px-8 '>
                  <p className='text-sm md:text-md md:mb-2 mb-2 leading-relaxed'>
                    {t('description-pt1')}
                  </p>
                  <p className='text-sm md:text-md mb-2 leading-relaxed'>
                    {t('description-pt2')}
                  </p>
                  <p className='text-sm md:text-md mb-2 leading-relaxed'>
                    {t('description-pt3')}
                  </p>
                  <p className='text-sm md:text-md leading-relaxed'>
                    {t('description-pt4')}
                  </p>
                </div>

                {/* Div imagem e links sociais */}
                <div className='w-full'>
                  <div className="flex gap-6 py-8 justify-center md:gap-16">
                    <a href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer">
                      <IoLogoLinkedin className='text-2xl' />
                    </a>
                    <a href='https://www.github.com/andrezzalima' target='_blank' rel="noopener noreferrer">
                      <FaGithub className='text-2xl' />
                    </a>
                    <a href='https://www.instagram.com/andrezzalimadev' target='_blank' rel="noopener noreferrer">
                      <FaInstagram className='text-2xl' />
                    </a>
                    <a href='/I-CV Andrezza Lima.pdf' download='CV_Andrezza_Lima.pdf' className='flex items-center'>
                      <IoCloudDownloadSharp className='mr-3 text-2xl' /> Download CV
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* div projects */}
            <div className='text-center text-customBlack px-5 w-full' id='projects' >
              <h2 className={`text-3xl mb-4 ${raleway.className} font-medium`}>{t('my-projects')}</h2>

              {<Carousel />}

            </div>

            {/* div experiences */}
            <div className="p-10 flex flex-col items-center gap-10 text-center md:h-screen" id="experience">
              <h2 className={`text-4xl font-semibold text-customPurple my-8 md:mt-20 ${raleway.className} animate-fade-in-up`}>
                {t('experience')}
              </h2>

              <div className="flex flex-col gap-6 md:flex-row md:gap-10 text-customBlack">
                <div className="p-6 border-2 border-customPurple rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-customPurple hover:scale-105 hover:shadow-customPurple text-customPurple hover:text-customGray">
                  <h3 className="font-bold text-xl mb-2">{t('function1')}</h3>
                  <p className="font-medium mb-2"><span className="text-customPurple">Skills: </span>PHP, CodeIgniter, PostgreSQL, Tortoise, XAMPP, Bootstrap</p>
                  <p className="text-sm">{t('desctiption-f1')}</p>
                </div>

                <div className="p-6 border-2 border-customPurple rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-customPurple hover:scale-105 hover:shadow-customPurple relative  text-customPurple hover:text-customGray">
                  <h3 className="font-bold text-xl mb-2">{t('function2')}</h3>
                  <p className="font-medium mb-2"><span className="text-customPurple">Skills: </span>HTML, CSS, JavaScript, React, MongoDB, Tailwind</p>
                  <p className="text-sm">{t('desctiption-f2')}</p>
                </div>
              </div>
            </div>

            {/* Formulário de contato */}
            <div id='contact' className='flex flex-col items-center justify-center w-full text-customGray p-5 bg-customPurple md:h-screen'>
              <h2 className={`text-2xl my-4 ${raleway.className} font-medium p-5 md:mb-16 md:text-3xl`}>{t('send-message')}</h2>
              <form className="flex flex-col mb-12 items-center gap-6 w-5/6 md:w-1/2 text-slate-700" onSubmit={handleSubmit}>
                <input
                  className='p-2 w-full rounded-xl border-2 border-transparent focus:border-purple-500 focus:bg-customGray focus:outline-none transition-all duration-300 ease-in-out'
                  type="text" placeholder={t('f-name')} name="name" required value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className='p-2 w-full rounded-xl border-2 border-transparent focus:border-purple-500 focus:bg-customGray focus:outline-none transition-all duration-300 ease-in-out'
                  type="email" placeholder={t('f-email')} name="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  className='p-2 h-32 w-full rounded-xl border-2 border-transparent focus:border-purple-500 focus:bg-customGray focus:outline-none transition-all duration-300 ease-in-out'
                  placeholder={t('f-message')} name="message" required value={message}
                  onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <input
                  type="submit"
                  value={t('f-send')}
                  className='p-2 text-customGray w-1/2 rounded-xl bg-purple-600 hover:bg-customRose hover:text-customBlack hover:font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer'
                />
              </form>
            </div>


            {/* div tecnologias */}
            <div id="technologies" className='flex flex-col items-center justify-around p-5'>
              <h2 className={`text-3xl mt-4 mb-12 ${raleway.className} font-medium`}>{t('technologies')}</h2>
              <div className='flex flex-wrap justify-evenly items-center content-center mb-4 gap-10'>
                <div className='flex flex-col items-center '>
                  <FaHtml5 className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  HTML
                </div>
                <div className='flex flex-col items-center'>
                  <IoLogoCss3 className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  CSS
                </div>
                <div className='flex flex-col items-center'>
                  <SiTailwindcss className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  Tailwind
                </div>
                <div className='flex flex-col items-center'>
                  <FaBootstrap className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  Bootstrap
                </div>
                <div className='flex flex-col items-center'>
                  <RiJavascriptFill className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  JavaScript
                </div>
                <div className='flex flex-col items-center'>
                  <FaPhp className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  PHP
                </div>
                <div className='flex flex-col items-center'>
                  <RiNextjsFill className='text-3xl md:text-6xl text-center text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  Next.js
                </div>
                <div className='flex flex-col items-center'>
                  <FaReact className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  React
                </div>
                <div className='flex flex-col items-center'>
                  <DiCodeigniter className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  CodeIgniter
                </div>
                <div className='flex flex-col items-center'>
                  <FaNodeJs className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  Node.js
                </div>
                <div className='flex flex-col items-center'>
                  <SiMongodb className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  MongoDB
                </div>
                <div className='flex flex-col items-center'>
                  <BiLogoPostgresql className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-customPurple hover:drop-shadow-glow' />
                  PostgreSQL
                </div>
                <div className='flex flex-col items-center'>
                  <SiExpress className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  Express
                </div>
                <div className='flex flex-col items-center'>
                  <DiWordpress className='text-3xl md:text-6xl text-customPurple transition-transform duration-300 hover:scale-110 hover:text-purple-600 hover:drop-shadow-glow' />
                  Wordpress
                </div>
              </div>
            </div>



            {/* Rodapé */}
            <footer className={`bg-customBlack w-screen text-customGray p-5 flex flex-col items-center justify-center min-h-32 gap-5 ${raleway.className}`}>

              <div className='flex'>
                <p className='flex items-center text-center text-sm'>Copyright 2024. <FaRegCopyright className='mx-1' /> {t('copy')}.</p>
              </div>
            </footer>

          </div>
        </section>



      ) : (
        <p className='h-screen w-screen flex justify-center items-center bg-black text-purple-400'>Loading...</p> // Exibe isso enquanto o idioma não estiver carregado
      )}
    </>
  );
} 
