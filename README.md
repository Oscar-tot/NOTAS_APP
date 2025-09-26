# Sistema de Procesamiento de Notas

**Desarrollado por:** Oscar Antonio Hernández López  
**Carné:** 2019-1234-567  
**Tecnología:** Angular 20.3.3

Una aplicación web desarrollada en Angular para procesar y analizar notas estudiantiles. Permite ingresar una lista de notas separadas por coma y calcular estadísticas detalladas incluyendo promedio, aprobados vs reprobados, y notas extremas.

## 🚀 Características

- ✅ Interfaz intuitiva y responsive
- ✅ Validación de datos de entrada
- ✅ Cálculo automático de estadísticas
- ✅ Análisis de aprobados vs reprobados (>60 como aprobado)
- ✅ Identificación de notas más alta y más baja
- ✅ Visualización de datos con tarjetas interactivas
- ✅ Manejo de errores y validaciones

## 📋 Funcionalidades

### Datos Personales
- Muestra nombre completo y número de carné en la parte superior

### Formulario de Notas
- Campo de texto para ingresar notas separadas por coma
- Validación de formato numérico (0-100)
- Botones para calcular estadísticas y limpiar formulario

### Resultados y Estadísticas
- **Promedio:** Cálculo del promedio general
- **Aprobados:** Cantidad de notas > 60
- **Reprobados:** Cantidad de notas ≤ 60
- **Nota más alta:** Valor máximo ingresado
- **Nota más baja:** Valor mínimo ingresado
- **Porcentaje de aprobación:** Relación aprobados/total
- **Resumen detallado:** Análisis completo de los datos

## 🛠️ Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm (viene incluido con Node.js)
- Angular CLI instalado globalmente

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd examen-oscar
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación:**
   ```bash
   ng serve
   ```
   o
   ```bash
   npm start
   ```

4. **Abrir en el navegador:**
   Navegar a `http://localhost:4200/`

## 📖 Guía de Uso

1. **Ingreso de Datos:**
   - En el campo de texto, ingrese las notas separadas por coma
   - Ejemplo: `85, 90, 75, 88, 92, 45, 78, 95`

2. **Validaciones:**
   - Solo se aceptan números entre 0 y 100
   - Los valores deben estar separados por comas
   - Se muestran mensajes de error para entradas inválidas

3. **Cálculo de Estadísticas:**
   - Haga clic en "Calcular Estadísticas"
   - Los resultados se muestran en tarjetas visuales
   - Incluye resumen detallado al final

4. **Limpiar Formulario:**
   - Use el botón "Limpiar" para reiniciar la aplicación

## 🎨 Características Técnicas

- **Framework:** Angular 20.3.3
- **Estilos:** CSS3 con diseño responsive
- **Validaciones:** Validación en tiempo real
- **Arquitectura:** Componente único con lógica separada
- **Responsive:** Adaptable a dispositivos móviles y escritorio

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)

## 🧪 Casos de Prueba

Pruebe la aplicación con estos ejemplos:

- **Caso básico:** `85, 90, 75, 88, 92`
- **Con reprobados:** `45, 78, 95, 55, 89, 42`
- **Números decimales:** `85.5, 90.2, 75.8`
- **Caso límite:** `0, 100, 60, 61`
- **Error:** `85, abc, 90` (para probar validación)

## 👨‍💻 Desarrollador

**Oscar Antonio Hernández López**  
Carné: 2019-1234-567  
Proyecto desarrollado como examen práctico de Angular

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
