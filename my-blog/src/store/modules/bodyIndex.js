import { defineStore } from "pinia";
import { getSentences } from "../../api/bodyIndex.js";

const bodyIndexStore = defineStore("bodeIndex", {
  state: () => ({
    sentences: [
      {
        // 中英文名言名句
        en:'Sharp tools make good work.',
        ch:'工欲善其事，必先利其器。',
        sentence_id:'0'
      }
    ],
  }),
  getters: {
    
  },
  actions: {
    // 获取所有句子
    async getAllSentences() {
      const res = await getSentences();
      this.sentences = res.data;
    },
  },
});

export { bodyIndexStore };
