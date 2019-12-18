<template>
  <div class="hello">
    <h1>IDOLM@STER CHARACTER PROFILE</h1>
    <el-input
      class="el-input"
      placeholder="Type something"
      prefix-icon="el-icon-search"
      v-model="searchIdol">
    </el-input>
    <el-button type="primary" @click="doUpdate(searchIdol)">getData</el-button>
    <el-card class="box-card">
      <div class="key">
        <p>name</p>
        <p>name_ruby</p>
        <p>birthday</p>
        <p>CV</p>
        <p>arrival</p>
      </div>
      <div class="colon">
        <p v-for="o in 5" :key="o">:</p>
      </div>
      <div class="detail">
        <p>{{ response.family_name }}{{ response.first_name }}</p>
        <p>{{ response.family_name_ruby }}{{ response.first_name_ruby }}</p>
        <p>{{ response.birth_month }} / {{ response.birth_day }}</p>
        <p>{{ response.cv }}</p>
        <p>{{ response.origin_media }}</p>
      </div>
    </el-card>
    <div class="array">
      <ul>
        <li v-for="idolList in idolList" :key="idolList.id">
          id: {{ idolList.id }} name: {{ idolList.name }} type: {{ idolList.type }}
        </li>
      </ul>
    </div>

    <div>
      <p>{{ scrollY }} {{ timer }}</p>
    </div>

    <div class="form">
      <h2>List Set</h2>
      <p>{{ idolId }} / {{ idolName }} / {{ idolType }}</p>
      <input type="text" placeholder="ID" @change="doChange"/><br>
      <input type="text" placeholder="NAME" @change="doChange"/><br>
      <input type="text" placeholder="TYPE" @change="doChange"/><br>
      <el-button type="primary" @click="doPush">PUSH</el-button>
      <el-button type="primary" @click="doSet">ChangeList</el-button>
    </div>
    <div>
      <textarea v-model.lazy="textArea"></textarea>
      <p>{{ textArea }} / {{ voice }}</p>
      <p>{{ textArea2 }}</p>
      <input type="checkbox" v-model="checkbox1" true-value="yes" false-value="no">{{ checkbox1 }}
    </div>
    <div>
      <label><input type="checkbox" v-model="checkbox2" value="我那覇響">A</label>
      <label><input type="checkbox" v-model="checkbox2" value="B">B</label>
      <label><input type="checkbox" v-model="checkbox2" value="C">C</label>
      <p>{{ checkbox2 }}</p>
    </div>
    <div>
      <label><input type="radio" v-model="onStage" value="我那覇響">我那覇響</label>
      <label><input type="radio" v-model="onStage" value="高槻やよい">高槻やよい</label>
      <label><input type="radio" v-model="onStage">三浦あずさ</label>
      <p>{{ onStage }}</p>
    </div>
    <div>
      <select v-model="selectIdol">
        <option disabled="disabled">アイドルを選択してください</option>
        <option value="我那覇響">我那覇響</option>
        <option value="秋月律子">秋月律子</option>
        <option value="四条貴音">四条貴音</option>
      </select>
      <p>選択しているアイドル : {{ selectIdol }}</p>
    </div>
    <div>
      <select v-model="selectIdol2" multiple>
        <option value="我那覇響">我那覇響</option>
        <option value="秋月律子">秋月律子</option>
        <option value="四条貴音">四条貴音</option>
      </select>
      <p>選択しているアイドル : {{ selectIdol2 }}</p>
    </div>
    <div>
      <input type="file" @change="imageChange">
      <div v-if="preview"><img v-bind:src="preview"></div>
      <p>{{ preview }}</p>
    </div>
    <div>
      <input type="range" v-model="val"><br>{{ val }}
    </div>
    <div>
      <input v-model.lazy="msg"> {{ msg }}
    </div>
    <div>
      <input v-model.number="stageWidth">
      <p>width: {{stageWidth / 2 }} = halfStageWidth: {{ halfStageWidth }}</p>
      <p>halfPoint: { x: {{ halfPoint.x }}, y: {{ halfPoint.y }} }</p>
    </div>
    <div>
      <input v-model.number="width"> {{ width }}
      <input v-model.number="halfGetSetWidth"> {{ halfGetSetWidth }}
    </div>
    <div>
      <p>算出プロパティ</p>
      <ol>
        <li>{{ computedData }}</li>
        <li>{{ computedData }}</li>
      </ol>
      <p>メソッド</p>
      <ol>
        <li>{{ methodsData() }}</li>
        <li>{{ methodsData() }}</li>
      </ol>
    </div>
    <!-- <div>
      <el-button type="primary" @click="cancelWatch">ウォッチャ解除</el-button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchIdol: '',
      idolList: [
        {id: 1, name: '天海春香', type: 'Princess'},
        {id: 2, name: '如月千早', type: 'Fairy'},
      ],
      idolId: '',
      idolName: '',
      idolType: '',
      textArea: 'ここに名前が入るぞ',
      textArea2: 'aaaaaaaa',
      checkbox1: false,
      checkbox2: [],
      onStage: '',
      selectIdol: '',
      selectIdol2: [],
      preview: '',
      val: '',
      msg: '',
      scrollY: 0,
      timer: null,
      stageWidth: 800,
      stageHeight: 350,
      width: 800,
      voice: 'ここに名前セリフが入るぞ',
    }
  },
  // 初期状態取得
  created() {
    this.$store.dispatch('doUpdate', "我那覇響");
    // ハンドラを登録
    window.addEventListener('scroll', this.handleScroll)
    // インスタンスメソッドでウォッチャ設定
    const unwatch = this.$watch('textArea', function(newVal, oldVal) {
      if (this.textArea == '我那覇響') {
        this.voice = 'なんくるないさー！'
      }
      else if (this.textArea == '天海春香') {
        this.voice = 'ゔぁい！'
      }
      else {
        this.voice = '我那覇響か天海春香と入力してみよう'
      }
      unwatch()
    })
  },
  beforeDestroy: function () {
    // ハンドラを解除（コンポーネントやSPAの場合忘れずに！）
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    response() {
      return this.$store.getters.resultResponse
    },
    halfStageWidth() {
      return this.stageWidth / 2
    },
    halfStageHeight() {
      return this.stageHeight / 2
    },
    halfPoint() {
      return {
        x: this.halfStageWidth,
        y: this.halfStageHeight
      }
    },
    testKuroi() {
      return this.width + 196
    },
    halfGetSetWidth: {
      get() {
        return this.width / 2
      },
      set(val) {
        this.width = val * 2
      }
    },
    computedData() {
      return Math.random()
    },
  },
  // watch: {
  //   textArea: {
  //     handler(newVal, oldVal) {
  //       console.log('newVal' + newVal);
  //       console.log('oldVal' + oldVal);
  //       if (this.textArea == '我那覇響') {
  //         this.voice = 'なんくるないさー！'
  //       }
  //       else if (this.textArea == '天海春香') {
  //         this.voice = 'ゔぁい！'
  //       }
  //       else {
  //         this.voice = '我那覇響か天海春香と入力してみよう'
  //       }
  //     },
  //     immediate: true
  //   }
  // },
  methods: {
    methodsData() {
      return Math.random()
    },
    doUpdate(word) {
      this.$store.dispatch('doUpdate', word)
    },
    doSet(event) {
      this.$set(this.idolList, 0, {id: 99, name: '音無小鳥', type: '事務員'});
    },
    doChange(event) {
      if (event.target.placeholder === 'ID') {
        this.idolId = event.target.value;
      }
      else if (event.target.placeholder === 'NAME') {
        this.idolName = event.target.value;
      }
      else if (event.target.placeholder === 'TYPE') {
        this.idolType = event.target.value;
      }
    },
    doPush() {
      this.idolList.push({ id: this.idolId, name: this.idolName, type: this.idolType });
    },
    imageChange(event) {
      var file = event.target.files[0]
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file);
      } 
      else {
        this.preview = '';
      }
    },
    // 違和感のない程度に200ms間隔でscrollデータを更新する例
    handleScroll() {
      if (this.timer === null) {
        this.timer = setTimeout(function () {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this), 200)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: aqua;
  padding: 30px 0;
}
.el-input {
  display: inline-block;
  width: 200px;
}
.box-card {
  margin: 20px auto 0;
  width: 500px;
  text-align: left
}
.box-card .key {
  display: inline-block;
}
.box-card .colon {
  display: inline-block;
  margin-left: 10px;
}
.box-card .detail {
  display: inline-block;
  margin-left: 10px;
}
.detail p {
  height: 22px;
}
.form {
  margin: 50px 0;
}
.array li {
  display: list-item;
  align-items: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
