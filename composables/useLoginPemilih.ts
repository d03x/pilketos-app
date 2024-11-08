import axios, { AxiosError } from "axios";
interface ErrorReponse {
    status: boolean,
    message: string
}
export const useLoginPemilih = async () => {
    const code = ref<string>();
    const isLoading = ref<boolean>(false)
    async function login() {
        isLoading.value = !isLoading.value;
        if (code.value) {
            try {
                const response = await axios.post("/api/auth/check-code", {
                    code: code.value,
                });
                message.info("HEllo world")
            } catch (e: any) {
                const error = e as AxiosError<ErrorReponse>;
                if (error.response?.data?.status == false) {
                    message.error(error.response.data?.message);
                }
            } finally {
                isLoading.value = !isLoading.value
            }
        } else {
            message.info("Isi kode terlebih dahulu!");
        }
    }
    return {
        login,
        code,
        isLoading
    }
}