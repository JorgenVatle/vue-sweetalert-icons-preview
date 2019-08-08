<template>
    <div class="container py-8">

        <!-- Heading -->
        <header class="flex justify-between flex-col sm:flex-row">
            <!-- Title -->
            <div>
                <h1 class="text-3xl leading-tight">Vue-Sweetalert-Icons</h1>
                <div class="leading-tight text-gray-500 text-sm">
                    <span>
                        <label>License</label>
                        <a href="https://github.com/JorgenVatle/vue-sweetalert-icons/blob/master/LICENSE" target="_blank" class="font-medium">ISC</a>
                    </span>
                    <span>|</span>
                    <span>
                        <label>Package</label>
                        <a href="https://www.npmjs.com/package/vue-sweetalert-icons" target="_blank">vue-sweetalert-icons</a>
                    </span>
                </div>
            </div>

            <!-- GitHub & Author -->
            <nav class="text-gray-500 text-left sm:text-right">
                <a class="font-medium text-gray-500 leading-tight"
                   href="https://github.com/JorgenVatle/vue-sweetalert-icons">
                    View on GitHub 🐱‍💻
                </a>
            </nav>
        </header>

        <!-- Icon Grid -->
        <div id="icons" class="grid md:grid-columns-3 py-4 md:py-8 md:grid-gap-4">
            <div v-for="(icon, index) in $options.icons" class="py-4 md:py-0">
                <no-ssr>
                    <sweetalert-icon :icon="icon.name" :key="icon + index" class="mb-2" />
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

<style lang="scss">
    #icons {
        // Some animations require an overlay colour for parts of the animation.
        // If possible, add an animation background explicitly; this will enable a slightly nicer looking animation.
        --sweetalert-icons-animation-background: theme('colors.gray.100');

        // With defined animation background: https://gyazo.com/5236c4ecd2e2da4bde6457ef997167bd
        // Without a defined animation background: https://gyazo.com/e5044c1606e8ca46c6f1a8f3b1f187f4
    }
</style>

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
