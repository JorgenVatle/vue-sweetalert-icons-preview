<template>
    <div class="container py-8">

        <!-- Heading -->
        <header class="flex justify-between">
            <!-- Title -->
            <h1 class="text-3xl">Vue-Sweetalert-Icons</h1>

            <!-- GitHub & Author -->
            <nav class="text-gray-500 text-right">
                <a class="font-medium text-gray-500 leading-tight"
                   href="https://github.com/JorgenVatle/vue-sweetalert-icons">
                    View on GitHub 🐱‍💻
                </a>
                <p class="leading-tight">
                    <small>
                        <label>Author</label>
                        <a href="https://github.com/JorgenVatle" target="_blank" class="font-medium">Jørgen Vatle</a>
                    </small>
                </p>
            </nav>
        </header>

        <!-- Icon Grid -->
        <div class="grid md:grid-columns-3 py-4 md:py-8 md:grid-gap-4">
            <div v-for="(icon, index) in $options.icons" class="py-4 md:py-0">
                <no-ssr>
                    <sweetalert-icon :icon="icon.name" :key="icon + index" class="mb-2"/>
                </no-ssr>
                <div class="text-center">
                    <div>
                        <label class="text-xl capitalize" v-text="icon.name"></label>
                    </div>
                    <code class="text-gray-600">&lt;sweetalert-icon icon="{{icon.name}}" /&gt;</code>
                </div>
            </div>
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
            },
        ],
    };
</script>
