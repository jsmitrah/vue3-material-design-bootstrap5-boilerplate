<template>
    <div class="app-container">

  <nav-bar  @my-event="handlenaveBar"></nav-bar>
        <div class="d-flex">
            <div :class="{'sb-large': !smallview, 'sb-mini': smallview, sb: true }">
                <side-bar  :small-view="smallview">
                </side-bar>
            </div>
         <div class="pl-2 container-fluid">
                <router-view></router-view>
            </div> 
     </div>
    </div>
</template>
<script>

module.exports = {
    components: {
        "nav-bar":Vue.defineAsyncComponent(() => loadModule("components/Navbar/index.vue", options)),
        "side-bar": Vue.defineAsyncComponent(() => loadModule("components/Sidebar/index.vue", options)),
             mdbNavbar:mdb.MDBNavbar,
            mdbNavbarBrand:mdb.MDBNavbarBrand,
            mdbNavbarToggler:mdb.MDBNavbarToggler,
            mdbNavbarNav:mdb.MDBNavbarNav,
            mdbNavItem:mdb.MDBNavItem,
            mdbDropdown : mdb.MDBDropdown,
            mdbDropdownMenu:mdb.MDBDropdownMenu,
            mdbDropdownToggle:mdb.MDBDropdownToggle,
            mdbDropdownItem:mdb.MDBDropdownItem,
            mdbInput:mdb.MDBInput,
    },
    data() {
        return {
            smallview: false,
        };
    },
    mounted(){
    },
    methods: {
        handlenaveBar:function(data){
            
 this.smallview = !this.smallview;       
  }
    },
    watch: {
    },
    computed:{
        handleSb1: function() {
            return this.test;
        }
    }
};
</script>
<style >
.sb {
    min-height: calc(100vh - 56px);
    color: white;
    position: relative;
    -webkit-transition: margin 0.25s ease-out;
    -moz-transition: margin 0.25s ease-out;
    -o-transition: margin 0.25s ease-out;
    transition: margin 0.25s ease-out;
    background-color: rgb(66, 164, 209);
    overflow: hidden;
}

.sb-large {
    width: 14rem;
    overflow: hidden;
}
.sb-mini {
    width: 4rem;
    overflow: hidden;
}
a {
    text-decoration: none !important;
}
:not(.collapsed) > div > .when-closed, :not(.collapsed) > a > div > .when-closed {
    transition: all 0.2s ease;
    transform: rotateZ(90deg);
}
.collapsed > div > .when-closed, .collapsed > a > div > .when-closed {
    transition: all 0.2s ease;
    
}
:not(.collapsed) > .rt-90 {
    transition: all 0.2s ease;
    transform: rotateZ(90deg);
}
.collapsed > .rt-90 {
    transition: all 0.2s ease;
}
.right-arrow {
    margin-top: 6px;
}
.p-hvr:hover {
    background: black;
    color: white;
}
.p-hvr {
    color: rgba(255, 255, 255, 0.5);
}
.child-nav {
    background-color: rgb(66, 164, 209);;
    color: rgba(255, 255, 255, 0.5);
}
.child-link:hover {
    color: white;
    background: black;;
}
.side-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 1rem;
}
.sb-color {
    color: rgba(255, 255, 255, 0.5);
}
.sb-color:hover {
    color: white;
        width: 100%!important;

    background: black;
}
.pointer {
    cursor: pointer;
}
.arrow {
    position: absolute;
    right: 17px !important;
}
.relative {
    position: relative;
}
.side-drop-box {
    position: absolute;
    z-index: 100;
    left: 100%;
    top: 0px;
    min-width: 10rem;
}
.box-content{
    background-color: #111;
    margin-left: 2px;
}
</style>
