<script lang="ts">
  import './lib/Modal.svelte';

  let modalRef;

  function onOpen() {
    modalRef.setShow(true);
  }
</script>

<main>
  <button on:click={onOpen}>Open Modal</button>

  <modal-wc bind:this={modalRef} outsideclose={false} closeonesc={true}>
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
