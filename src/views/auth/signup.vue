<template>
  <div class="rj-auth">
    <div class="box">
      <a-row :gutter="16">
        <a-col :span="10">
          <div class="box-left">
            <h1>用户注册</h1>
            <br />
            <a-divider>使用邮箱注册</a-divider>

            <br />
            <br />

            <a-form layout="vertical">
              <a-form-item>
                <a-input placeholder="电子邮件" size="large" />
              </a-form-item>
              <a-form-item>
                <a-input placeholder="密码" size="large" />
              </a-form-item>
              <a-form-item>
                <a-input placeholder="确认密码" size="large" />
              </a-form-item>
              <a-form-item class="sigup-btn">
                <a-button type="primary" block size="large">注册</a-button>
              </a-form-item>
            </a-form>

            <p class="box-left-text">
              已拥有账户？前往
              <a><router-link to="/signin">登录</router-link></a>
            </p>
          </div>
        </a-col>
        <a-col :span="14">
          <div class="box-right sigup-bg"></div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import url("./index.less");
</style>