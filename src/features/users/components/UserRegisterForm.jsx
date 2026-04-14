import { useState, useEffect } from "react";
import { getDocumentTypes } from "@/features/users/services/selectServices.js";
import { Input, Button, Select } from "@/shared";
import { userSchema } from '../schemas/userSchema.js';


export default function UserRegisterForm() {

    const [documentType, setDocumentType] = useState([]);
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
        userPassword: "",
    });
    const [errors, setErrors] = useState({})

    useEffect(() => {
        getDocumentTypes().then(setDocumentType);
    }, [])

    // ==============================================
    //               Handle Genérico 
    // ==============================================

    // Funcion que se ejecuta cada vez que cambia el valor de un input del formulario

    const handleChange = (e) => {
        // Se obtiene el nombre del campo y su valor 
        const { name, value } = e.target;

        setFormData((prev) => ({
            // Se copian todos los valores anteriores del estado
            ...prev,

            // Se actualiza unicamente lo que cambió
            [name]: value,
        }));
    }

    // ==============================================
    //               Handle Genérico 
    // ==============================================

    // Funcion que se ejecuta cuando se envia el formulario

    const handleSubmit = (e) => {

        e.preventDefault();

        const result = userSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0];
                fieldErrors[field] = issue.message;
            });
            
            setErrors(fieldErrors);
            return;
        }

        setErrors({})

        console.log("Usuario valido:", result.data);
        
    };

    return (
        <div>
            <h1 className="text-text-primary text-2x1 mb-6">
                Registro de Usuarios
            </h1>

            <form
            className="grid grid-cols-1 items-center gap-6"
            onSubmit={handleSubmit}
            >
            
                <div className="grid grid-cols-2 gap-6 my-0 mx-auto">
                    
                    <Input
                        label="Nombre"
                        name="userName"
                        placeholder="Ingrese su nombre"
                        value={formData.userName}
                        onChange={handleChange}
                        error={errors.userName}
                    />
                    <Input
                        label="Correo"
                        name="userEmail"
                        placeholder="Ingrese su correo"
                        value={formData.userEmail}
                        type="email"
                        onChange={handleChange}
                        error={errors.userEmail}
                    />
                    <Input
                        label="Teléfono"
                        name="userPhone"
                        placeholder="Ingrese su telefono"
                        value={formData.userPhone}
                        type="tel"
                        onChange={handleChange}
                        error={errors.userPhone}
                    />
                    <Select
                        label="Tipo de documento"
                        name="userDocumentType"
                        value={formData.userDocumentType}
                        options={documentType}
                        onChange={handleChange}
                        error={errors.userDocumentType}
                    />
                    <Input
                        label="Numero de documento"
                        name="userDocumentNumber"
                        placeholder="Ingrese su numero de documento"
                        value={formData.userDocumentNumber}
                        onChange={handleChange}
                        error={errors.userDocumentNumber}
                    />
                    <Input
                        label="Contraseña"
                        name="userPassword"
                        placeholder="Ingrese su contraseña"
                        value={formData.userPassword}
                        type="password"
                        onChange={handleChange}
                        error={errors.userPassword}
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

            
        </div>
    );
}