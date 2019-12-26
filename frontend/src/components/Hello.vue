<template>
  <div class="hello">
    <h1>{{ msg.split('').reverse().join('') }}</h1>
    <h1>{{ reversedMessage }}</h1>
    <h1>{{ reversedMessage2() }}</h1>
    <ol>
      <li v-for="(value, key, index) in data.object" :key="object">
        {{ index }}, {{ key }}: {{ value }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！',
      data: {
        object: {
          name: '菜鸟教程',
          url: 'http://www.runoob.com',
          slogan: '学的不仅是技术，更是梦想！'
        }
      }
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessage2: function () {
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>
