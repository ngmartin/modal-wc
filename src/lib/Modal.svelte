<svelte:options tag="modal-wc" />

<script lang="ts">
  export let title: string = 'Title';
  export let outsideClose: boolean = true;

  let show: boolean = false;
  let modalRef: HTMLDivElement;

  function close() {
    show = false;
  }

  function open() {
    show = true;
  }

  function emitShowing(show: boolean) {
    modalRef.dispatchEvent(
      new CustomEvent('change', { detail: { show }, composed: true })
    );
  }

  function onClose(e: Event) {
    e.stopPropagation();
    setShow(false);
  }

  function onBackdropClick() {
    if (outsideClose) {
      setShow(false);
    }
  }

  export function setShow(show: boolean) {
    emitShowing(show);
    show ? open() : close();
  }
</script>

<div
  class="backdrop"
  style="display: {show ? 'flex' : 'none'}"
  on:click={onBackdropClick}
>
  <div bind:this={modalRef} class="modal">
    <slot name="header">
      <header>
        {title} <span on:click={onClose}>&#x2715</span>
      </header>
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
    background-color: #a0a5a175;
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
