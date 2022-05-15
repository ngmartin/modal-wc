<script lang="ts">
  import './lib/Modal.svelte';

  let modalRef;

  function onOpen() {
    modalRef.setShow(true);
  }

  function onChange(e) {
    console.log(e);
  }
</script>

<main>
  <button on:click={onOpen}>Open Modal</button>

  <modal-wc bind:this={modalRef} on:change={onChange}>
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
