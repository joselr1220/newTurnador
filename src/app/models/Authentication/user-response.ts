export class UserResponse {
    success: boolean;
    token: string;
    message: string;
    data: {
        usuario: {
            C_EMP: string,
            ID: number,
            CORREO: string,
            IMAGEN: string,
            NOMBRE_USUARIO: string,
            USUARIO_APLICATIVO: string,
            C_AGE_TRABAJO: string
            DEP_AGE: string
        },
        roles: [
            {
                CODIGO_ROL: string,
                DESCRIPCION_ROL: string,
                CODIGO_USUARIO: string,
                C_EMP: string
            }
        ]
    }
}
