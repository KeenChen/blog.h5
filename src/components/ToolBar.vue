<template lang='pug'>
    section(class='tool')
        ul
            li(class='tool-edit' @click='onEdit')
                i(class='fa fa-code fa-fw fa-pull-left')=' Edit'
            li(class='tool-review' @click='onReview')
                i(class='fa fa-file-text-o fa-fw fa-pull-left')=' Preview'
            li(class='tool-summit' @click='onPubish')
                i(class='fa fa-send-o fa-fw fa-pull-left')=' Publish'
            
                
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

$tool-background-color: #fafafa;

    .tool {
        display: fixed;
        z-index: $z-index-1;
        background: $tool-background-color;
        height: 4em;

        ul {
            height: 100%;
            padding: 0;
            margin: 0;

            li {
                display: inline-block;
                cursor: pointer;
                height: 100%; 
                background: $tool-background-color; 

                &:hover {
                    background: #f5f5f5;
                }

                i {
                    width: 100%;
                    height: 100%;
                    line-height: 4;
                    padding: 0 1em;
                }
            }
        }

        .tool-review {

        }

        .tool-summit {

        }
    }
</style>