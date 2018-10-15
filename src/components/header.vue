<template>
    <div class="nav">
        <img src="https://media.idownloadblog.com/wp-content/uploads/2015/05/iOS-8-Contacts-icon-full-size.png">
        <h1>Bonga</h1>
        <router-link to="/"><button>View Contacts</button></router-link>
        <router-link to="/create/create"><button>Add Contact</button></router-link>
    </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style scoped>
.nav{
    height: 70px;
    width: 100%;
    margin-top: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
h1{
    font-family: 'Roboto', sans-serif;
    float: left;
    margin-left: 20px;
}
img{
    float: left;
    height: 60px;
    margin-left: 5%;
    margin-top: 5px;
    padding-bottom: 10px;
    }
button{
  /* width: 100px; */
  background-color: teal;
  border: transparent;
  padding: 10px;
  color: #ffffff;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 20px;
  float: right;
  margin-right: 50px;
}
@media only screen and (max-device-width:736px){
    img{
        height: 40px;
        margin-left: 3%;
        margin-top: 20px;
        }
    .head{
        height: 70px;
    }
}
</style>
