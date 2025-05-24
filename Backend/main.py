from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

# Instancia de FastAPI
app = FastAPI()

# Configuración de CORS para permitir solicitudes desde el frontend en localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Modelo de datos para un dispositivo
class Dispositivo(BaseModel):
    id: str
    nombre: str
    modelo: str
    estado: str

# Lista mock de dispositivos GPS 
dispositivos = [
    {"id": "1", "nombre": "GPS Alpha", "modelo": "XA-100", "estado": "Activo"},
    {"id": "2", "nombre": "GPS Beta", "modelo": "XB-200", "estado": "Inactivo"},
    {"id": "3", "nombre": "Sensor Gamma", "modelo": "SG-300", "estado": "Activo"},
    {"id": "4", "nombre": "Sensor Delta", "modelo": "SD-400", "estado": "Inactivo"},
    {"id": "5", "nombre": "Monitor Epsilon", "modelo": "ME-500", "estado": "Activo"},
    {"id": "6", "nombre": "Tracker Zeta", "modelo": "TZ-600", "estado": "Inactivo"},
    {"id": "7", "nombre": "Módulo Eta", "modelo": "MT-700", "estado": "Activo"},
    {"id": "8", "nombre": "Unidad Theta", "modelo": "UT-800", "estado": "Inactivo"},
    {"id": "9", "nombre": "GPS Iota", "modelo": "GI-900", "estado": "Activo"},
    {"id": "10", "nombre": "GPS Kappa", "modelo": "GK-010", "estado": "Inactivo"},
    {"id": "11", "nombre": "Sensor Lambda", "modelo": "SL-110", "estado": "Activo"},
    {"id": "12", "nombre": "Sensor Mu", "modelo": "SM-120", "estado": "Inactivo"},
    {"id": "13", "nombre": "Monitor Nu", "modelo": "MN-130", "estado": "Activo"},
    {"id": "14", "nombre": "Tracker Xi", "modelo": "TX-140", "estado": "Inactivo"},
    {"id": "15", "nombre": "Módulo Omicron", "modelo": "MO-150", "estado": "Activo"},
    {"id": "16", "nombre": "Unidad Pi", "modelo": "UP-160", "estado": "Inactivo"},
    {"id": "17", "nombre": "GPS Rho", "modelo": "GR-170", "estado": "Activo"},
    {"id": "18", "nombre": "GPS Sigma", "modelo": "GS-180", "estado": "Inactivo"},
    {"id": "19", "nombre": "Sensor Tau", "modelo": "ST-190", "estado": "Activo"},
    {"id": "20", "nombre": "Sensor Upsilon", "modelo": "SU-200", "estado": "Inactivo"},
    {"id": "21", "nombre": "Monitor Phi", "modelo": "MP-210", "estado": "Activo"},
    {"id": "22", "nombre": "Tracker Chi", "modelo": "TC-220", "estado": "Inactivo"},
    {"id": "23", "nombre": "Módulo Psi", "modelo": "MP-230", "estado": "Activo"},
    {"id": "24", "nombre": "Unidad Omega", "modelo": "UO-240", "estado": "Inactivo"},
    {"id": "25", "nombre": "GPS Nova", "modelo": "GN-250", "estado": "Activo"},
    {"id": "26", "nombre": "Sensor Orion", "modelo": "SO-260", "estado": "Inactivo"},
    {"id": "27", "nombre": "Monitor Vega", "modelo": "MV-270", "estado": "Activo"},
    {"id": "28", "nombre": "Tracker Sirius", "modelo": "TS-280", "estado": "Inactivo"},
    {"id": "29", "nombre": "Módulo Polaris", "modelo": "MP-290", "estado": "Activo"},
    {"id": "30", "nombre": "Unidad Andrómeda", "modelo": "UA-300", "estado": "Inactivo"}
]

# Ruta GET para obtener todos los dispositivos
@app.get("/dispositivos")
def obtener_dispositivos():
    return dispositivos

# Ruta API para obtener un dispositivo por su ID
@app.post("/dispositivos/{dispositivo_id}")
def obtener_dispositivo(dispositivo_id: str):
    for d in dispositivos:
        if d["id"] == dispositivo_id:
            return d
    raise HTTPException(status_code=404, detail="Dispositivo no encontrado")