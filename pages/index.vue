<template>
    <div class="container py-8">
        <h1 class="text-3xl">Icons</h1>
        <div v-for="(icon, index) in $options.icons">
            <sweetalert-icon :icon="icon.name" :key="icon + index" />
        </div>
    </div>
</template>

<script>
    export default {
        icons: [
            {
                name: 'success',
            },
            {
                name: 'warning',
            },
            {
                name: 'error',
            },
            {
                name: 'info',
            },
            {
                name: 'loading',
            }
        ]
    }
</script>
