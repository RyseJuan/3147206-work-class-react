import { useState, useEffect } from "react";
import { getDocumentTypes } from "@/features/users/services/selectServices.js";
import { Input, Button, DeleteCounter, DeleteEffect , DeleteCounter2, Select } from "@/shared";


export default function UserRegisterForm() {

    const [documentTypes, setDocumentTypes] = useState([]);

    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
    }, [])

    const handleNameChange = (e) => {
        console.log("Nombre: ", e.target.value);
    }
    const handleEmailBlur= (e) => {
        console.log("Email: ", e.target.value);
    }

    return (
        <div>
            <h1 className="text-text-primary text-2x1 mb-6">
                Registro de Usuarios
            </h1>

            <form className="grid grid-cols-1 items-center gap-6">
                <div className="grid grid-cols-2 gap-6 my-0 mx-auto">
                    
                    <Input
                        label="Nombre"
                        name="userName"
                        placeholder="Ingrese su nombre"
                        onChange={handleNameChange}
                    />
                    <Input
                        label="Correo"
                        name="userEmail"
                        placeholder="Ingrese su correo"
                        type="email"
                    />
                    <Input
                        label="Teléfono"
                        name="userPhone"
                        placeholder="Ingrese su telefono"
                        type="tel"
                    />
                    <Select
                        label="Tipo de documento"
                        name="documentType"
                        options={documentTypes}
                    />
                    <Input
                        label="Numero de documento"
                        placeholder="Ingrese su numero de documento"
                        name="documentNumber"
                    />
                    <Input
                        label="Contraseña"
                        name="userPassword"
                        placeholder="Ingrese su contraseña"
                        type="password"
                    />
                    {/* Actions */}
                    <div className="flex items-end justify-end gap-6">
                        <Button
                            variant="secondary"
                            size="sm"
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="primary"
                            size="md"
                        >
                            Guardar
                        </Button>
                    </div>

                </div>
            </form>


            <DeleteCounter2/>
            
        </div>
    );
}