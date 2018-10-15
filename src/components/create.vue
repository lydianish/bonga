// this is where we create a new contact
// includes forms to fill the customer details
<template>
 <div class="body">
     <form id="form" @submit="contacts" method="POST"  action="/">
         <label>First Name</label><br>
         <input type="text" name="firstname" v-model="firstname" required/><br><br>
         <label>Last Name</label><br>
         <input type="text" name="lastname" v-model="lastname" required/><br><br>
         <label>Email</label><br>
         <input type="email" name="email" v-model="email" required/><br><br>
         <label>Phone</label><br>
         <input type="number" name="phone" v-model="phone" required/><br><br>
         <label>Address</label><br>
         <input type="text" name="address" v-model="address" required/><br><br>
         <input type="submit" value="Add" class="button" id="submitBtn" @click="save()"/>
     </form>
 </div>
</template>

<script>

//adding surix client app service
import { Service, requests } from '@surix/client-service';
const service = Service.init();

//posting an entity to surix
// submitBtn.addEventListener('click', function () {
//     const entity = {
//          contacts: {
//                 // age: {$gt: 20}
//                 firstname: {
//                 label: 'firstname',
//                 type: 'text',
//                 value: firstname.value
//                 },
//                 lastname: {
//                 label: 'lastname',
//                 type: 'text',
//                 value: lastname.value
//                 },
//                 email: {
//                 label: 'email',
//                 type: 'email',
//                 value: email.value
//                 },
//                 phone: {
//                 label: 'phone',
//                 type: 'text',
//                 value: phone.value
//                 },
//                 address: {
//                 label: 'address',
//                 type: 'text',
//                 value: address.value
//                 }

//              },
//          tags: ['contacts']
//     };
//     surix.request(requests.contacts.createEntity, entity)
//     .then((createEntity) => {
//         firstname.value = '';
//         lastname.value = '';
//         email.value = '';
//         phone.value = '';
//         address.value = '';
//     }).catch(error => {
//         console.error('Error', error);
//     })
// })



export default {
  name: 'details',
  data () {
    return {
        //data
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
input[type='submit']{
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
