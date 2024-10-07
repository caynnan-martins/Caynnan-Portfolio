import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Email() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: ""
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6o02z9h',        // Substitua por seu Service ID do EmailJS
      'template_hkpxoqo',       // Substitua por seu Template ID do EmailJS
      formData,                // Dados do formulário
      'JzUywRFeH-symGwN4'            // Substitua pelo seu User ID do EmailJS
    )
    .then((result) => {
      console.log(result.text);
      setStatus('E-mail enviado com sucesso!');
    }, (error) => {
      console.log(error.text);
      setStatus('Erro ao enviar o e-mail.');
    });

    // Limpar o formulário
    setFormData({
      email: "",
      name: "",
      message: ""
    });
  };

  return (
    <section className="bg-white dark:bg-[#141e27]" id="sobre">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Me envie um email
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Seu email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Seu nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sua mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Deixe um comentário..."
            ></textarea>

            <button
              type="submit"
              className="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enviar
            </button>

            {/* Mostrar status de envio */}
            {status && <p className="mt-4 text-center text-gray-100">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
