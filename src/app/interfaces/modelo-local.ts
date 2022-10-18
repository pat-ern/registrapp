export interface Usuarios {
    numIdUsuario: number;
    strNombre: string;
    strApellido: string;
    strCorreo: string;
    strContrasena: string;
}

export interface Asistencia {
    strIdAsistencia: string;
    strAlumno: string;
    strAsignatura: string;
    strSeccion: string;
    strFecha: string;
    strHora: string;
    estaPresente: boolean;
}