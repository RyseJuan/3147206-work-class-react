export default function Input({
    label,
    type = "text",
    ...props
}){

    
    // Cuerpo de la función
    return(
        // Contenedor del input que se exporta con label, cuerpo y feedback message
        <div className="w-[320px]">
            {/* Label */}
            <label
                className="
                    block
                    text-caption
                    mb-1
                    text-text-primary
                "
                >
                    {label}
            </label>
            {/* Contenedor del input */}
            <div>

                {/* Area interactiva invisible de un input 48px */}

                <div
                    className="
                        absolute
                        inset-0
                    "
                    onMouseDown={(e) => {
                        e.preventDefault();
                        // Obtiene el siguiente elemento hermano del elemento actual (el que disparó el evento)
                        // y le asigna el foco (cursor), es decir, pasa al siguiente campo automáticamente.
                        e.currentTarget.nextSibling.focus();
                    }}
                    >

                </div>

                {/* Area visual */}
                <input
                    className="
                        relative
                        w-full
                        h-12
                        rounded-md
                        border
                        border-border
                        px-4
                        text-base
                        focus:outline-none
                        focus:ring-2
                        focus:ring-focus-ring
                        focus:border-focus-border
                    "
                        {...props}
                    >
                        
                </input>

            </div>

            {/* Feedback message */}
            <div>

            </div>

        </div>
    )


} 