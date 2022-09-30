import React from 'react'

const GenerateForm = (props) => {
    return (
        <>
            {(props.formInputs).map((item, index) => {
                return (
                    <div key={index} className="bg-white w-full flex items-center gap-0 font-roboto outline outline-1 outline-[#545454]/30 hover:outline-[#545454]/60 focus:outline-[#545454] transition-all duration-400 rounded-sm">
                        <span className={`${item.icon.size} w-12 h-max grid place-content-center border-r-2 border-r-[#545454]/40 text-[#545454]/60 transition-all duration-400`}>
                            {item.icon.name}
                        </span>
                        {
                            (item.type === "input") ?
                            (
                                <input
                                    type={item.input.type}
                                    name={item.input.name}
                                    id={item.input.name}
                                    placeholder={item.input.placeholder}
                                    required={item.input.required}
                                    autoComplete='off'
                                    className="w-full p-2 focus:outline-none"
                                />
                            ) :
                            (
                                <select
                                    name={item.select.name}
                                    id={item.select.name}
                                    defaultValue={item.select.default}
                                    required={item.select.required}
                                    className="w-full p-2 focus:outline-none"
                                >
                                    {(item.options).map((option, index) => (
                                        <option key={index} value={option.value} disabled={option.disabled}>{option.text}</option>
                                    ))}
                                </select>
                            )
                        }
                    </div>
                )
            })}
        </>
    )
}

export default GenerateForm