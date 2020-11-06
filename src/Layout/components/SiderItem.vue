<template>
<template v-if="!item.isHidden">
    <a-sub-menu v-if="item.children && item.children.length" :key="key">
        <template v-slot:title>
            <i :class="['icon','iconfont',`icon-${item.icon}`]"></i><span>{{item.title}}</span>
        </template>
        <a-menu-item v-for="(child,index) in item.children" :key="child.route">
            <router-link :to="child.route"><i :class="['icon','iconfont',`icon-${child.icon}`]"></i>{{child.title}}</router-link>
        </a-menu-item>
    </a-sub-menu>
    <a-menu-item v-else :key="key">
        <router-link slot="title" :to="item.route"><i :class="['icon','iconfont',`icon-${item.icon}`]"></i>{{ item.title}}</router-link>
    </a-menu-item>
</template>
</template>

<script>
export default {
    name: 'SidebarItem',
    props: ['item', "key"],
    setup(props, ctx) {
        return {
            props
        }
    }
}
</script>
