<template>
    
    
    <v-container fluid>
        <v-layout>
            <explore-maps></explore-maps>
            <explore-guide></explore-guide>
            <home-hikesz></home-hikesz>
            
        </v-layout>
   

    </v-container>
    
</template>    






<script>

import ExploreMaps from '@/components/ExploreMaps';
import ExploreGuide from '@/components/ExploreGuide';

export default {
    name: 'explore',
    components: {
       
        ExploreMaps,
        ExploreGuide

    }
};
</script>




