<template>
    <section class="default relative h-100 d-flex-col">
        <div class="default__content w-100 p-20 pt-40 pb-50">
            <Nuxt />
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {}
};
</script>

<style lang="scss" scoped>

.default {
    overflow: hidden;
    overflow-y: auto;
    height: 100%;
    &__content {
        color: white;
        border-radius: 0.8rem;
        max-width: 100%;
    }
    background-image: radial-gradient(78.98% 129.63% at -4.4% 0%, rgba(0, 49, 156, 0.541) 0%, rgba(255, 182, 212, 0) 100%), linear-gradient(40.11deg, #020f35 -0.12%, #2f007a 100%); //#1b1b5a
}

</style>
