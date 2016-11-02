<template>
    <section>
        <p class='footer'>footer</p>
        <p>{{msg}}</p>
    </section>
</template>

<script>
'use strict';

const Footer = {
    name: 'NavFooter',
    data() {
        return {
            msg: 'i am vue footer'
        }
    }
};

export default Footer;

</script>

<style lang='sass'>

.footer {
    border: 1px solid red;
}
</style>