<template>
  <div style="position: sticky; left: 0; top: 0; z-index: 10;">
    <div class="top-bar">
      <div class="container">
        <div class="logo">
          <img :src="'./img/logo-mini.png'" class="logo-img" alt="面霸宝典-logo">
          <strong>面霸宝典</strong>
        </div>

        <div class="auto-flex flex-h" style="overflow: auto;">
          <div class="auto-flex">
            <div class="list-nav">
              <section
                v-for="(v, idx) in [
                  { name: '首页' },
                  { name: '后端' },
                  { name: '前端' },
                  { name: '运维题库' },
                ]"
                :key="idx"
                :class="{ on: idx === 0 }"
              >{{ v.name }}</section>
            </div>
          </div>
          <div class="flex-h">
            <div>
              <button class="btn btn-info">发动态</button>
            </div>
            <div>登录 / 注册</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-category shadow">
      <div class="container">
        <div class="list-main-category auto-flex">
          <section
            v-for="(v, idx) in [
              { name: '全部' },
              { name: '看面经' },
              { name: '内推' },
              { name: '职业发展' },
            ]"
            :key="idx"
            :class="{ on: idx === 0 }"
          >{{ v.name }}</section>
        </div>
        <form class="flex-h" @submit.prevent>
          <div>
            <input type="text" class="form-control" placeholder="请输入关键词...">
          </div>
          <div>
            <button class="btn btn-primary">
              <i class="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="app-main container ">
    <div class="row">
      <div class="col-md-8">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">帖子列表</h3>
          </div>
          <div class="panel-body">
            <div class="main-article">
              <div class="space c" v-if="!data.list.length && data.isLoading">
                <img v-if="data.isLoading" :src="'img/loading.gif'" alt="">
                <strong v-else>暂无数据</strong>
              </div>
              <div class="list-article">
                <section
                  v-for="(row, idx) in data.list"
                  :key="idx"
                >
                  <div class="row-type">
                    <span class="circle-row-type">
                      <span>{{ row.rowType === '官方' ? '官方' : '面霸' }}</span>
                    </span>
                    <span class="row-type-text">{{ row.rowType }}</span>
                    <span class="black-dot"></span>
                    <span class="row-type-text">{{ row.date }}</span>
                  </div>
                  <div class="article-title">
                    <span class="label label-danger" v-if="idx < 3">推荐</span>
                    <span class="f16">{{ row.title }}</span>
                  </div>
                  <div class="article-body">{{ row.content }}</div>
                  <div class="article-rich flex-h">
                    <div class="article-rich-ctrl auto-flex">
                      <section>
                        <i class="glyphicon glyphicon-eye-open"></i>
                        <span class="num">{{ row.cnt.visit }}</span>
                      </section>
                      <section>
                        <i class="glyphicon glyphicon-comment"></i>
                        <span class="num">{{ row.cnt.comment }}</span>
                      </section>
                      <section>
                        <i class="glyphicon glyphicon-thumbs-up"></i>
                        <span class="num">{{ row.cnt.greet }}</span>
                      </section>
                    </div>

                    <div class="list-tags flex-h">
                      <section
                        v-for="(v, idx) in row.tags"
                        :key="idx"
                      >
                        <i class="glyphicon glyphicon-tag"></i>
                        <span>{{ v }}</span>
                      </section>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">官方面试指导</h3>
          </div>
          <div class="panel-body">
            <div class="list-items">
              <section>
                <div>
                  <div class="label label-danger">官</div>
                  <span>优化简历</span>
                </div>
                <div>模拟面试：10多年大厂架构师及面试官1对1</div>
                <div class="text-right">
                  <button class="btn btn-success btn-sm">立即查看</button>
                </div>
              </section>
              <section>
                <div>
                  <div class="label label-danger">官</div>
                  <span>模拟面试</span>
                </div>
                <div>模拟面试：10多年大厂架构师及面试官1对1</div>
                <div class="text-right">
                  <button class="btn btn-success btn-sm">立即查看</button>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">热门文章</h3>
          </div>
          <div class="panel-body">
            <div class="list-items">
              <section
                v-for="(v, idx) in [
                  { title: '优化简历：10多年大厂架构师及面试官一对一优化' },
                  { title: '添加简历项目经验-企业实战项目-10多年大厂架构师及面试官一对一辅导' },
                  { title: '模拟面试：10多年大厂架构师及面试官一对一辅导' },
                  { title: '人际交往类：如何确保团队决策过程的公平性和有效性？' },
                  { title: 'Docker基础：如何将Docker容器加入到Swarm集群？' },
                  { title: 'Java基础：请解释Java中的四种访问修饰符及其作用范围。' },
                  { title: 'Kafka项目场景：讨论Kafka Connect的作用和用途' },
                  { title: '监控与告警基础：解释使用开源工具构建监控系统的优势和劣势。' },
                ]"
                :key="idx"
                class="flex-h"
              >
                <div>
                  <span :class="['label label-' + (['danger', 'warning', 'success'][idx] || 'default')]">{{ idx + 1 }}</span>
                </div>
                <div class="auto-flex" style="margin: 0 0 0 .5em">
                  <a href="javascript:">{{ v.title }}</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global sleep */

export default {
  data() {
    return {
      page: {
        cur: 1,
        size: 20,
        total: 0
      },
      data: {
        isLoading: true,
        list: []
      }
    }
  },
  computed: {
    r() {
      return this.$root.router
    }
  },
  watch: {},
  methods: {
    async lsData() {
      const page = this.page

      await sleep(500)

      this.data.isLoading = true
      this.data.list = []

      // await fetch(`article/api/list/category/0?category=全部&triggerThreshold=${page.size}&page=` + page.cur, {
      await fetch('data-static/data.json', {
        category: '全部',
        triggerThreshold: page.size,
        page: page.cur,
      }).then(async (res) => {
        const data = await res.json()
        const doc = (new DOMParser()).parseFromString(data.result.html, 'text/html')
        this.data.list = doc.body.children.map((el) => {
          const elCnt = el.getElementsByClassName('cdc-article-panel__operate')[1]

          return {
            rowType: el.getElementsByClassName('cdc-article-panel__user-name')[0].innerText,
            date: el.getElementsByClassName('cdc-article-panel__date')[0].innerText,
            title: el.getElementsByClassName('user-article-item-title')[0].innerText,
            content: el.getElementsByClassName('cdc-article-panel__desc')[0].innerText,
            tags: el.getElementsByClassName('cdc-tag-links__items')[0].children.map(v => v.innerText),
            cnt: {
              visit: elCnt.children[0]?.innerText.trim(),
              comment: elCnt.children[1]?.innerText.trim(),
              greet: elCnt.children[2]?.innerText.trim(),
            }
          }
        })
      })
    },
  },
  async mounted() {
    await this.lsData()
  }
}
</script>

<style lang="less" scoped>
.app-main {}

.top-bar {
  user-select: none;
  position: relative; z-index: 10;
  white-space: nowrap;
  font-size: 16px;
  line-height: 3.2em;
  background: #36393f;
  color: rgba(255, 255, 255, .75);
  .btn {top: -1px;}
  & > .container {
    display: flex;
    .logo {
      padding-left: 46px;
      position: relative;
      color: #fff;
      .logo-img {
        width: 34px; position: absolute; left: 0; top: 13px;
      }
      strong {font-size: 18px;}
    }
    & > * + * {margin-left: 1.25em;}
    .list-nav {
      display: flex;
      & > section {
        cursor: pointer;
        padding: 0 1em;
        &.on {color: #fff;}
      }
    }
    .flex-h {
      & > * + * {margin-left: 1.5em;}
    }
  }
}

.main-category {
  user-select: none;
  white-space: nowrap;
  background: #fff;
  margin-bottom: 1.5em;
  padding: .75em 0;
  .list-main-category {
    overflow: auto;
    margin-bottom: 1em;
    background: #fff;
    line-height: 34px;
    font-size: 16px;
    display: flex;
    & > section {
      position: relative;
      &.on {
        color: #09f;
        &:after {
          content: "";
          width: 100%; height: 2px;
          background: #09f;
          position: absolute; left: 0; bottom: 0;
        }
      }
      & + section {
        margin-left: 2em;
      }
    }
  }
}

@media (min-width: 620px) {
  .main-category > .container {
    display: flex;
    .list-main-category {
      margin: 0;
    }
  }
}

.main-article {
  // padding: var(--space-size);
  background: #fff;
  .list-article {
    & > section {
      &:first-child {padding-top: 0;}
      &:last-child {padding-bottom: 0;}
      padding: 1.2em 0;
      border-bottom: 1px solid #ddd;
      .row-type {
        padding-left: 42px;
        position: relative;
        .circle-row-type {
          font-size: 12px;
          white-space: nowrap;
          width: 30px; height: 30px;
          position: absolute; left: 0; top: 50%;
          transform: translateY(-50%);
          background: #d9edf7;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, .1);
          font-weight: bold;
          color: #069;
          display: flex; align-items: center; justify-content: center;
        }
        .black-dot {
          display: inline-block; width: 4px; height: 4px; background: #333; border-radius: 50%; margin: 0 .5em;
          position: relative; top: -2px;
        }
        .row-type-text {}
      }
      .label {margin-right: .75em;}
      .article-rich-ctrl {
        display: flex;
        // .glyphicon {margin-right: .5em;}
        & > section + section {
          margin-left: 2em;
        }
      }
      & > * + * {margin-top: .75em;}
    }
  }
}

</style>