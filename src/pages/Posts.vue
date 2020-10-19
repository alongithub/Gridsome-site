<!--
 * @Description: 
 * @Author: sunwenlong
 * @Date: 2020-09-30 11:13:20
 * @LastEditors: sunwenlong
 * @LastEditTime: 2020-10-19 16:56:31
-->
<template>
    <Layout>
        <div class='posts'>
            <h1>Posts</h1>
            <ul>
                <li v-for="edge in $page.posts.edges" :key="edge.node.id">
                    <!-- edge.node.path是自动生成的属性，可以跳转到详情页 -->
                    <g-link :to="edge.node.path">{{edge.node.title}}</g-link>
                </li>
            </ul>
            <pager :info="$page.posts.pageInfo"/>
        </div>
    </Layout>
</template>


<page-query>
query ($page: Int){
  posts: allPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
import {Pager} from 'gridsome';


export default {
    name: 'posts',
    components: {Pager},
    data() {
        return {
            
        };
    },
}
</script>