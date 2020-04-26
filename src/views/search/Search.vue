<!--搜索组件-->
<template>
  <div>
    <div class="container">
      <i-input v-model="key" size="large" class="search" placeholder="输入你想查找的商品">
        <Button slot="append" icon="ios-search" @click="search"></Button>
      </i-input>
      <Tag v-for="(item, index) in promotionTags" :key="index" closable @on-close="closeTags(index)">
        <span @click="selectTags(index)">{{item}}</span>
      </Tag>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data() {
      return {
          key: '',
        promotionTags: ['买2免1', '领200神券', '199减100', '母婴5折抢', '充100送20']
      };
    },
    methods: {
      closeTags(index) {
        this.promotionTags.splice(index, 1)
      },
      selectTags(index) {
        this.key = this.promotionTags[index]
      },
      search() {
        console.log("这里是搜索函数，俺准备进行搜索了！")
        console.log(this.key)
        this.$router.push({path: '/goodsList', query: {key: this.key}})
      }
    }
  };
</script>

<style scoped>
  .container {
    padding-top: 15px;
    margin: 0px auto 15px;
    width: 460px;
  }

  .search {
    margin: 5px 0px;
  }
</style>
