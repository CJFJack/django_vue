<template>
  <div id="subjects">
    <h2>
      数学：{{math}}
    </h2>
    <h2>
      英语：{{english}}
    </h2>
    <h2>
      语文：{{chinese}}
    </h2>
    <h2>
      总分：{{sum}}
    </h2>
    <h2>
      平均分：{{average}}
    </h2>
  </div>
</template>

<script>
  export default {
    name: "subjects",
    data() {
      return {
        math: 100,
        english: 99,
        chinese: 95
      }
    },
    computed: {
      sum: function () {
        return this.math + this.english + this.chinese
      },
      average: function () {
        return (this.math + this.english + this.chinese) / 3
      }
    }
  }
</script>

<style scoped>

</style>
