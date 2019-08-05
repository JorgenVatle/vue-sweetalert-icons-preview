<template>
    <div class="container py-8">
        <h1 class="text-3xl">Vue-Sweetalert-Icons</h1>
        <div class="grid md:grid-columns-3 py-4 md:py-8 md:grid-gap-4">
            <div v-for="(icon, index) in $options.icons" class="py-4 md:py-0">
                <sweetalert-icon :icon="icon.name" :key="icon + index" class="mb-2" />
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
            }
        ]
    }
</script>
