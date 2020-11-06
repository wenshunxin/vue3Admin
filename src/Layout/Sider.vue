<template>
<a-menu mode="inline" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys">
    <SiderItem v-for="(router,index) in menu" :item="router" :key="index"></SiderItem>
</a-menu>
<!---<a-button @click="handlebtn(btn)">按钮</a-button> -->
</template>

<script>
import {
    reactive,
    ref,
    watch,
    getCurrentInstance,
    onMounted,
    toRefs,
    nextTick,
    toRef,
    computed
} from 'vue'
import {
    useRoute
} from "vue-router"
import SiderItem from "./components/SiderItem"
export default {
    components: {
        SiderItem
    },
    setup(props) {
        const state = reactive({
            menu: [],
            selectedKeys: ['0']
        });

        const {
            path
        } = useRoute();
        onMounted(() => {
            ctx.$http.post(`/app/module/moduleTreeListByFarmSid?farmSid=71`)
                .then(res => {
                    state.menu = res.data.rtData;
                })

        });

        const openKeys = ref(['/energy']);
        console.log(

            openKeys
        )
        const {
            ctx
        } = getCurrentInstance();
        return Object.assign({}, toRefs(state), {
            openKeys
        })
    }
}
</script>
