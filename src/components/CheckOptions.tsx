interface CheckOptionsProps {
    id: string
    label: string
    option: boolean
    onChange: () => void
}

export const CheckOptions = ({ id, label, option, onChange } : CheckOptionsProps) => {
    return (
        <div className="checkbox-wrapper-46">
            <input
                id={id}
                type="checkbox"
                checked={option}
                onChange={onChange}
                className="inp-cbx accent-green-400 mr-2"
            />
            <label htmlFor={id} className="cbx flex items-center text-gray-400">
                <span>
                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <span className="text-gray-200">{label}</span>
            </label>
        </div>
        
    )
}