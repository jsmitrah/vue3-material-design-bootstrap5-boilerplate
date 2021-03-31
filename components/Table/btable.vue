<template>
  <div class="ml-4 mt-4 mr-4" >
    <b-form-group label="Table Options" label-cols-lg="2" v-slot="{ ariaDescribedby }">
      <b-form-checkbox v-model="striped" :aria-describedby="ariaDescribedby" inline>Striped</b-form-checkbox>
      <b-form-checkbox v-model="bordered" :aria-describedby="ariaDescribedby" inline>Bordered</b-form-checkbox>
      <b-form-checkbox v-model="borderless" :aria-describedby="ariaDescribedby" inline>Borderless</b-form-checkbox>
      <b-form-checkbox v-model="outlined" :aria-describedby="ariaDescribedby" inline>Outlined</b-form-checkbox>
      <b-form-checkbox v-model="small" :aria-describedby="ariaDescribedby" inline>Small</b-form-checkbox>
      <b-form-checkbox v-model="hover" :aria-describedby="ariaDescribedby" inline>Hover</b-form-checkbox>
      <b-form-checkbox v-model="dark" :aria-describedby="ariaDescribedby" inline>Dark</b-form-checkbox>
      <b-form-checkbox v-model="fixed" :aria-describedby="ariaDescribedby" inline>Fixed</b-form-checkbox>
      <b-form-checkbox v-model="footClone" :aria-describedby="ariaDescribedby" inline>Foot Clone</b-form-checkbox>
      <b-form-checkbox v-model="noCollapse" :aria-describedby="ariaDescribedby" inline>No border collapse</b-form-checkbox>
    </b-form-group>

    <b-form-group label="Head Variant" label-cols-lg="2" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="headVariant"
        :aria-describedby="ariaDescribedby"
        class="mt-lg-2"
      >
        <b-form-radio :value="null" inline>None</b-form-radio>
        <b-form-radio value="light" inline>Light</b-form-radio>
        <b-form-radio value="dark" inline>Dark</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-form-group label="Table Variant" label-for="table-style-variant" label-cols-lg="2"> 
      <b-form-select
        id="table-style-variant"
        v-model="tableVariant"
        :options="tableVariants"
      >
        <template #first>
          <option value="">-- None --</option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-row>
    <b-col><b-button class="mt-2 mb-2" v-b-modal.modal-prevent-closing>Add users</b-button></b-col>
  </b-row>
      <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Details"
      @show="resetModal"
      @hidden="close"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="First Name"
          label-for="name1-input"
          invalid-feedback="First name is required"
          :state="nameState1"
        >
          <b-form-input
            id="name1-input"
            v-model="name1"
            :state="nameState1"
            required
          ></b-form-input>
          <!-- new field -->
        </b-form-group>
           <b-form-group
          label="Last Name"
          label-for="name2-input"
          invalid-feedback="Last name is required"
          :state="nameState2"
        >
          <b-form-input
            id="name2-input"
            v-model="name2"
            :state="nameState2"
            required
          ></b-form-input>
        </b-form-group>
          <!-- new field -->
            <b-form-group
          label="Email"
          label-for="email-input"
          invalid-feedback="Email is required"
          :state="emailState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <!-- <b-table 
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :striped="striped"
      :hover="hover"
      :items="items"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    ></b-table> -->
    <b-table striped hover :items="items"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
        @row-selected="true" 
        @row-clicked="expandAdditionalInfo" 
    >
     <template #cell(actions)="row">
        <!-- <b-button v-b-modal.modal-prevent-closing  v-on:click='edit=true' size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1"> -->
        <b-button v-b-modal.modal-prevent-closing  v-on:click='editRow(row)' size="sm" class="mr-1">
          Edit
        </b-button>
        <b-button size="sm" v-b-modal.modal-delete v-on:click='user=row.item.first_name;
        id=row.item.id
        '>
          delete
        </b-button>
      </template>
    </b-table>
      <b-modal id="modal-delete" title="Delete User"  @ok="handleDelte()">
    <p class="my-4">{{`Are you sure you want to delete this user ${user}`}}</p>
  </b-modal>
  </div>
</template>

<script>
  module.exports ={
       mounted() {
         axios
      .get('https://reqres.in/api/users?page=1')
      .then(response => {
          console.log('response',response.data.data )
          const {data}=response.data
          if(data.length){
                this.items = data;
          }
      })
    },
    data() {
      return {
        user:'',
        edit:false,
         name1: '',
         name2: '',
         email: '',
         id:'',
        nameState1: null,
        nameState2: null,
        emailState:null,
        submittedNames: [],
        fields: ['first_name', 'last_name', 'email',{ key: 'actions', label: 'Actions' }],
        items: [],
        tableVariants: [
          'primary',
          'secondary',
          'info',
          'danger',
          'warning',
          'success',
          'light',
          'dark'
        ],
        striped: false,
        bordered: false,
        borderless: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false,
        headVariant: null,
        tableVariant: '',
        noCollapse: false,
        rowSelected:true,
      }
    },
        methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity();
        this.nameState1 = valid;
        this.nameState2 = valid;
        this.emailState = valid;
        return valid
      },
        expandAdditionalInfo(row) {
          console.log('selected Row',row);
            this.name1 = row.first_name,
        this.name2 = row.last_name,
        this.email = row.email
        this.selectedRow = row
         row._showDetails = !row._showDetails;
       },
      resetModal() {
        if(!this.edit){
        this.name1 = ''
        this.name2 = ''
        this.email = ''
        this.nameState1 = null,
        this.nameState2 = null,
        this.emailState = null
        }
      },
      close(){
       this.name1 = ''
        this.name2 = ''
        this.email = ''
        this.nameState1 = null,
        this.nameState2 = null,
        this.emailState = null,
        this.edit =false
      },
      handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        this.handleSubmit();
      },
       handleDelte(bvModalEvt) {
         // this.handleSubmit();
        console.log('deleteId',this.id);
        this.items=this.items.filter(data=>data.id!==this.id);
        this.deleteAPiCall(this.id);
        bvModalEvt.preventDefault()
      },

      deleteAPiCall(data){
      axios.delete(`https://reqres.in/api/users/${data}`) 
      .then(response => {
          console.log('response',response.data.data )
          const {data}=response.data
          if(data.length){
                // this.items = data;
          }
      })
      },
      putAPiCall(data){
      axios.put('https://reqres.in/api/users', {
      ...data
      })
      .then(response => {
          console.log('response',response.data.data )
          const {data}=response.data
          if(data.length){
                // this.items = data;
                
          }
      })
      },
      postAPiCall(data){
      axios.post('https://reqres.in/api/users', {
      ...data
      })
      .then(response => {
          console.log('response',response.data.data )
          const {data}=response.data
          if(data.length){
                // this.items = data;
                
          }
      })
      },
      editRow(data){
        const {item }= data
        console.log('Rowdata',data);
        this.edit=true;
        this.id =item.id;
        this.name1 = item.first_name;
        this.name2 = item.last_name;
        this.email = item.email;
      },
      handleSubmit() {
        if (!this.checkFormValidity()) {
          return
        }
        console.log('subMitedFields',this.edit);
        if(!this.edit){
          let data =
           {first_name:this.name1,last_name:this.name2,email:this.email,id:this.id}
          this.items=[data,...this.items]
          this.postAPiCall(data);
        }else{
          let data ={first_name:this.name1,last_name:this.name2,email:this.email,id:this.id}
          let filteredData =this.items.filter(items =>data.id!==items.id);
          this.items=[data,...filteredData];
          this.edit = false;
          this.putAPiCall(data)
        }
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
        }
    
  }
</script>

