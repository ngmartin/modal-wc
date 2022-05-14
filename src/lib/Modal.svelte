<svelte:options tag="modal-wc" />

<script lang="ts">
  export let title: string = 'Title';
  export let show: boolean = false;

  function onClose() {
    show = false;
  }
</script>

<div class="backdrop" style="display: {show ? 'flex' : 'none'}">
  <div class="modal">
    <slot name="header">
      <header>{title} <span on:click={onClose}>&#x2715</span></header>
    </slot>
    <slot />
    <slot name="footer" />
  </div>
</div>

<style>
  .backdrop {
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #a0a5a1;
    z-index: 1000;
  }

  .modal {
    width: 400px;
    background-color: white;
    border-radius: 4px;
  }

  header {
    padding: 18px;
    font-size: 22px;
    font-weight: 500;
  }

  header span {
    float: right;
    cursor: pointer;
    user-select: none;
  }
</style>
