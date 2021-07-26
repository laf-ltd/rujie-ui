<template>
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
          <div class="title">
            Copyright © 2021 <a href="#" target="_blank"> 如芥</a>
          </div>
        </a-card>
      </div>
    </a-col>
    <a-col :span="13">
      <div class="content-center">
        <a-card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <br />
          <br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
</template>

<script>
export default {};
</script>

<style lang="less">
.content {
  margin-bottom: 20px;
  &-left {
    .ant-card-bordered {
      border-radius: 8px;
    }

    > div {
      margin-bottom: 15px;
    }

    .footer {
      text-align: center;
      .title {
        color: #b2b2b2;
        padding-top: 5px;
        text-shadow: 0 1px 1px #fff;
        a {
          color: #b2b2b2;
        }
      }
      img {
        height: 35px;
      }
    }
  }

  &-center {
    .ant-card-bordered {
      border-radius: 8px;
    }
  }

  &-right {
    .ant-card-bordered {
      border-radius: 8px;
    }
  }
}
</style>