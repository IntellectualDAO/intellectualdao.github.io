<template>
    <div class="header container d-flex gapx-8 end middle">
        <button>Upload</button>
        <button>View</button>
        <button v-if="!connected" @click="connect">Connect</button>
        <button v-else @click="logout">Logout</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    computed: {
        connected() {
            return this.$store.state.connected;
        }
    },
    methods: {
        async connect() {
            const web3auth = this.$web3auth;
            await web3auth.connect();
        },
        ...mapActions({
            logout: 'logout',
            createIP: 'createIP',
            signFile: 'signFile'
        })
    }
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    height: 10rem;
    width: 100%;
    & button {
        width: 15rem;
        height: 3rem;
        background: #dcd4ff;
        border-radius: 1.2rem;
    }
}
</style>
