<template>
  <div class="rj-auth">
    <div class="box">
      <a-row :gutter="16">
        <a-col :span="10">
          <div class="box-left">
            <h1>用户登录</h1>
            <br />
            <a-divider>使用账号登录</a-divider>
            <br />
            <br />
            <a-form
              ref="formRef"
              :model="formLogin"
              :rules="rules"
              layout="vertical"
            >
              <a-form-item name="username">
                <a-input
                  v-model:value="formLogin.username"
                  placeholder="电子邮件"
                  size="large"
                />
              </a-form-item>
              <a-form-item name="password">
                <a-input
                  v-model:value="formLogin.password"
                  placeholder="密码"
                  size="large"
                />
              </a-form-item>
              <a-form-item class="sigin-btn">
                <a-button @click="onSubmit" type="primary" block size="large"
                  >登录</a-button
                >
              </a-form-item>
            </a-form>

            <p class="box-left-text">
              尚未拥有账户？ <a><router-link to="/signup">注册</router-link></a>
            </p>
          </div>
        </a-col>
        <a-col :span="14">
          <div class="box-right sigin-bg"></div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from "vue";
import { useUserStore } from "@/store/modules/user";

export default defineComponent({
  setup() {
    const formRef = ref();
    
    const formLogin = reactive({
      username: undefined,
      password: undefined,
    });

    const rules = {
      username: {
        required: true,
        message: "请输入用户名",
      },
      password: {
        required: true,
        message: "请输入用户密码",
      },
    };

    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          const userStore = useUserStore();
          const userinfo = userStore.loginAction({});
  
        })
        .catch((error: any) => {
          console.log("error", error);
        });
    };

    return {
      formRef,
      formLogin,
      rules,
      onSubmit,
    };
  },
});
</script>

<style lang="less">
@import url("./index.less");
</style>