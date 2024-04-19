import asyncio
import websockets
import serial
import mysql.connector

# Configuración de la base de datos
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'database': 'incubadora'
}

# Conexión a la base de datos
def guardar_datos(temperatura, humedad, movimiento):
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO RegistroAmbiente (temperatura, humedad, movimiento) VALUES (%s, %s, %s)", (temperatura, humedad, movimiento))
        conn.commit()
    except mysql.connector.Error as e:
        print(f"Error de base de datos: {e}")
    finally:
        cursor.close()
        conn.close()

async def recibir_datos():
    arduino_serial = serial.Serial('/dev/cu.usbmodem14101', 9600, timeout=1)  # Cambia '/dev/cu.usbmodem14101' por el puerto correcto
    while True:
        if arduino_serial.in_waiting > 0:
            lectura = arduino_serial.readline().decode(errors='replace').strip()
            try:
                # Comprobar si la cadena contiene al menos dos comas
                if lectura.count(",") != 2:
                    raise ValueError("Formato de datos incorrecto")
                
                temperatura, humedad, movimiento = lectura.split(",")
                guardar_datos(temperatura, humedad, movimiento)
                async with websockets.connect('ws://localhost:8082') as websocket:
                    await websocket.send(lectura)
            except ValueError as e:
                print(f"Error al leer datos del sensor: {e}")
            except websockets.exceptions.WebSocketException as e:
                print(f"Error en la conexión WebSocket: {e}")
            except Exception as e:
                print(f"Error inesperado: {e}")

asyncio.run(recibir_datos())
