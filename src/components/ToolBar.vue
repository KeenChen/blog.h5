<template lang='pug'>
    section(class='tool')
        ul
            li(class='tool-edit' @click='onEdit')='Edit'
                i(class='fa fa-code fa-fw fa-pull-left')
            li(class='tool-review' @click='onReview')='Preview'
                i(class='fa fa-file-text-o fa-fw fa-pull-left')
            li(class='tool-summit' @click='onPubish')='Publish'
                i(class='fa fa-send-o fa-fw fa-pull-left')
            
                
</template>

<script>
'use strict';

const EVENTS = {
    REVIEW: 'toolReview',
    PUBLISH: 'toolPublish',
    EDIT: 'toolEdit'
};

export default {
    props: [],
    data() {
        return {

        }
    },
    methods: {
        onReview(event) {
            event.stopPropagation();
            this.$emit(EVENTS.REVIEW);
        },

        onPubish(event) {
            event.stopPropagation();
            this.$emit(EVENTS.PUBLISH)
        },

        onEdit(event) {
            event.stopPropagation();
            this.$emit(EVENTS.EDIT);
        }
    },

    components: {

    }
};

</script>

<style lang='sass'>
@import '../../assets/scss/base';

    .tool {
        display: fixed;
        z-index: $z-index-1;

        ul {
            li {
                display: inline-block;
                text-align: center;
                cursor: pointer;
            }
        }
        .tool-review {

        }

        .tool-summit {

        }
    }
</style>