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
        </div>
    </Layout>
</template>


<page-query>
query {
  posts: allPost {
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
export default {
    name: 'posts',
    components: {},
    data() {
        return {
            
        };
    },
}
</script>