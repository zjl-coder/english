<template>
  <div @click="toggleVisibility" class="inline-eye-toggle">
    <svg v-if="isVisible" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <!-- 睁眼图标 -->
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
    <svg v-else width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <!-- 闭眼图标 -->
      <path
        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
      ></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  </div>
  <div v-if="isVisible">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentToggle',
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    // 从 localStorage 读取显示状态
    const stored = localStorage.getItem('CONTENT_VISIBILITY');
    this.isVisible = stored !== null ? JSON.parse(stored) : false;

    // 监听存储变化
    window.addEventListener('storage', this.handleStorageChange);
    // 监听自定义事件（用于同页面内的通信）
    window.addEventListener('visibilityChange', this.handleVisibilityChange);
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.handleStorageChange);
    window.removeEventListener('visibilityChange', this.handleVisibilityChange);
  },
  methods: {
    handleStorageChange(event) {
      if (event.key === 'CONTENT_VISIBILITY') {
        this.isVisible = JSON.parse(event.newValue);
      }
    },
    handleVisibilityChange(event) {
      this.isVisible = event.detail.isVisible;
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.inline-eye-toggle {
  display: inline;
  float: right;
}
</style>
