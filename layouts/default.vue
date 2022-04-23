<template>
    <section class="default relative h-100 px-10 pr-30">
        <UiHeader />
        <main>
            <Nuxt />
        </main>
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
    background-image: linear-gradient(130deg, #e5e5e5 0%, #cec8f3 45%); //#1b1b5a
    color: black;
}
</style>
