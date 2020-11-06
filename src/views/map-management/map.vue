<template>
<div>
    map
</div>
</template>

<script>
import {
    useRoute
} from "vue-router"
export default {
    setup(props) {
        const {
            path
        } = useRoute();
        console.log(path)
    }
}
</script>

<style>

</style>
