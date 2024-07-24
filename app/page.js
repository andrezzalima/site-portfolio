"use client";

import './globals.css';
import { Pacifico } from 'next/font/google';
import { Roboto } from 'next/font/google';

import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../next-i18next.config.js';
import Head from 'next/head';


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
import { FaGithub } from "react-icons/fa6";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { DiCodeigniter } from "react-icons/di";
import { IoMenu } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],

})

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

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

  useEffect(() => {
    i18n.changeLanguage(language, () => {
      setIsLanguageLoaded(true);
    });
  }, [i18n, language]);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setIsLanguageLoaded(false);
    i18n.changeLanguage(selectedLanguage, () => {
      setIsLanguageLoaded(true);
    });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Portfólio - {t('name')}</title>
        <meta name="description" content="Portfólio Andrezza Lima" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLanguageLoaded ? (
        <section className={`flex flex-col md:min-h-screen md:max-w-screen bg-emerald-50 text-slate-700 ${roboto.className}`}>

          <div className="text-slate-700 min-h-screen w-full flex flex-col ">
            {  /* Cabeçalho */}
            <header className="h-24 flex justify-between p-6 md:justify-evenly items-center bg-slate-700 text-emerald-50">

              {/* Botão do menu hambúrguer */}
              <div className='fixed top-5 md:shadow-lg flex flex-col z-10'>
                <button className=" md:hidden block z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <IoMenu className={`text-3xl md:text-6xl ${isMenuOpen ? 'text-purple-700' : 'text-purple-400'}`} />
                </button>
                <div
                  className={`${isMenuOpen ? 'flex w-full h-screen fixed top-0 left-0 gap-5 bg-purple-400/90 ' : 'hidden'
                    } md:flex flex-col justify-center items-center md:flex-row md:gap-5 bg-purple-400/50 rounded-xl p-3 text-sm`}>
                  <a href="#about" onClick={() => setIsMenuOpen(!isMenuOpen)} >{t('about-me')}</a>
                  <a href="#projects" onClick={() => setIsMenuOpen(!isMenuOpen)}>{t('my-projects')}</a>
                  <a href="#experience" onClick={() => setIsMenuOpen(!isMenuOpen)}>{t('my-experience')}</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>{t('contact')}</a>
                  <a href="#technologies" onClick={() => setIsMenuOpen(!isMenuOpen)}>{t('technologies')}</a>
                </div>
              </div>

              <div className='absolute right-5 border-2 border-purple-400 rounded-xl '>
                <select className='bg-transparent min-w-8 text-center p-1.5 hover:cursor-pointer' value={language} onChange={handleLanguageChange}>
                  <option value="pt" className='text-slate-700'>PT</option>
                  <option value="en" className='text-slate-700'>EN</option>
                </select>
              </div>
            </header>
            {/* Sobre mim */}
            <div id="about" className='flex flex-col md:flex-row items-center md:h-full px-10 md:px-20 md:mt-2 w-full'>

              <div className='flex flex-col items-center justify-center w-full md:w-1/2 text-sm mt-5 p-1'>
                <div className={`text-xl md:text-3xl w-full mb-5`}>
                  <h2 className={`mb-4 text-2xl md:text-2xl `}>
                    {t('hi')}
                  </h2>
                  <p className='text-xl md:text-6x ml-7 '>{t('i-am')}</p><br></br>
                  <div className='text-3xl md:text-6x flex flex-col items-center font-bold'>
                    <h1 className={`text-purple-800 ${pacifico.className}`}>{t('name')}</h1>
                  </div>
                </div>

                {/*  div imagem */}
                <div className='w-full' >
                  <div className='w-full flex justify-center items-center py-5'>
                    <img src="/images/group1.png" className='w-72 md:w-80 h-72 md:h-80' style={{ objectFit: 'cover' }}></img>
                  </div>
                </div>
              </div>
              {/* div descrição */}
              <div className='flex flex-col items-center justify-center w-full md:w-2/3 text-sm mt-5 md:mt-0 p-1'>
                <div className='w-full mb-5'>
                  <p className='text-sm md:text-lg'>
                    {t('description-pt1')}
                  </p>
                  <p className='text-sm md:text-lg'>
                    {t('description-pt2')}
                  </p>
                  <p className='text-sm md:text-lg'>
                    {t('description-pt3')}
                  </p>
                </div>
              </div>

            </div>
          </div>
          {/* div projects */}
          <div className='flex flex-col gap-5 md:gap-24 text-center bg-purple-800  text-emerald-50 p-5' id='projects'>
            <h2 className={`text-3xl mb-4 ${pacifico.className}`}>{t('my-projects')}</h2>
            <div className='flex flex-col md:flex-row gap-7'>
              <a href='https://challenge-frontend-mentor-ga2x156k3-andrezzalima.vercel.app/' target='_blank' className='flex justify-center'><img src="/images/projeto1.png" className='w-3/4 rounded-xl '></img></a>
              <a href='https://bytes5colors.vercel.app/' target='_blank' className='flex justify-center'><img src="/images/projeto2.png" className='w-3/4 rounded-xl'></img></a>

            </div>
            <div className='flex flex-col md:flex-row gap-7'>
              <a href='https://vercel.com/andrezzalimas-projects/pixel-art/8TGjGEoFvCRoZhUsDQu7mPFukKw7' target='_blank' className='flex justify-center'><img src="/images/projeto4.png" className='w-3/4 rounded-xl'></img></a>
              <a href='https://time-of-7z9pppesv-andrezzalima.vercel.app/' target='_blank' className='flex justify-center'><img src="/images/projeto3.png" className='w-3/4 rounded-xl'></img></a>
            </div>


          </div>
          {/* div experiences */}
          <div className="p-5 flex flex-col items-center gap-5 text-center" id="experience">
            <h2 className={`text-3xl mb-4 ${pacifico.className}`}>{t('experience')}</h2>

            <div className='flex flex-col gap-3 p-5 border-2 border-purple-400 rounded-xl md:w-1/2'>
              <h3 className='text-purple-800 font-bold'>{t('function1')}</h3>
              <p><span className='text-purple-800'>Skills: </span>PHP, CODEIGNITER, POSTGRESQL, TORTOISE, XAMPP, BOOTSTRAP</p>
              <p className='text-sm'>
                {t('desctiption-f1')}</p>
            </div>
            <div className='flex flex-col gap-3 p-5 border-2 border-purple-400 rounded-xl md:w-1/2'>
              <h3 className='text-purple-800 font-bold'>{t('function2')}</h3>
              <p><span className='text-purple-800'>Skills: </span>HTML, CSS, JAVASCRIPT, REACT, MONGODB, TAILWIND</p>
              <p className='text-sm'>{t('desctiption-f2')}</p>
            </div>
          </div>

          {/* Formulário de contato */}
          <div id='contact' className='flex flex-col items-center justify-center w-full text-emerald-50 p-5 bg-purple-800' >
            <h2 className={`text-3xl mb-4 ${pacifico.className} p-5`}>{t('send-message')}</h2>
            <form className="flex flex-col items-center gap-4 w-5/6 md:w-1/2" onSubmit={handleSubmit}>
              <input className='p-2 w-full rounded-xl'
                type="text" placeholder={t('f-name')} name="name" required value={name} onChange={(e) => setName(e.target.value)} />
              <input className='p-2 w-full rounded-xl' type="email" placeholder={t('f-email')} name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <textarea className='p-2 h-32 w-full rounded-xl' placeholder={t('f-message')} name="message" required value={message} onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input type="submit" value={t('f-send')} className='p-2 bg-emerald-50 text-purple-800 w-1/2 rounded-xl' />
            </form>
          </div>
          {/* div tecnologias */}
          <div id="technologies" className='flex flex-col items-center justify-around p-10'>
            <h2 className={`text-3xl mb-12 ${pacifico.className}`}>{t('technologies')}</h2>
            <div className='flex flex-wrap justify-between items-center content-center gap-10'>
              <div className='flex flex-col items-center'>
                <FaHtml5 className='text-3xl md:text-6xl text-purple-800' /> HTML</div>
              <div className='flex flex-col items-center'>
                <IoLogoCss3 className='text-3xl md:text-6xl text-purple-800' /> CSS</div>
              <div className='flex flex-col items-center'>
                <SiTailwindcss className='text-3xl md:text-6xl text-purple-800' />Tailwind</div>
              <div className='flex flex-col items-center'>
                <FaBootstrap className='text-3xl md:text-6xl text-purple-800' /> Bootstrap</div>
              <div className='flex flex-col items-center'>
                <RiJavascriptFill className='text-3xl md:text-6xl text-purple-800' /> JavaScript</div>
              <div className='flex flex-col items-center'>
                <FaPhp className='text-3xl md:text-6xl text-purple-800' /> PHP</div>
              <div className='flex flex-col items-center'>
                <RiNextjsFill className='text-3xl md:text-6xl text-center text-purple-800' /> <p class>Next.js</p></div>
              <div className='flex flex-col items-center'>
                <FaReact className='text-3xl md:text-6xl text-purple-800' /> React</div>
              <div className='flex flex-col items-center'>
                <DiCodeigniter className='text-3xl md:text-6xl text-purple-800' /> CodeIgniter</div>
              <div className='flex flex-col items-center'>
                <FaNodeJs className='text-3xl md:text-6xl text-purple-800' /> Node.js</div>
              <div className='flex flex-col items-center'>
                <SiMongodb className='text-3xl md:text-6xl text-purple-800' /> MongoDB</div>
              <div className='flex flex-col items-center'>
                <BiLogoPostgresql className='text-3xl md:text-6xl text-purple-800' /> PostgreSQL</div>
              <div className='flex flex-col items-center'>
                <SiExpress className='text-3xl md:text-6xl text-purple-800' /> Express</div>
            </div>
          </div>

          {/* Rodapé */}
          <footer className="bg-slate-700 text-emerald-50 p-5 flex flex-col items-center justify-center min-h-32 gap-5">
            <div className="flex justify-evenly gap-10">
              <a href='www.linkedin.com' target='_blank'><IoLogoLinkedin className='text-2xl' /></a>
              <a href='www.github.com/andrezzalima' target='_blank'><FaGithub className='text-2xl' /></a>
              <a href='/CV_Andrezza_Lima.pdf' download='CV_Andrezza-Lima.pdf' className='flex items-center'><IoCloudDownloadSharp className='mr-3 text-2xl' />Downlod CV</a>
            </div>
            <div className='flex'>
              <p className='flex items-center text-center text-sm'>Copyright 2024. <FaRegCopyright className='mx-1' /> {t('copy')}.</p>
            </div>
          </footer>


        </section>


      ) : (
        <p className='h-screen w-screen flex justify-center items-center bg-black text-purple-400'>Loading...</p> // Exibe isso enquanto o idioma não estiver carregado
      )}
    </>
  );
} 
