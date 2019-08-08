<template>
    <div class="container my-8">
        <h1 class="text-3xl">Import directly into a vue SFC</h1>
        <div class="xl:grid grid-columns-2 grid-gap-8">
            <div class="flex justify-between items-center my-4 bg-white shadow-2xl rounded" v-for="icon in icons">
                <!-- Icon -->
                <div class="w-full p-4">
                    <no-ssr>
                        <icon :icon="icon.name" />
                    </no-ssr>
                    <div class="text-center">
                        <h3 class="text-xl capitalize" v-text="icon.name"></h3>
                    </div>
                </div>

                <!-- Code Preview -->
                <no-ssr>
                <code-highlight class="text-xs rounded-r inline-block">&lt;template&gt;
    &lt;sweetalert-icon icon="{{ icon.name }}" /&gt;
&lt;/template&gt;

&lt;script&gt;
    import { SweetalertIcon } from 'vue-sweetalert-icons';

    export default {
        components: { SweetalertIcon },
    }
&lt;/script&gt;</code-highlight></no-ssr>
            </div>
        </div>


    </div>
</template>

<style lang="scss">
    pre[class*="language-"] {
        padding: 0;
        margin: 0;
        overflow: auto;
    }

    pre[class*="language-"] {
        @apply p-4 rounded-r;
    }
</style>

<script>
    import { SweetalertIcon as Icon } from 'vue-sweetalert-icons';
    import { component as CodeHighlight } from 'vue-code-highlight';
    import 'vue-code-highlight/themes/duotone-sea.css';

    export default {
        components: { Icon, CodeHighlight },
        data() {
            return {
                icons: require('../assets/json/icons'),
            }
        }
    }
</script>
