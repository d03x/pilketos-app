<script setup lang='ts'>
const { code, login, isLoading } = await useLoginPemilih();
</script>
<template>
    <div class="max-w-md mx-auto my-24">
        <div class="shadow p-10 rounded-lg">
            <div>
                <h1 class="text-2xl font-semibold mb-4 text-center">Silahkan Login</h1>
            </div>
            <div class="space-y-2">
                <a-input-password v-model:value="code" placeholder="Ketikan kode pemilih anda" type="text"
                    inputmode="numeric" size="large" />
                <a-button size="large" block type="primary" :loading="isLoading" @click="login"
                    class="">MASUK</a-button>
            </div>
        </div>
    </div>
</template>
