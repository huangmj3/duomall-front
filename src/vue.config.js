module.exports = {
  configureWebpack: {
    resolve:{
      //DOM别名前需要加'～'
      alias:{
        '@': 'src',
        'assets': '@/assets',
      }
    }
  }
}

//this.$router
//this.$store
