<template>
    <div class="container my-8">
        <h1 class="text-3xl">Inline import of vue-sweetalert-icon</h1>
        <div class="flex justify-between my-8">
            <!-- Inline imported icon -->
            <no-ssr>
                <icon icon="success" />
            </no-ssr>

            <!-- Code Preview -->
            <pre class="text-xs bg-gray-900 text-gray-100 rounded p-4 inline-block">
&lt;template&gt;
    &lt;sweetalert-icon icon="success" /&gt;
&lt;/template&gt;

&lt;script&gt;
    import { SweetalertIcon } from 'vue-sweetalert-icons';

    export default {
        components: { SweetalertIcon },
    }
&lt;/script&gt;</pre>
        </div>

    </div>
</template>

<script>
    import { SweetalertIcon as Icon } from 'vue-sweetalert-icons';

    export default {
        components: { Icon },
    }
</script>
