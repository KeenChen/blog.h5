<template lang='pug'>
    section(class='tool')
        ul
            li(class='tool-edit' @click.stop='onEdit')='Edit'
                i(class='fa fa-code fa-fw fa-pull-left')
            li(class='tool-review' @click.stop='onReview')='Preview'
                i(class='fa fa-file-text-o fa-fw fa-pull-left')
            li(class='tool-summit' @click.stop='onPubish')='Publish'
                i(class='fa fa-send-o fa-fw fa-pull-left')
            li(class='tool-tag')
                i(class='fa fa-tags')='Tags'
                div
                    span(v-for='tag in tags' class='tag-item chip')='{{tag}}'
                        i(class='fa fa-minus-circle' @click.stop='onRemoveTag(tag)')
                   
                    span(class='tag-add')
                        input(@keyup.stop.enter='onNewTag' v-model.trim='newTag' placeholder='new tag')
                
</template>

<script>
'use strict';

const EVENTS = {
    REVIEW: 'review',
    PUBLISH: 'publish',
    EDIT: 'edit',
    UPDATE_TAGS: 'updateTags'
};

export default {
    props: {
        tags: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
        }
    },

    created() {
        console.log(`created ${JSON.stringify(this.tags)}`);
        this.tagSet = new Set(this.tags);

        this.onTagModified();
    },

    methods: {
        onReview() {
            this.$emit(EVENTS.REVIEW, {
                tags: Array.from(this.tagSet)
            });
        },

        onPubish() {
            this.$emit(EVENTS.PUBLISH, {
                tags: Array.from(this.tagSet)
            });
        },

        onEdit() {
            this.$emit(EVENTS.EDIT);
        },

        onNewTag() {
            console.log('new tag: ' + this.newTag);

            if (this.newTag && this.newTag.length > 0) {
                this.tagSet.add(this.newTag);
                this.onTagModified();
            }

            this.newTag = '';
        },

        onRemoveTag(tag) {
            console.log(`remove tag: ${tag}`);

            this.tagSet.delete(tag);
            this.onTagModified();
        },

        onTagModified() {
            this.tags.length = 0;
            this.tagSet.forEach((value) => {
                this.tags.push(value);
            });

            this.$emit(EVENTS.UPDATE_TAGS, Array.from(this.tagSet));
        }
    },

    components: {

    }
};

</script>

<style lang='sass'>
@import '../../statics/assets/scss/base';

$tool-background-color: #fafafa;

.tool {
    position: relative;
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

        .tool-tag {
            position: absolute;
            top: 0;
            right: 0;
            display: inline;
            cursor: default;
            text-align: left;

            .tag-item {
                display: inline;
                padding: .5em;
                i {
                    cursor: pointer;
                    padding: .25em 0 .25em .25em;
                }
            }

            .tag-add {
                cursor: pointer;
                padding: .25em 1em;

                input {
                    max-width: 8em;
                    width: 6em;
                }
            }
        }
    }
}
</style>