<svelte:options tag="modal-wc" />

<script lang="ts">
  export let title: string = "Title";
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
      new CustomEvent("change", { detail: { show }, composed: true })
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

<div class="modal-container" style="display: {show ? 'flex' : 'none'}">
  <div class="backdrop" on:click={onBackdropClick} />
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
  .modal-container {
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }

  .backdrop {
    position: absolute;
    background-color: #a0a5a175;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .modal {
    width: 400px;
    background-color: white;
    border-radius: 4px;
    animation: zoom-out 0.2s;
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

  @keyframes zoom-out {
    0% {
      transform: scale(0);
    }
    20% {
      transform: scale(0.3);
    }
    50% {
      transform: scale(0.6);
    }
    80% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
