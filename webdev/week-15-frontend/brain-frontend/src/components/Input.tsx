export function Input({ placeholder, reference }: { placeholder: any; reference:any }) {
    return (
        <div>
            <input placeholder={placeholder} type={"text"} className="px-4 m-2  border rounded-md py-2" ref={reference}
            />
        </div>
    )
}