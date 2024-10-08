import { useState } from 'react'
import { Logo } from './Logo'
import { Copy } from '@phosphor-icons/react'
import { PassLength } from './PassLength'
import { CheckOptions } from './CheckOptions'
import { Bounce, toast } from 'react-toastify'

export const PasswordGenerator = () => {
    const [password, setPassword] = useState<string>()
    const [length, setLength] = useState<number>(14)
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(false)
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(false)
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(false)
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)

    const generatePassword = () => {
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
        const numbers = '0123456789'
        const symbols = '!@#$%^&*()_+~'

        let characterPool = ''
        if (includeUppercase) characterPool += uppercaseLetters
        if (includeLowercase) characterPool += lowercaseLetters
        if (includeNumbers) characterPool += numbers
        if (includeSymbols) characterPool += symbols

        if (characterPool.length === 0) {
            alert('Por favor, selecione pelo menos uma opção de caracteres!')
            return
        }

        let generatedPassword = ''
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length)
            generatedPassword += characterPool[randomIndex]
        }

        setPassword(generatedPassword)
    }

    const copyToClipboard = () => {
        if (password && password.length > 8) {
            navigator.clipboard.writeText(password)
                .then(() => {
                    toast.success('Senha copiada para a área de transferência!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });
                })
                .catch(err => {
                    console.error('Erro ao copiar senha:', err)
                })
        } else {
            toast.error('Nenhuma senha para copiar! Gere uma nova senha e tente novamente.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4 max-w-[500px] w-[90%] md:w-full">
            <h1 className="text-center text-2xl font-semibold text-white flex items-center justify-center gap-4 bg-gradient-to-br from-green-600 to-green-500 py-4 px-8 w-full rounded-xl">
                <Logo />
                <span>Senha Segura</span>
            </h1>

            <div className="bg-gray-800 p-4 rounded-xl w-full border border-gray-700">
                <div className='bg-gray-700 text-white rounded-lg py-3 px-4 flex items-center'>
                    <input
                        type="text"
                        value={password}
                        readOnly
                        placeholder="P4$5W0rD!"
                        className="w-full bg-transparent focus:outline-none text-xl"
                    />
                    <button 
                        className='text-green-400'
                        title='Copiar para a área de transferência'
                        onClick={copyToClipboard}
                    >
                        <Copy size={24} />
                    </button>
                </div>
            </div>

            <div className="bg-gray-800 py-8 px-10 rounded-xl w-full flex flex-col gap-4 border border-gray-700">
                <PassLength length={length} onChangeFunc={setLength} />

                <div className="flex flex-col space-y-2">
                    <CheckOptions
                        id='check-1' 
                        label='Letras Maiúsculas' 
                        option={includeUppercase}
                        onChange={() => setIncludeUppercase(!includeUppercase)}
                    />
                    
                    <CheckOptions
                        id='check-2' 
                        label='Letras Minúsculas' 
                        option={includeLowercase}
                        onChange={() => setIncludeLowercase(!includeLowercase)}
                    />
                    
                    <CheckOptions
                        id='check-3' 
                        label='Números' 
                        option={includeNumbers}
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                    />
                    
                    <CheckOptions
                        id='check-4' 
                        label='Símbolos' 
                        option={includeSymbols}
                        onChange={() => setIncludeSymbols(!includeSymbols)}
                    />
                </div>

                <button
                    onClick={generatePassword}
                    disabled={(!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols)}
                    className="w-full bg-green-500 text-white p-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50"
                >
                    Gerar Senha
                </button>
            </div>
        </div>
    )
}