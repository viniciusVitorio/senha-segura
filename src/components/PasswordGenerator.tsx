import React, { useState } from 'react';

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~';

    let characterPool = '';
    if (includeUppercase) characterPool += uppercaseLetters;
    if (includeLowercase) characterPool += lowercaseLetters;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    if (characterPool.length === 0) {
      alert('Por favor, selecione pelo menos uma opção de caracteres!');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);

  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-900 font-poppins">
      <h1 className="text-center text-2xl font-semibold text-slate-300 mb-4">Senha Segura</h1>
      <div className="bg-gray-800 p-10 rounded-lg shadow-md max-w-sm w-full">
        <input
          type="text"
          value={password}
          readOnly
          placeholder="P4$5W0rD!"
          className="w-full bg-gray-700 text-white p-2 rounded mb-4 focus:outline-none"
        />

        <div className="flex items-center justify-between mb-4">
          <label className="text-gray-400">Tamanho da Senha</label>
          <span className="text-green-400">{length}</span>
        </div>

        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full mb-4 bg-gray-700 accent-green-400"
        />

        <div className="flex flex-col space-y-2 mb-6">
          <label className="flex items-center text-gray-400">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="custom-checkbox accent-green-400 mr-2"
            />
            Incluir Letras Maiúsculas
          </label>
          <label className="flex items-center text-gray-400">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="custom-checkbox accent-green-400 mr-2"
            />
            Incluir Letras Minúsculas
          </label>
          <label className="flex items-center text-gray-400">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="custom-checkbox accent-green-400 mr-2"
            />
            Incluir Números
          </label>
          <label className="flex items-center text-gray-400">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="custom-checkbox accent-green-400 mr-2"
            />
            Incluir Símbolos
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-green-500 text-gray-900 p-2 rounded hover:bg-green-400"
        >
          Gerar Senha
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
