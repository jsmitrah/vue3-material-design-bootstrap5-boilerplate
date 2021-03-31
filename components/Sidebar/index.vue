<template>
    <sb-list :newdata="listData" :small-view="smallView"  />
</template>

<script>
module.exports = {
    components: {
        "sb-list": Vue.defineAsyncComponent(() => loadModule("components/Sidebar/SidebarList.vue", options)),
    },
    props: {
        smallView: Boolean
    },
    data() {
        return {
            msg: "Welcome to Your Vue.js PWA",
            listData: [
                {
                    lblTxt: "Dashboard",
                    link: "/",
                    icon: "fas fa-tachometer-alt",
                    dropdown: false,
                    dropChildren: [],
                    id:1
                },
                {
                    lblTxt: "Pages",
                    icon: "fas fa-folder",
                    dropdown: true,
                    id:2,
                    dropChildren: [
                        {
                            lblTxt: "Login",
                            link: "login",
                            icon: "",
                            dropdown: false,
                            dropChildren: [],
                            id:3,
                        },
                        {
                            lblTxt: "Register",
                            link: "",
                            icon: "",
                            dropdown: false,
                            dropChildren: [],
                            id:4,
                        },
                        {
                            lblTxt: "Menu",
                            dropdown: true,
                            id:5,
                            dropChildren: [
                                {
                                    lblTxt: "Menu1",
                                     id:11,
                                },
                                {
                                    lblTxt: "Menu2",
                                    dropdown: true,
                                     id:6,
                                    dropChildren: [
                                        {
                                            lblTxt: "Sub Menu1",
                                             id:12,
                                        },
                                        {
                                            lblTxt: "Sub Menu2",
                                            id:13,
                                        },
                                        {
                                            lblTxt: "Sub Menu3",
                                            id:14,
                                        }
                                    ]
                                },
                                {
                                    lblTxt: "Menu3",
                                     id:7,
                                }
                            ]
                        }
                    ]
                },
                {
                    lblTxt: "Tables",
                    link: "table",
                    icon: "fas fa-table",
                    dropdown: false,
                    dropChildren: [],
                    id:10,
                }
            ]
        };
    },
  
};
</script>
<style>
.sb {
    min-height: calc(100vh - 56px);
    color: white;
    position: relative;
    -webkit-transition: margin 0.25s ease-out;
    -moz-transition: margin 0.25s ease-out;
    -o-transition: margin 0.25s ease-out;
    transition: margin 0.25s ease-out;
    background-color:  rgb(66, 164, 209);;
}
.sb-large {
    width: 14rem;
    overflow: hidden;
}
.sb-mini {
    width: 4rem;
    overflow: visible;
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
    background: #80808057;
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
    background-color: rgb(66, 164, 209);;
    margin-left: 2px;
}
</style>
