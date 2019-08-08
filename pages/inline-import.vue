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
                <pre class="text-xs bg-gray-900 text-gray-100 rounded-r p-4 inline-block">
&lt;template&gt;
    &lt;sweetalert-icon icon="{{ icon.name }}" /&gt;
&lt;/template&gt;

&lt;script&gt;
    import { SweetalertIcon } from 'vue-sweetalert-icons';

    export default {
        components: { SweetalertIcon },
    }
&lt;/script&gt;</pre>
            </div>
        </div>


    </div>
</template>

<script>
    import { SweetalertIcon as Icon } from 'vue-sweetalert-icons';

    export default {
        components: { Icon },
        data() {
            return {
                icons: require('../assets/json/icons'),
            }
        }
    }
</script>
