<template>
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
  },
};
</script>
