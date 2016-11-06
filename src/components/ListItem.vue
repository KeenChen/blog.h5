<template lang='pug'>
    section(class='list-item')
        //- header: 作者&Blog 信息区。作者头像，作者名字，发布日期，分类，tags
        div(class='item-header')
            span(class='avatar')
                img(v-if='item.author.avatar' v-bind:src='item.author.avatar')
                i(v-if='!item.author.avatar' class='fa fa-user-o')
            span(class='name')= '{{item.author.name}}'
            span(class='update-at')= '{{item.updateAt}}'
            div(class='item-tags')
                span(class='item-tag' v-for='tag in item.tags')= '{{tag}}'
            span(class='header-more')
                i(class='fa fa-ellipsis-v')

        //- content: blog 内容概览。图片，文字概览
        div(class='item-content') 
            img(class='item-content-cover' v-bind:src='item.cover[0]')
            section(class='item-content-overview')
                h4= '{{item.title}}'
                p= '{{item.content}}'
                span= '...'
        
        //- footer: 互动功能区。点赞，收藏，转发
        div(class='item-footer')
            span(class='like')
                i(class='fa fa-thumbs-o-up')
            span(class='bookmark')
                i(:class="[item.isBookmarked? 'fa fa-bookmark': 'fa fa-bookmark-o']")
            i(class='more fa fa-angle-down')
</template>

<script>
'use strict';

/**
 * data model 
 * item: 
 * {
 *  title: string,
 *  content: string
 *  tags: string array,
 *  author: author object,
 *  like: number. number of how many people like this post,
 *  updateAt: date,
 *  cover: array. array of image urls,
 *  isLike: bool,
 *  isBookmarked: bool
 * }
 * 
 * author: 
 * {
 *  name: string,
 *  avatar: url,
 *  tech: array. ['android', 'linux'], etc
 * }
 * 
 * 
 * 
 * 
 * 
 **/
 
const ListItem = {
    props: ['item'],
    data() {
        return {
        }
    },
    methods: {

    },

    components: {
        
    }
};

export default ListItem;

</script>

<style lang='sass'>
    .list-item {
        padding: .5em;
        box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.14);
        margin-bottom: 2em;

        .item-header {
            position: relative;

            .avatar {
                width: 48px;
                height: 48px;
                border-radius: 100px;
                position: relative;
                display: inline-flex;
                align-items: center;

                i {
                    margin: 0 auto;
                }
            }

           .name {
               position: absolute;
           }

           .upate-at {
                position: absolute;
                top: 1.5em;
                left: 50px;
           }

           .item-tags {
               span {

               }
           }

           .header-more {
                position: absolute;
                right: 0;
                top: 0;
                padding: 1em;
           }
        }

        .item-content {
            position: relative;

            .item-content-cover {
                width: 100%;
            }

            .item-content-overview {
                h4 {

                }

                p {

                }

                span {

                }
            }
        }

        .item-footer {
            position: relative;

            .like {

            }

            .bookmark {
                position: absolute;
                left: 0;
                margin-left: 2em;
            }

            .more {
                position: absolute;
                right: 0;
            }
        }
    }
</style>