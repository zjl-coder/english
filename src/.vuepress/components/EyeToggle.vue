<template>
  <div @click="toggleVisibility" class="eye-toggle">
    <svg v-if="isVisible" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <!-- 睁眼图标 -->
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
    <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <!-- 闭眼图标 -->
      <path
        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
      ></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'EyeToggle',
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    // 从 localStorage 读取初始状态
    const stored = localStorage.getItem('CONTENT_VISIBILITY');
    this.isVisible = stored !== null ? JSON.parse(stored) : false;
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;

      // 保存到 localStorage
      localStorage.setItem('CONTENT_VISIBILITY', JSON.stringify(this.isVisible));

      // 触发自定义事件，让同页面的其他组件也能响应
      window.dispatchEvent(
        new CustomEvent('visibilityChange', {
          detail: { isVisible: this.isVisible },
        }),
      );
    },
  },
};
</script>
