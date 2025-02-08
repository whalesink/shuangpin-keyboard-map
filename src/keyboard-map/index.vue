<template>
  <div class="keyboard">
    <key-block
      v-for="codes of XIAOHE_KEYMAP"
      :keyName="codes.keyName"
      :char="codes.char"
      :initials="codes.initials"
      :finals="codes.finals"
    />
  </div>
</template>

<script lang="ts" setup>
import KeyBlock from "./key-block.vue";
import { XIAOHE_KEYMAP } from "./keymap";
</script>

<style scoped lang="scss">
.keyboard {
  display: grid;
  gap: 10px;
  grid-auto-rows: 82px;
  grid-template-columns: repeat(42, 13px);
}
</style>
