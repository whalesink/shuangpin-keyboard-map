<template>
  <div class="key-block" :data-key-char="keyName">
    <div class="initials">
      <div class="char">{{ char }}</div>
      <div class="syllable">{{ initials }}</div>
    </div>
    <div class="finals">
      <div class="syllable" v-for="syllable of finals">
        {{ syllable }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { KeyboardItem } from "./types";

const { char, initials, finals, keyName } = defineProps<KeyboardItem>();
</script>

<style scoped lang="scss">
.key-block {
  border-radius: 2px;
  box-sizing: border-box;
  padding: 5px 10px;
  border: 1px solid#d1d1d1;
  grid-column: span 4;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

  .initials {
    display: flex;
    align-items: end;
    justify-content: space-between;
    line-height: 26px;
    .char {
      font-size: 26px;
      font-weight: bold;
    }

    .syllable {
      font-size: 22px;
      // font-weight: bold;
      color: #ff5b5b;
    }
  }

  .finals {
    color: #5f5f5f;

    .syllable {
      font-size: 18px;
      text-align: right;
      line-height: 20px;
    }
  }

  &:hover {
    background-color: #e4e4e4;
  }
}

// 模拟标准美式键盘布局
.key-block[data-key-char="a"] {
  grid-column: 3 / 7;
}

.key-block[data-key-char="z"] {
  grid-column: 5 / 9;
}
</style>
