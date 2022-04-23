<template>
    <section class="index container">
        <header class="index__header p-20 pb-100">
            <h1 class="medium">Intellectual DAO</h1>
            <p class="primaryc pb-30 pt-10">Intellectual property management ecosystem in 3 easy steps</p>
            <em
                >We know that artists and authors usually want to focus on the actual craft or research, so we empower all kinds of creators to concetrate on their creative processes and let the smart
                contracts take care of their intellectual property.
            </em>
        </header>
        <div class="index__drop p-20 pb-100">
            <h2 class="mb-30">1 Upload File</h2>
            <input @change="fileInput" type="file" />
        </div>
        <div class="index__submit p-20 pb-100">
            <h2>2 Create Intellectual Property</h2>
            <form class="d-flex-col px-40 pt-60" @submit.prevent="createIP({ hash, name, symbol })">
                <input placeholder="Enter the name of your IP, ex: “unicorn drawing”" required class="mb-33" v-model="name" type="text" />
                <input placeholder="Enter a symbol, ex: “s2!”" required class="mb-24" v-model="symbol" type="text" />
                <button class="primarybg">Submit</button>
            </form>
        </div>
        <div class="p-20 pb-100">
            <h2>3 View my signature files</h2>
        </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex';
import SparkMD5 from 'spark-md5';

export default {
    data() {
        return {
            name: '',
            symbol: '',
            hash: null,
            options: {
                url: 'http://httpbin.org/anything'
            }
        };
    },
    computed: {
        connected() {
            return this.$store.state.connected;
        }
    },
    methods: {
        test(file, response) {
            console.log(file, response)
        },
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
                        spark.append(e.target.result); // Append array buffer
                        currentChunk++;

                        if (currentChunk < chunks) {
                            loadNext();
                        } else {
                            const hash = spark.end();
                            resolve(hash);
                        }
                    };

                    fileReader.onerror = function () {
                        reject();
                    };

                    function loadNext() {
                        var start = currentChunk * chunkSize,
                            end = start + chunkSize >= file.size ? file.size : start + chunkSize;

                        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
                    }

                    loadNext();
                });
                this.hash = hash;
            } catch (e) {
                alert('something went wrong');
            }
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
.index {
    &__header {
        & > p {
            color: #4e2bc3;
            font-size: 3rem;
        }
        & > em {
            font-size: 2.5rem;
            line-height: 4rem;
        }
    }
    &__drop {
       & button {
           background-color: #8247E5;
           color: white;
           width: 14rem;
           height: 3.5rem;
           border-radius: .3rem;
       } 
    }
    &__submit {
        & input {
            width: 50rem;
            height: 4.8rem;
            padding-left: 1.5rem;
        }
        & button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 14rem;
            height: 3.5rem;
            padding: 1rem 1.6rem;
            background: #331684;
            color: white;
            border-radius: 3rem;
        }
    }
    & > *:not(:last-child) {
        border-bottom: 1px solid gray;
    }
}
.dz-message, .dz-preview {
    display: none !important;
}
</style>
