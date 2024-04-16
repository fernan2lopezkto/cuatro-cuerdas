import os

# Función para procesar un archivo de texto
def procesar_archivo(input_path, output_path):
    with open(input_path, 'r',  encoding='utf-8', errors='ignore') as archivo_entrada:
        contenido = archivo_entrada.read().replace('\n', '\\n')
    
    with open(output_path, 'w', encoding='utf-8') as archivo_salida:
        archivo_salida.write(contenido)

# Directorios de entrada y salida
directorio_entrada = './src/data/lyrics'
directorio_salida = os.path.join('src/data/lyrics/output')
directorio_procesados = os.path.join('src/data/lyrics/ya-procesados')

# Crear directorio de salida si no existe
if not os.path.exists(directorio_salida):
    os.makedirs(directorio_salida)

# Crear directorio de ya-procesados si no existe
if not os.path.exists(directorio_procesados):
    os.makedirs(directorio_procesados)

# Procesar archivos en el directorio de entrada
for archivo in os.listdir(directorio_entrada):
    if archivo.endswith('.txt'):
        input_path = os.path.join(directorio_entrada, archivo)
        output_path = os.path.join(directorio_salida, archivo)
        procesar_archivo(input_path, output_path)
        
        # Mover archivo procesado al directorio de ya-procesados
        os.rename(input_path, os.path.join(directorio_procesados, archivo))
