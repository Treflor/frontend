<template>
<span>
    <journey-panel></journey-panel>
    <panel-imgs></panel-imgs>
    <guides-panel></guides-panel>
</span>
</template>

<script>
import JourneyPanel from '@/components/JourneyPanel.vue'
import GuidesPanel from '@/components/GuidesPanel.vue'
import PanelImgs from '@/components/PanelImgs.vue'
export default {
    components: {
        JourneyPanel,
        PanelImgs,
        GuidesPanel
    }
}
</script>

