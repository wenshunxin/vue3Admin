<template>
<a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider style="background: #fff; ">
        <Sider />
    </a-layout-sider>
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <Header />
        </a-layout-header>
        <a-layout-content>
            <Content />
        </a-layout-content>
    </a-layout>
</a-layout>
</template>

<script>
import Header from "./Header"
import Sider from "./Sider"
import Content from "./Content"
export default {
    components: {
        Header,
        Sider,
        Content
    }
}
</script>

<style scoped>
.ant-layout {
    width: 100%;
    height: 100%;
}
</style>
