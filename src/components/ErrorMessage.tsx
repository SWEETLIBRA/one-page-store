import React from "react";

interface ErrorMesageProps {
    error: string
}

export function ErrorMesage({error}: ErrorMesageProps) {
    return (
        <p className='text-center text-red-600'>{ error }</p>
    )
}