# Dashboard de control de Raspberry Pi
Este es un proyecto de aplicación web que permite monitorizar y controlar la Raspberry Pi de forma cómoda y sencilla a través de un dashboard online.

## Carecterísticas
- Monitorización en tiempo real de los sensores de la Raspberry Pi
- Gráficos y estadísticas de uso de los sensores
- Configuración del tamaño de los graficos 
- Sistema de logs para el dasbhoard

## Tecnologías
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma DB](https://www.prisma.io/)

## Prerrequisitos
- Node.js
- Una Raspberry Pi
- La Raspberry tiene que tener instalado el siguiente [codigo](https://github.com/Delapee/iot_rpi)

## Link del despliegue de la web
Web hosteada en vercel
https://iot-server-nine.vercel.app/

## Instalación y uso
Para ejecutar esta aplicación, necesitarás tener instalado Node.js y acceder a tu Raspberry Pi a través de una conexión SSH. Sigue estos pasos para instalar y utilizar el dashboard:

1. Clona este repositorio en tu pc:
```
git clone https://github.com/mi-usuario/mi-proyecto.git
```

2. Accede al directorio del proyecto y instala las dependencias necesarias
```
cd mi-proyecto
npm install
```

3. Ejecuta el servidor de desarrollo
```
npm run dev
```

4. Abre tu navegador web y accede a la dirección http://localhost:3000 para acceder al dashboard. 


## Rutas de la Api
- `api/raspberry`
- `api/raspberry/id`
- `api/sensor/ligth`
- `api/sensor/temperature`
- `api/sensor/message`