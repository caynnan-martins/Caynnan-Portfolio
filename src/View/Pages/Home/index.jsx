import { motion } from "framer-motion";
import Navbar from "../../Components/App/Navbar";
import Footer from "../../Components/App/Footer";
import ProjectsSection from "../../Components/App/Projects";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import SecaoAvaliacoes from "../../Components/App/Avaliacoes";
import Email from '../../Components/App/Email'
export default function Home() {
    return (
        <main>
            < Navbar />
            <section id="inicio" className="flex bg-white dark:bg-[#141e27] flex-col items-center justify-center min-h-[60vh] gap-10 text-wrap p-4 pt-[120px]">
    <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
            <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Olá eu sou o <mark className="px-2 text-white rounded bg-blue-500">Caynnan</mark> Um Desenvolvedor FullStack
                </h1>
                </motion.h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    
                </p>
                <div>
                    <a href="https://wa.me/17992700548" className="bg-[#3f80f8] p-3 rounded-md text-white">WhatsApp</a>
                </div>
            </div>
            <div className="lg:w-1/2">
<div className="relative rounded-lg bg-slate-900 p-2">
<div className="relative flex text-center">
    <div className="flex pl-3.5 pt-3">
        <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20">
            <circle r="12" cy="12" cx="12"></circle>
        </svg>
        <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20">
            <circle r="12" cy="12" cx="12"></circle>
        </svg>
        <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20">
            <circle r="12" cy="12" cx="12"></circle>
        </svg>
    </div>
    <span className="absolute inset-x-0 top-2 text-xs text-slate-500">ProgressBar.tsx</span>
</div>
<div className="mt-5 space-y-1.5 px-5 pb-10">
    <p className="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
        <span className="text-slate-500">&lt;</span><span className="text-pink-400">Card</span><span className="text-slate-500">&gt;</span>
    </p>
    <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
        <span className="text-slate-500">&lt;</span><span className="text-pink-400">Text</span><span className="text-slate-500">&gt;</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400">Ticket Sales</span></span><span className="text-slate-500">&lt;/</span><span className="text-pink-400">Text</span><span className="text-slate-500">&gt;</span>
    </p>
    <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
        <span className="text-slate-500">&lt;</span><span className="text-pink-400">Metric</span><span className="text-slate-500">&gt;</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400">$ 71,465</span></span><span className="text-slate-500">&lt;/</span><span className="text-pink-400">Metric</span><span className="text-slate-500">&gt;</span>
    </p>
    <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
        <span className="text-slate-500">&lt;</span><span className="text-pink-400">Flex</span><span className="ml-2 text-violet-400">className<span className="text-slate-500">=</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400">"mt-3"</span></span></span><span className="text-slate-500">&gt;</span>
    </p>
    <p className="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
        <span className="text-slate-500">&lt;</span><span className="text-pink-400">Text</span><span className="text-slate-500">&gt;</span><span className="text-slate-500">&lt;</span><span className="text-pink-400">Bold</span><span className="text-slate-500">&gt;</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400">32%</span></span><span className="text-slate-500">&lt;/</span><span className="text-pink-400">Bold</span><span className="text-slate-500">&gt;</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400">of annual target</span></span><span className="text-slate-500">&lt;/</span><span className="text-pink-400">Text</span><span className="text-slate-500">&gt;</span>
    </p>
    <p className="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
        <span className="text-slate-500">&lt;</span><span className="text-pink-400">Text</span><span className="text-slate-500">&gt;</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400">$ 223,328</span></span><span className="text-slate-500">&lt;/</span><span className="text-pink-400">Text</span><span className="text-slate-500">&gt;</span>
    </p>
    <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
        <span className="text-slate-500">&lt;/</span><span className="text-pink-400">Flex</span><span className="text-slate-500">&gt;</span>
    </p>
    <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
        <span className="text-slate-500">&lt;</span><span className="text-pink-400">ProgressBar</span><span className="ml-2 text-violet-400">value<span className="text-slate-500">=</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400">{ 32 }</span></span></span><span className="ml-2 text-violet-400">className<span className="text-slate-500">=</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span className="relative text-blue-400">"mt-3"</span></span></span><span className="text-slate-500">/&gt;</span>
    </p>
    <p className="font-mono text-xs font-normal tracking-wide text-violet-400">
        <span className="text-slate-500">&lt;/</span><span className="text-pink-400">Card</span><span className="text-slate-500">&gt;</span>
    </p>
</div>

</div>
            </div>
        </div>
    </div>
</section>
        <section className="pt-[20px] bg-white dark:bg-[#141e27]">
        <ol className="items-center sm:flex px-[80px]">
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#3f80f8] sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Back-End</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Setembro 2016</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Comecei a estudar BackEnd em 2016 e já atuei em alguns projetos</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#3f80f8] sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Front-End</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dezembro 2016</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Comecei a estudar FrontEnd em 2016 e já atuei em alguns projetos</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-[#3f80f8] sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Design</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Janeiro 2024</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Me tornei Designer em 2024, fiz alguns cursos até ficar bom.</p>
        </div>
    </li>
</ol>
        </section>
        <ProjectsSection />

      

        <section className="bg-white dark:bg-[#141e27]" id="sobre">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Sobre</h2>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a href="#sobre" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                </svg>
                Eu
            </a>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Saiba Mais Sobre Mim</h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Olá! Meu nome é Caynnan, tenho 17 anos e sou um programador fullstack apaixonado por tecnologia. Estou sempre em busca de novas maneiras de aprimorar minhas habilidades e contribuir com soluções inovadoras no mundo da programação. Atualmente, estou cursando a <span className="mark">Graduação em Análise e Desenvolvimento de Sistemas</span>, o que me permite aprofundar meus conhecimentos e aplicar as melhores práticas no desenvolvimento de software.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="#sobre" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                    </svg>
                    Design
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Tecnicas De Designer</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Uso técnicas que aprendi quando trabalhava nessa área, como <span className="mark">espaçamento</span>, cores e <span className="mark">alinhamento</span>.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="#sobre" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                    </svg>
                    Code
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Melhores tecnologias do mercado para criação da sua aplicação</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Uso as melhores tecnologias do mercado como <span className="mark">React, Nodejs, Java, C++, Python, PHP</span> tudo o que for preciso para sua aplicação ficar perfeita.</p>
            </div>
        </div>
    </div>
</section>

<div class="bg-white dark:bg-[#141e27] min-h-screen flex justify-center items-center">
  <div class="w-11/12 md:w-8/12 lg:w-6/12 py-8">
    <h1 class="text-3xl text-center font-bold text-gray-800 dark:text-white mb-10">Linha do Tempo de Linguagens</h1>
    
    <div class="relative border-l border-gray-300 dark:border-gray-700">

      <div class="mb-10 ml-4 flex items-center">
        <div class="absolute w-8 h-8 bg-orange-500 rounded-full mt-1.5 -left-4 flex items-center justify-center">
          <i class='bx bxl-html5 text-white text-2xl'></i>
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">HTML</h3>
          <p class="text-gray-600 dark:text-gray-300">Linguagem de marcação utilizada para construir páginas web</p>
        </div>
      </div>

      <div class="mb-10 ml-4 flex items-center">
        <div class="absolute w-8 h-8 bg-blue-600 rounded-full mt-1.5 -left-4 flex items-center justify-center">
          <i class='bx bxl-css3 text-white text-2xl'></i>
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">CSS</h3>
          <p class="text-gray-600 dark:text-gray-300">Linguagem de estilo utilizada para personalizar a aparência das páginas web</p>
        </div>
      </div>

      <div class="mb-10 ml-4 flex items-center">
        <div class="absolute w-8 h-8 bg-teal-500 rounded-full mt-1.5 -left-4 flex items-center justify-center">
          <i class='bx bxl-tailwind-css text-white text-2xl'></i>
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Tailwind CSS</h3>
          <p class="text-gray-600 dark:text-gray-300">Um framework de CSS utilitário para criar layouts de forma rápida e responsiva</p>
        </div>
      </div>

      <div class="mb-10 ml-4 flex items-center">
        <div class="absolute w-8 h-8 bg-blue-500 rounded-full mt-1.5 -left-4 flex items-center justify-center">
          <i class='bx bxl-react text-white text-2xl'></i>
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">React</h3>
          <p class="text-gray-600 dark:text-gray-300">Uma biblioteca JavaScript para construir interfaces de usuário</p>
        </div>
      </div>

      <div class="mb-10 ml-4 flex items-center">
        <div class="absolute w-8 h-8 bg-blue-400 rounded-full mt-1.5 -left-4 flex items-center justify-center">
          <i class='bx bxl-nodejs text-white text-2xl'></i>
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Node.js</h3>
          <p class="text-gray-600 dark:text-gray-300">Um ambiente de execução JavaScript baseado no motor V8 do Chrome</p>
        </div>
      </div>

      <div class="mb-10 ml-4 flex items-center">
        <div class="absolute w-8 h-8 bg-red-600 rounded-full mt-1.5 -left-4 flex items-center justify-center">
          <i class='bx bxl-c-plus-plus text-white text-2xl'></i>
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">C++</h3>
          <p class="text-gray-600 dark:text-gray-300">Uma linguagem de programação de propósito geral criada por Bjarne Stroustrup</p>
        </div>
      </div>

      <div class="mb-10 ml-4 flex items-center">
        <div class="absolute w-8 h-8 bg-yellow-500 rounded-full mt-1.5 -left-4 flex items-center justify-center">
          <i class='bx bxl-javascript text-white text-2xl'></i>
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">JavaScript</h3>
          <p class="text-gray-600 dark:text-gray-300">Uma linguagem de programação que permite a criação de interatividade em páginas web</p>
        </div>
      </div>

      <div class="mb-10 ml-4 flex items-center">
        <div class="absolute w-8 h-8 bg-green-500 rounded-full mt-1.5 -left-4 flex items-center justify-center">
          <i class='bx bxl-python text-white text-2xl'></i>
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Python</h3>
          <p class="text-gray-600 dark:text-gray-300">Uma linguagem de programação de alto nível e fácil de aprender, muito utilizada em ciência de dados, automação e desenvolvimento web</p>
        </div>
      </div>

      <div class="mb-10 ml-4 flex items-center">
        <div class="absolute w-8 h-8 bg-blue-600 rounded-full mt-1.5 -left-4 flex items-center justify-center">
          <i class='bx bxl-java text-white text-2xl'></i>
        </div>
        <div class="ml-8">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Java</h3>
          <p class="text-gray-600 dark:text-gray-300">Uma linguagem de programação orientada a objetos de alto nível, amplamente utilizada no desenvolvimento de aplicativos corporativos e móveis</p>
        </div>
      </div>

    </div>
  </div>
</div>


<Email />

 <SecaoAvaliacoes/>

        <Footer />
        </main>
    )
} 
