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

            <a-form layout="vertical">
              <a-form-item>
                <a-input placeholder="电子邮件" size="large" />
              </a-form-item>
              <a-form-item>
                <a-input placeholder="密码" size="large" />
              </a-form-item>
              <a-form-item class="sigin-btn">
                <a-button type="primary" block size="large" >登录</a-button>
              </a-form-item>
            </a-form>

            <p class="box-left-text">尚未拥有账户？ <a><router-link to="/signup">注册</router-link></a></p>
          </div>
        </a-col>
        <a-col :span="14">
            <div class="box-right sigin-bg">
            </div>
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