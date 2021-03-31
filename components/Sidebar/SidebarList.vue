<template>
  <div>
    <div v-for="(data, i) in newdata" :key="i">
      <div
        v-if="smallView"
        class="sb-color relative pointer"
        :id="`p-${lId ? lId : `p${i}`}`"
      >
        <router-link :to="data.link ? data.link : ''" class="sb-color">
          <div
            :class="[
              'd-flex',
              'px-3',
              'py-3',
              { 'justify-content-center': !lId },
            ]"
             @click="handleUpDate(data.id,data)"
             :style="{color:activeId===data.id ?`#cbbbbb`:`white !important` }"
          >
            <i v-if="data.icon" id="icons" :class="data.icon" scale="1.1"></i>
            <div v-if="lId" class="ml-2">{{ data.lblTxt }}</div>
            <i v-if="data.dropdown" class="fab angle-right"></i>
          </div>
        </router-link>
        <div class="side-drop-box" v-if="data.dropdown">
          <sb-list
            :small-view="true"
            :newdata="data.dropChildren"
            :handle-children="handleChildren"
            :l-id="lId ? `${lId}-c${i}` : `p${i}-c${i}`"
          />
        </div>
      </div>
      <div v-else>
        <router-link :to="data.link ? data.link : ''" class="sb-color">
          <div
            data-mdb-toggle="collapse"
            :data-mdb-target="`#${data.dropdown ? (lId ? lId : `p${i}`) : ''}`"
              @click="handleUpDate(data.id,data)"
          >
            <div
              :class="`${lId ? 'child-link p-3 d-flex' : 'p-hvr p-3 d-flex'} `"
              :style="{ paddingLeft: `${sideSpace}px !important`,color:activeId===data.id ?`#cbbbbb`:`white !important` }"
            >
              <i
                v-if="data.icon"
                :name="data.icon"
                :class="['mr-1', 'mt-1', data.icon]"
                scale="1.1"
              ></i>
              <div id='label'>{{ data.lblTxt }}</div>
              <i
                v-if="data.dropdown&&!slectedId.includes(data.id)"
                :name="data.icon"
                :class="['pl-3', 'mt-1', 'fas fa-angle-right']"
                scale="1.1"
              ></i>
              <i
                v-if="data.dropdown&&slectedId.includes(data.id)"
                :name="data.icon"
                :class="['pl-3', 'mt-1', 'fas fa-angle-down']"
                scale="1.1"
              ></i>
            </div>
          </div>
        </router-link>
        <div
          v-if="slectedId.includes(data.id)"
          class="child-nav"
          :id="`${lId ? lId : `p${i}`}`"
        >
          <sb-list
            :side-space="parseInt(`${lId ? sideSpace + 10 : 30}`)"
            :newdata="data.dropChildren"
            :l-id="lId ? `${lId}-c${i}` : `p${i}-c${i}`"
          >
          </sb-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { props } = require("../Navbar/index.vue");
module.exports = {
  components: {
    "sb-list": Vue.defineAsyncComponent(() =>
      loadModule("components/Sidebar/SidebarList.vue", options)
    ),
    mdbIcon: mdb.MDBIcon,
    mdbCollapse: mdb.MDBCollapse,
  },
  props: {
    newdata: Array,
    sideSpace: Number,
    smallView: Boolean,
    selectedId:Array,
    "l-id": String,
    "handle-children": Function,
  },
  data() {
    return {
      parenthvr: "",
      slectedId: [],
      activeId:1
    };
  },
  methods: {
    handleUpDate: function (data,pathDetail) {
    let link = !!pathDetail?.link?pathDetail?.link:'';
    if(link!==''){
      this.activeId=data;
      if (this.slectedId.includes(data)) {
        let selectedData = this.slectedId.filter(fd => fd !== data);
        this.slectedId = selectedData;
      } else {
        this.slectedId = [...this.slectedId, data];
      }
    }else{
      router.push('/');
      if (this.slectedId.includes(data)) {
        let selectedData = this.slectedId.filter(fd => fd !== data);
        this.slectedId = selectedData;
      } else {
        this.slectedId = [...this.slectedId, data];
      }
      this.activeId=1;
    }
    },
  },
};
</script>
<style>
#label{
    padding-left: 5px  !important;
    padding-right: 5px !important;
}
</style>
