# 🧾 Frontend - Registro de Eventos (Finaktiva)

Este es el frontend del proyecto **Finaktiva - Registro de Eventos**, desarrollado con **Angular 19** y desplegado en **Vercel**. Consume la API desarrollada en NestJS alojada en **AWS Lambda**.

## 🚀 Tecnologías utilizadas

- ⚛️ Angular 19 
- 💨 TailwindCSS para estilos
- 🔐 Autenticación simulada en frontend
- 🌍 Despliegue en Vercel
- 🌐 Consumo de API externa en AWS Lambda

## 🎯 Funcionalidades

- ✅ Login con validación en frontend
- ✅ Tabla de eventos
- ✅ Filtro por tipo (`API` o `Manual`)
- ✅ Filtro por fecha: desde y hasta
- ✅ Creación de eventos manuales mediante modal

## 📦 Estructura de carpetas

```bash
src/
├── app/
│   ├── login/                     # Componente de Login
│   ├── events-table/              # Tabla con filtros
│   ├── create-events/             # Formulario en modal
│   ├── services/                  # Servicio para consumir API
│   ├── app.routes.ts              # Ruteo 
│   └── app.component.ts           # Componente principal
```

## 🛠️ Instalación y ejecución local

### Clona el repositorio:

```bash
git clone https://github.com/juanregino/prueba-finaktiva-front.git
cd prueba-finaktiva-front
```

### Instala las dependencias:

```bash
npm install
```

### Ejecuta el proyecto:

```bash
ng serve
```

La app estará disponible en:
👉 http://localhost:4200

## 🔓 Credenciales de acceso

Este proyecto simula autenticación desde frontend:

**Usuario:** admin@admin.com  
**Contraseña:** 123456

## 🧪 Flujo funcional

1. Inicia sesión en la página principal
2. Visualiza los eventos registrados
3. Filtra por tipo (API o Manual) y/o por fechas
4. Crea un nuevo evento usando el botón modal
5. Valida que se agregue a la tabla

## 🌐 Despliegue en Vercel

Este proyecto está desplegado automáticamente en Vercel:

🔗 https://prueba-finaktiva-front.vercel.app


## 📬 Autor

**Autor:** Juan Pablo Regino Penagos  
📧 juanreginopenagos@gmail.com  
