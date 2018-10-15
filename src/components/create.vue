// this is where we create a new contact
// includes forms to fill the customer details
<template>
 <div class="body">
     <form id="form">
         <label>First Name</label><br>
         <input type="text" name="firstname" v-model="firstname" ref="firstname" required/><br><br>
         <label>Last Name</label><br>
         <input type="text" name="lastname" v-model="lastname" ref="lastname" required/><br><br>
         <label>Email</label><br>
         <input type="email" name="email" v-model="email" ref="email" required/><br><br>
         <label>Phone</label><br>
         <input type="number" name="phone" v-model="phone" ref="phone" required/><br><br>
         <label>Address</label><br>
         <input type="text" name="address" v-model="address" ref="address" required/><br><br>
         <button @click="getFormValues()">Add</button>
     </form>
 </div>
</template>

<script>
// adding surix client app service
import { Service, requests } from '@surix/client-service';
const service = Service.init();

export default {
  name: 'details',
  data () {
    return {
      data: {
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          address: ""
      }
    }
  },

  methods: {
      createContact() {
        let entity = {
            data: {
                firstname: {
                    label: 'firstname',
                    type:'text',
                    value:this.firstname
                },
                lastname: {
                    label: 'lastname',
                    type:'text',
                    value:this.lastname
                },
                email: {
                    label: 'email',
                    type:'text',
                    value:this.email
                },
                phone: {
                    label: 'phone',
                    type:'text',
                    value:this.phone
                },
                address: {
                    label: 'address',
                    type:'text',
                    value:this.address
                }
            }
        }
        service.request(requests.data.createEntity, entity).then(entity => {
            // Do something with the newly created entity
            alert('successful')
            console.log(data)
            }).catch(err => {
            // Handle the error
        });
      }
  }
}

</script>

<style scoped>
form{
    margin-top: 50px;
    margin-left: 10%;
}
input[type='text'],[type='email'],[type='number']{
    height: 20px;
    width: 300px;
    border: transparent;
    border-bottom: 2px solid teal;
}
button{
    border: transparent;
    border-radius: 5px;
    font-size: 16px;
    width: 100px;
    background-color: teal;
    padding: 10px;
    color: #ffffff;
    border-radius: 5px;
}
</style>
