
const routes = [
  {
    path: '/',
    name: 'Main',
    component: httpVueLoader('components/index.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: httpVueLoader('components/Dashboard/index.vue'),
      },
      {
        path: 'table',
        name: 'Tables',
        component: httpVueLoader('components/Table/index.vue'),
      },
      {
        path: 'btable',
        name: 'B-Tables',
        component: httpVueLoader('components/Table/btable.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: httpVueLoader('components/Login/index.vue'),
      },
    ]
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({
      el: '#app',
    router,
    data() {
      return {
      };
  },
    computed: {
        showAlert() {
            return this.name.length > 4 ? true : false
        }
    },
    methods: {

    },
    components: {
    },
    watch: {
        '$route'(to, from) {
        }
    },
    mounted: function () {
    }
})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.use(mdb)
// app.use(VueAwesome)

// app.use(Awesome)
// app.use(mdbvue)


app.mount('#app')

