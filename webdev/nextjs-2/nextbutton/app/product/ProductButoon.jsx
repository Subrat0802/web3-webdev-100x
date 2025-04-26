'use client'

export default function ProductButoon({price}) {
    console.log(price);
    return(
        <button onClick={() => alert(price)}>
            Click me
        </button>
    )
}