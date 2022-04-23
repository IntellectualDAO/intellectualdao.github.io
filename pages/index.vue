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
import SparkMD5 from 'spark-md5';

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
            try {
                const hash = await new Promise((resolve, reject) => {
                    var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
                        file = event.target.files[0],
                        chunkSize = 2097152,
                        chunks = Math.ceil(file.size / chunkSize),
                        currentChunk = 0,
                        spark = new SparkMD5.ArrayBuffer(),
                        fileReader = new FileReader();

                    fileReader.onload = function (e) {
                        console.log('read chunk nr', currentChunk + 1, 'of', chunks);
                        spark.append(e.target.result); // Append array buffer
                        currentChunk++;

                        if (currentChunk < chunks) {
                            loadNext();
                        } else {
                            console.log('finished loading');
                            const hash = spark.end();
                            console.info('computed hash', hash); // Compute hash
                            resolve(hash);
                        }
                    };

                    fileReader.onerror = function () {
                        console.warn('oops, something went wrong.');
                        reject();
                    };

                    function loadNext() {
                        var start = currentChunk * chunkSize,
                            end = start + chunkSize >= file.size ? file.size : start + chunkSize;

                        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
                    }

                    loadNext();
                });
                console.log(hash)
                this.signFile(hash);
            } catch (e) {
                alert('something went wrong');
            }
        },
        ...mapActions({
            logout: 'logout',
            signFile: 'signFile'
        })
    }
};
</script>

<style lang="scss" scoped></style>
