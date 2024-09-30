import React from 'react';

const avaliacoes = [
    {
      id: 1,
      nome: "Ana Souza",
      cargo: "Desenvolvedora Fullstack",
      avaliacao: "Integração fácil e eficiente",
      descricao: "A interface é limpa e moderna, o que torna a navegação super intuitiva. As páginas carregam rapidamente e o uso de tecnologias de ponta faz toda a diferença na performance. Com certeza, recomendo para quem busca uma experiência fluida e ágil.",
      imagem: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      estrelas: 5,
    },
    {
      id: 2,
      nome: "Lucas Pereira",
      cargo: "Engenheiro de Software",
      avaliacao: "Design moderno e excelente performance",
      descricao: "O layout moderno, combinado com o carregamento rápido das páginas, faz com que o produto se destaque. A estrutura do código é impecável, utilizando as linguagens mais recentes, o que proporciona uma experiência ágil e sem interrupções.",
      imagem: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      estrelas: 5,
    },
    {
      id: 3,
      nome: "Mariana Santos",
      cargo: "Desenvolvedora Frontend",
      avaliacao: "Fácil de navegar e eficiente",
      descricao: "A experiência de navegação é incrivelmente simples, e as páginas se adaptam perfeitamente a diferentes dispositivos. A organização do código reflete um trabalho cuidadoso e moderno, o que melhora a experiência de uso e agilidade.",
      imagem: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
      estrelas: 4,
    },
    {
      id: 4,
      nome: "Rafael Costa",
      cargo: "Analista de Sistemas",
      avaliacao: "Desempenho rápido e estrutura clara",
      descricao: "A estrutura do site é clara e fácil de entender, com foco em desempenho. As páginas respondem de forma rápida e sem atrasos. Além disso, o uso de tecnologias de ponta realmente garante a qualidade e a robustez do projeto.",
      imagem: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
      estrelas: 5,
    }
  ];
  

const Avaliacao = ({ nome, cargo, avaliacao, descricao, imagem, estrelas }) => {
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center">
        {Array(estrelas).fill().map((_, index) => (
          <svg key={index} className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
        ))}
      </div>
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{avaliacao}</h3>
        <p className="my-4">{descricao}</p>
      </blockquote>
      <figcaption className="flex flex-col items-center justify-center text-center">
        <img className="rounded-full w-9 h-9" src={imagem} alt="foto de perfil" />
        <div className="space-y-0.5 font-medium dark:text-white">
          <div>{nome}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{cargo}</div>
        </div>
      </figcaption>
    </figure>
  );
};

const SecaoAvaliacoes = () => {
  return (
    <section className="bg-white dark:bg-[#141e27]" id="sobre">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Avaliações</h2>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
          {avaliacoes.map((item) => (
            <Avaliacao
              key={item.id}
              nome={item.nome}
              cargo={item.cargo}
              avaliacao={item.avaliacao}
              descricao={item.descricao}
              imagem={item.imagem}
              estrelas={item.estrelas}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoAvaliacoes;
