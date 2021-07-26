<template>
  <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>
</template>

<script lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
       locale: zhCN
    }
  },
  name: "App",
  components: {},
});
</script>
