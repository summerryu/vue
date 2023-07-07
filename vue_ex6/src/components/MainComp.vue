<template>
    <div class="main">
        <div class="staff" v-for="(staffs,i) in staff" :key="i">
            <div>
                <router-link :to="'/staff/'+i">{{ staffs.name }}</router-link>
            </div>
        </div>
        <!-- 
            <div><router-link to="/staff/0"> staff1<router-link></div>
         -->
        <div class="doctor" v-for="(doctors,i) in doctor" :key="i">
            <div>
                <router-link :to="'/doctor/'+i">{{ doctors.name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MainComp",
    props:{
        doctor:Array,
        staff:Array
    }
}
</script>

<style>
    .main{
        width:1200px; margin:0 auto; border: 1px solid red;
        height: 100px;
    }
    .main .staff{
        width:100px;
    }
</style>