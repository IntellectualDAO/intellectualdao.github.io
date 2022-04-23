<template>
    <div>
        <button v-if="!connected" @click="connect">Connect</button>
        <div v-else class="d-flex-col gapy-8">
            <div>Logged in</div>
            <div>{{ $store.state.address }}</div>
            <input @change="fileInput" type="file" />
            <button @click="logout">logout</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import md5 from 'md5';

export default {
    mounted() {
        console.log(this.$web3auth);
    },
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
        async fileInput(event) {
            const hash = await new Promise((resolve, reject) => {
                var reader = new FileReader();
                reader.addEventListener('load', function () {
                    resolve(md5(this.result));
                });
                reader.readAsArrayBuffer(event.target.files[0]);
            });
            this.signFile(hash);
        },
        ...mapActions({
            logout: 'logout',
            signFile: 'signFile'
        })
    }
};
</script>

<style lang="scss" scoped></style>
