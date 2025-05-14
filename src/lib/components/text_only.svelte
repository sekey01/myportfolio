<script>
    export let text;
    export let color;
    export let fontSize;
    export let fontfamily;

</script>
<style>
    .text{
        text-align: center;
        font-size: 2rem;
    }
</style>
<div class="text" style="color: {color}; font-size: {fontSize}; font-family : {fontfamily};">
    <p>
        {text}
    </p>
</div>
