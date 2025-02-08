<template>
  <div class="content">
    <div class="page-wrapper">
      <div class="page" ref="page">
        <keyboard-map />
      </div>
    </div>
    <div>
      <button @click="exportToPDF">导出pdf</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import KeyboardMap from "@/keyboard-map/index.vue";
import { jsPDF } from "jspdf";
import { useTemplateRef } from "vue";

const pageRef = useTemplateRef<HTMLDivElement>("page");

const exportToPDF = () => {
  if (!pageRef.value) return;

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "cm",
    format: "a4",
  });

  pdf.html(pageRef.value, {
    html2canvas: { scale: 0.0263 },
    callback: (pdf) => {
      pdf.save("keyboard-map.pdf");
    },
  });
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  padding: 40px;
}

.page-wrapper {
  border: 1px solid #ff3f3f;
  width: fit-content;
}
.page {
  // border: 1px solid #ff3f3f;
  // 横版A4尺寸
  width: 29.7cm;
  height: 21cm;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 10px 20px;
  background-color: #ff3f3f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
  margin: 30px;

  &:hover {
    background-color: #ff9d9d;
  }
}
</style>
