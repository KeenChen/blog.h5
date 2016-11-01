<template>
    <h1>hello {{ title }}</h1>
</template>

<script>
    module.exports = {
        data() {
            return {
                title: 'xechoz'
            };
        }
    };
</script>


<style>
    h1 {
        font-size: 4em;
        text-align: center;
    }
</style>