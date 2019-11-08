<template>
    
    
    <v-container fluid>
        <v-layout>
            <explore-maps></explore-maps>
            <home-hikesz></home-hikesz>
            
        </v-layout>
   

    </v-container>
    
</template>    






<script>

import ExploreMaps from '@/components/ExploreMaps';

export default {
    name: 'explore',
    components: {
       
        ExploreMaps
    }
};
</script>




