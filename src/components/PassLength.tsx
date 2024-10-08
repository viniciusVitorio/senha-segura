import { Dispatch, SetStateAction } from "react"

interface PassLengthProps {
    length: number
    onChangeFunc: Dispatch<SetStateAction<number>>
}

export const PassLength = ({ onChangeFunc, length } : PassLengthProps) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <label className="text-gray-200">Quantidade de caracteres</label>
                <span className="text-green-400 text-lg">{length}</span>
            </div>

            <input
                type="range"
                min="8"
                max="20"
                value={length}
                onChange={(e) => onChangeFunc(Number(e.target.value))}
                className="w-full bg-gray-700 accent-green-400"
            />
        </div>
    )
}