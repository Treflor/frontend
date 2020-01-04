<template>
  <span>
    <admin-panel></admin-panel>
   <admin-info1></admin-info1> 
   <admin-profs1></admin-profs1>
   <admin-chrt></admin-chrt>
  <!-- <admin-info2></admin-info2>  --> 
  </span>
</template>

<script>
import AdminPanel from '@/components/AdminPanel';
import AdminInfo1 from '@/components/AdminInfo1';
//import AdminInfo2 from '@/components/AdminInfo2';
import AdminProfs1 from '@/components/AdminProfs1';
import AdminChrt from '@/components/AdminChrt';
export default {
  name: 'AdminPage',
  components: {
    AdminPanel,
    AdminInfo1,
  //  AdminInfo2,
    AdminProfs1,
    AdminChrt
  }
//}
}
</script>



