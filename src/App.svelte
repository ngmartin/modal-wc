<script lang="ts">
  import './lib/Modal.svelte';
</script>

<main>
  <modal-wc show={true}>
    <div>This is content</div>
    <footer slot="footer">footer</footer>
  </modal-wc>
</main>

<style>
  div {
    padding: 15px;
  }

  footer {
    padding: 15px;
  }
</style>
