# Laboratorio Next.js

## Tipos de render empleados

Para el listado, teniendo en cuenta que implementamos la posibilidad de filtrar las casas: SSG inicial + CSR

Con el SSG optimizamos el rendimiento y el SEO del listado, que no cambiará con frecuencia sin la interacción del usuario. Con el CSR para cuando el usuario filtre las casas, conseguimos que se procese la búsqueda en cliente de manera inmediata

Para la página de detalle, que entendemos que no cambiará con frecuencia: SSG + ISR

Con el SSG tenemos las páginas pre-generadas, optimizando nuevamente el rendimiento, y usamos el ISR para poder actualizar los pequeños datos que cambien en ellas sin tener que generar una nueva build completa

## Desafíos implementados

Filtrado por nombre y ubicación

Optimización de imágenes con Next.js Image
