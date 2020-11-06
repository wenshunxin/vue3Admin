<template>
    <h1>{{ state.count }} * 2={{ double }}</h1>
    <h2>{{num1}}</h2>
    <button @click="add">累加</button>
    

    <Suspense>
        <template #defalut>
            <AsyncComponent :timeout="3000"></AsyncComponent>
        </template>
        <template #fallback>
            <div>失败了</div>
        </template>
    </Suspense>



    <Teleport to="#to-footer">
        <h2>我更改了地铁吧</h2>
    </Teleport>

    
</template>
<script>
import { reactive, computed,ref,onMounted} from "vue";
import AsyncComponent from  "./Demo01"
export default {
    components:{
        AsyncComponent
    },
    setup() {
        const state = reactive({
            count: 1,
        });
        const num = ref([1,3]);
        
        console.log(num.value.concat([1,4]))
        const num1 = num.value.concat([1,4])
        const add = ()=> {
            state.count++;
        }
        const double = computed(() => state.count * 2);

        onMounted(()=>{
            console.log("onMounted")
        })

        return { state, add, double,num1 };
    },
};
/** 
 * setup 
 * setup是新的选项，可以理解是componsition的入口，函数内部在beforCreate之前调用，函数范湖的内容会做为模板渲染的上下文
 * 
 * reactive
 * 其实和vue2里的Vue.objserverable是一样的 把一个数据变成响应式，这个能力是完全独立的
 * 
 * computed 
 * 计算属性
*/
</script>
