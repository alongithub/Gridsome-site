<template>
    <Layout>
        <div class='post'>
            <h1>{{ $page.post.title }}</h1>
            <div>
                {{ $page.post.content }}
            </div>
            
        </div>
    </Layout>
    
</template>

<page-query>
query ($id: ID!){
  post (id: $id) {
    id
    title
    content
  }
}
</page-query>

<script>
export default {
    name: 'PostPage',
    // 这种写法无法访问 $page中的数据
    // metaInfo: {
    //     title: $page.post.title
    // }
    metaInfo() {
        return {
            title: this.$page.post.title 
        }
    }
}
</script>