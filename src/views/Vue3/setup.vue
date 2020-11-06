<template>
<div>
    <a-input v-model:value="message" placeholder="Basic usage" />
    {{message}}
    <a-button @click="handleRouter">跳转路由</a-button>
</div>
</template>

<script>
import {
    setLocal
} from "../../utils/store"
import {
    reactive,
    ref,
    toRefs,
    getCurrentInstance,
    watch,
    onMounted
} from "vue"
import {
    useRoute,
    useRouter
} from 'vue-router'
import routes from "../../router/router"
export default {
    setup() {

        const {
            ctx
        } = getCurrentInstance();
        console.log(ctx.$store.state.menu)

        const router = useRouter();
        const route = useRoute();

        const state = reactive({
            message: "hello world111",
            routes
        })

        watch(() => route.path, (newValue, oldValue) => {
            console.log("路由变化了")
            console.log(newValue);
            console.log(oldValue)
        })

        const handleRouter = () => {
            router.push("/setup/" + Math.random())
            state.message = 'hello world'
            state.message = state.message + Math.random();
        }
        onMounted(() => {
            getList();
        })
        const getList = () => {
            ctx.$http.get(`/app/auth?userName=18888888888&password=123456`)
                .then(res => {
                    console.log(res)
                    setLocal("userData", res.data.rtData);
                    getMenuList();
                })
        }

        const getMenuList = () => {

        }
        console.log(toRefs(state))
        return Object.assign({}, toRefs(state), {
            handleRouter
        })
    },
    mounted() {
        console.log(this.$http)
    }
}
</script>

<style>

</style>
