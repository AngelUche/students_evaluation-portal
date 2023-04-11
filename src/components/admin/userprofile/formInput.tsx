// jshint esversion:6

interface FormInputProps {
    id: string
    type: string
    label: string
    editProfileStatus: boolean
    value: any
    onChange: (e: any) => void
}

function FormInput({ id, type, label, editProfileStatus, value, onChange }: FormInputProps) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-700" htmlFor={id}>{label}</label>
            <input className={`p-2 text-gray-700 text-[14px] rounded-sm ${editProfileStatus ? "border-[1px] border-gray-300 bg-editFormFieldBg focus:border-blue-500 outline-none" : "bg-formFieldBg"} `} type={type} id={id} value={value} disabled={!editProfileStatus} onChange={onChange} />
        </div>
    );
}

export { FormInput };