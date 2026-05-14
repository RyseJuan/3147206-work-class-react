import DataTable from "@/shared/components/DataTable";
import { userColumns } from "../table/userColumns";
import { users } from "../data/users";
import { Link } from "react-router-dom"
import { Button } from "@/shared";

export default function ListUserPage() {
    return (
        <div className="p-6">
        <h1 className="text-xl font-semibold mb-4">Usuarios</h1>

        
        <div className="flex gap-6 mb-7 ml-300">
                <Link to="/dashboard">
                <Button variant="primary" size="md">
                    Crear Usuario
                </Button>
                </Link>

                <Link to="/">
                <Button variant="primary" size="md">
                    Crear Reporte
                </Button>
                </Link>
            </div>
        

        <DataTable data={users} columns={userColumns} />
        
        </div>
    );
}
