<template>
    <!-- Contenedor principal para el mensaje de error  404 -->
    <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-xl-6 my-5">
            <div class="text-center">
                <!-- Preheading -->
                <h6 class="text-uppercase text-muted mb-4 display-2">
                    404 error
                </h6>

                <!-- Heading -->
                <h1 class="display-4 mb-3">
                    Página no encontrada 😭
                </h1>

                <!-- Subheading -->
                <p class="text-muted mb-4 display-6">
                    Terminaste aquí por accidente?
                </p>

                <!-- Button -->
                <!-- Enlace que redirige al usuario al inicio de la aplicación -->
                <router-link class="btn btn-lg btn-primary text-white fw-bolder" to="/producto">Regresar al
                    inicio</router-link>
            </div>
        </div>
    </div>
</template>

<script>
// Componente Vue para mostrar un mensaje de error  404
export default {
    name: 'ErrorNotFound',
    // No se requieren props ni métodos adicionales para este componente
}
</script>
