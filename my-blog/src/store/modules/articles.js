import { defineStore } from "pinia";
import { getPoetry } from "../../api/articles";

const articlesStore = defineStore("articles", {
  state: () => ({
    poetry: [
        {
            title:'', // 标题
            author:'', // 作者
            dynasty:'', // 朝代
            content:'', // 内容
            id:'' // 诗文id
        }
    ],
  }),
  getters: {
    
  },
  actions: {
    // 从后端获取诗文信息
    async getPoetry() {
      const res = await getPoetry();
      this.poetry = res.data;
      console.log(this.poetry);
      this.poetry.forEach((item) => {
        item.content = item.content.split("\r\n");
      });
    }
  },
});

export { articlesStore };
