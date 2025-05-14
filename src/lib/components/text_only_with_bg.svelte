<script>
    export let text;
    export let color;
    export let fontSize;
    export let marginTop;
    export let fontfamily;
    export let bgcolor;

</script>
<style>
    .text{
        text-align: center;
        font-size: 2rem;
        border-radius: 30px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(175, 57, 57, 0.2);
    }
</style>
<div class="text" style="color: {color}; font-size: {fontSize}; margin-top: {marginTop}; font-family : {fontfamily}; background-color: {bgcolor}; border-bottom-right-radius: 130px;">
    <p>
        {text}
    </p>
</div>
