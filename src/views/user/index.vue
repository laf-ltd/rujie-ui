<template>
  <div class="main">
    <a-layout>
      <div class="header">
        <a-row type="flex" justify="center">
          <a-col :span="18">
            <div class="banner">
              <div class="banner-left">
                <div class="logo">
                  <a href="#" target="_blank"> <img src="/logo.svg" /> 如芥 </a>
                </div>

                <div class="menu">
                  <ul class="menu-nav">
                    <li class="menu-item"><a>首页</a></li>
                    <li class="menu-item"><a>文章</a></li>
                    <li class="menu-item"><a>分类</a></li>
                    <li class="menu-item"><a>关于</a></li>
                  </ul>
                </div>
              </div>

              <div class="banner-right">
                <div class="search">
                  <a-input-search placeholder="搜索" style="width: 180px" />
                </div>

                <div class="auth">
                  <a-space>
                    <a-button>
                      <router-link to="/signin">登录</router-link></a-button
                    >

                    <a-button
                      ><router-link to="/signup"
                        >快速注册</router-link
                      ></a-button
                    >
                  </a-space>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="content">
        <a-row type="flex" justify="center">
          <a-col :span="18">
            <div class="user">
              <a-card>
                <template #cover>
                  <img
                    alt="example"
                    src="https://7b2.com/wp-content/themes/b2/Assets/fontend/images/task_bg.jpg"
                  />
                </template>
                <div class="user-panel">
                  <div class="avatar">
                    <a-avatar shape="square" :size="150" src="/png/avatar.png">
                    </a-avatar>
                  </div>

                  <div class="user-panel-info">
                    <div>
                      <h1>低空飞行</h1>
                      <p>这个人很懒，什么都没有留下！</p>
                    </div>
                  </div>
                </div>
                <!-- <a-card-meta title="Europe Street beat">
                <template #description>www.instagram.com</template>
              </a-card-meta> -->
              </a-card>
            </div>

            <br />
            <a-row :gutter="16">
              <a-col :span="6"> <a-card>111</a-card></a-col>

              <a-col :span="18"><a-card>222</a-card> </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
      <!-- <a-layout-footer>Footer</a-layout-footer> -->
    </a-layout>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import url("@/assets/less/index.less");

.user {
  .ant-card {
    border-radius: 4px;
    .ant-card-cover{
       img {
         border-top-left-radius: 4px;
          border-top-right-radius: 4px;
       }
    }
    .ant-card-body {
      padding-bottom: 10px;
    }
  }
  &-panel {
    margin-top: -100px;
    display: flex;
    .avatar {
      .ant-avatar {
        border: 4px solid #fff;
        border-radius: 4px;
        box-shadow: 0px 0px 2px rgb(98 124 153 / 10%);
      }
    }

    &-info {
      display: flex;
      margin-top: 80px;

      justify-content: space-between;
      padding: 5px 20px;
    }
  }
}
</style>