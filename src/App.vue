<template>
  <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>
</template>

<script lang="ts">
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
    }
  },
  computed:{
    locale() {
       const { title } = this.$route.meta
       title && (setDocumentTitle(`${title} - ${domTitle}`))
       return zhCN
    }
  }
});
</script>
