<template>
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
          <a-avatar shape="square" :size="150" src="/images/avatar.png">
          </a-avatar>
        </div>

        <div class="user-panel-info">
          <div>
            <h1>低空飞行</h1>
            <p>这个人很懒，什么都没有留下！</p>
          </div>
        </div>
      </div>
    </a-card>

    <div class="avatar-content">
      <a-row :gutter="16">
        <a-col :span="6">
          <a-card class="avatar-content-left">
            <div class="user-sidebar">
              <div class="user-sidebar-info active">
                <a>概览</a>
                <div>></div>
              </div>
            </div>

            <div class="user-sidebar">
              <div class="user-sidebar-info">
                <a>发布的</a>
                <div>></div>
              </div>
            </div>

            <div class="user-sidebar">
              <div class="user-sidebar-info">
                <a>关注</a>
                <div>></div>
              </div>
            </div>

            <div class="user-sidebar">
              <div class="user-sidebar-info">
                <a>粉丝</a>
                <div>></div>
              </div>
            </div>
          </a-card>
        </a-col>

        <a-col :span="18"><a-card>222</a-card> </a-col>
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