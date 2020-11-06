<template>
    <div class="login" :style="{background:`url(${bg.bg}) no-repeat center`}">
        <div class="login_form p_20 absolute center right_0" >
            <div class="flex align_center justify_center">
                <img :src="bg.logo" alt="">
                <h1 class="margin_0">Vue Admin</h1>
            </div>
            <a-form 
                :model="form" 
                class="mt_30" 
                :layout="form.layout" 
                v-bind="layout"
            >
                <a-form-item label="账号">
                    <a-input v-model:value="form.userName" maxLength='11' placeholder="请输入账号" />
                </a-form-item>
                <a-form-item label="密码">
                    <a-input v-model:value="form.password" placeholder="请输入密码" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" @click="handleFinish">
                        登 录
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
import { getCurrentInstance, reactive, ref, unref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { setLocal } from "@/utils/store";
export default {
    setup(props) {
        const { ctx } = getCurrentInstance();
        const router = useRouter();
        const login = ({userName,password}) => {
            ctx.$http
                .get(`/app/auth?userName=${userName}&password=${password}`)
                .then((res) => {
                    console.log(res)
                    if(res.data.rtState){
                         setLocal("userData", res.data.rtData);
                        router.push("/readmap");
                    }
                });
        };
        const bg = {
            bg: require('@/assets/images/bg.jpg'),
            logo:require("@/assets/logo.png")
        }
        const form = reactive({
            layout:"horizontal",
            userName:"16899999999",
            password:"123456"
        })

        const handleFinish = (values)=>{
            const {userName,password} = form;
            login({userName,password})
        }
        return {
            bg,
            form,
            layout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            },
            handleFinish
        };
    }
};
</script>

<style lang="less" scoped>
    .login{
        width: 100%;
        height: 100%;
        .login_form{
            width:500px;
            height: 400px;
            background: padding-box #fff;
            border: 8px solid rgba(255,255,255,.5);
            border-radius: 4px;
            img{
                width: 48px;
                height: 48px;
            }
        }
    }
</style>
