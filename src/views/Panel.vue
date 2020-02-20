<template>
<span>
    <journeyy-panel></journeyy-panel>
    <journey-panel></journey-panel>
    <panel-imgs></panel-imgs>
    <guides-panel></guides-panel>
</span>
</template>

<script>
import JourneyPanel from '@/components/JourneyPanel.vue'
import GuidesPanel from '@/components/GuidesPanel.vue'
import PanelImgs from '@/components/PanelImgs.vue'
import JourneyyPanel from '@/components/JourneyyPanel.vue'
export default {
    components: {
        JourneyPanel,
        PanelImgs,
        GuidesPanel,
        JourneyyPanel,
    }
}
</script>

