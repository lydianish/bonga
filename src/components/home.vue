<template>
  <div class="home">
    <table>
      <thead>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, index) in contacts" :key="index">
          <td>{{contact.firstname}}</td>
          <td>{{contact.lastname}}</td>
          <td>{{contact.email}}</td>
          <td>{{contact.phone}}</td>
          <td>{{contact.address}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

//adding surix client app service
import { Service, requests } from '@surix/client-service';
const service = Service.init();

//fetching entities from surix
// const query = {
//       query: {
//         // age: {$gt: 20}
//         firstname: {
//           label: 'firstname',
//           type: 'text',
//           value: firstname.value
//         },
//         lastname: {
//           label: 'lastname',
//           type: 'text',
//           value: lastname.value
//         },
//         email: {
//           label: 'email',
//           type: 'email',
//           value: email.value
//         },
//         phone: {
//           label: 'phone',
//           type: 'text',
//           value: phone.value
//         },
//         address: {
//           label: 'address',
//           type: 'text',
//           value: address.value
//         }

//       },
//       tags: ['contacts']
// };
// service.request(requests.contacts.getEntities, query)
// .then(res => {
//   //do something with response
//   return contacts
//   console.log(contacts)
// })
// .catch(err => {
//   alert('fetching entities was unsuccessful')
// })


export default {
  name: 'home',
  data () {
    return {
      // data
    }
  }
}
</script>

<style scoped>
.home{
  margin-top: 50px;
  width: 100%;
  /* background-color: #cccccc; */
}
table{
  text-align: left;
  margin-left: 50px;
}
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
}
</style>
