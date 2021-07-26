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
                    <a-button> <router-link to="/signin">登录</router-link></a-button>

                    <a-button><router-link to="/signup">快速注册</router-link></a-button>
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
            <a-row :gutter="16">
              <a-col :span="5">
                <div class="content-left">
                  <a-card>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </a-card>

                    <a-card>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </a-card>

                   <a-card class="footer">
                        <div class="title">Copyright © 2021 <a href="#" target="_blank"> 如芥</a></div>
                  </a-card>
                 
                </div>
              </a-col>
              <a-col :span="13">
              <div class="content-center">
                  <a-card>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <br>
                    <br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                  </a-card>
                </div>
              </a-col>
              <a-col :span="6">
                 <div class="content-right">
                  <a-card>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </a-card>
                </div>
              </a-col>
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
</style>