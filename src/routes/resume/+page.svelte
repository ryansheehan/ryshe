<script lang="ts">
    import type {TestType} from './+page';

    export let data: TestType;
</script>

<div>Resume</div>
<p><pre>{JSON.stringify(data, undefined, 2)}</pre>

<style lang="postcss">
    
</style>