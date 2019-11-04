<template>
    <div>
        <home-hikesz></home-hikesz>
        <home-replies></home-replies>
    </div>
</template>

<script>
import HomePlans from '@/components/HomeHikesz';
import MealRecipes from '@/components/HomeReplies';

export default {
    name: 'Menu',
    components: {
        HomeHikesz,
        HomeReplies
    }
};
</script>

<style scoped>
</style>