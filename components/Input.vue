<script lang="ts">
import { computed } from "vue";

export default {
  inheritAttrs: false,
  props: {
    filled: Boolean,
    outlined: Boolean,
    icon: Boolean,
  },
  setup(props) {
    const classes = computed(() => ({
      "input-filled": props.filled || (!props.filled && !props.outlined),
      "input-outlined": props.outlined,
      "input-icon": props.icon,
    }));

    return {
      classes,
    };
  },
};
</script>

<template>
  <div class="input" :class="classes">
    <slot></slot>
    <input type="text" v-bind="$attrs" />
  </div>
</template>

<style scoped lang="scss">
.input {
  @apply relative rounded-lg overflow-hidden h-14 bg-surface text-on-surface;

  input {
    @apply absolute inset-0 flex items-center rounded-lg px-4 w-full h-full bg-transparent body-large;
  }

  &.input-filled {
    @apply before:absolute before:inset-0 before:w-full before:h-full before:bg-primary before:opacity-[.08];

    input {
      @apply transition-all;
      @apply hover:bg-primary/[.12];
      @apply focus:bg-primary/[.12];
      @apply active:bg-primary/[.12];
    }
  }

  &.input-outlined input {
    @apply shadow-border transition-shadow;
    @apply hover:shadow-border-2 hover:shadow-primary;
    @apply focus:shadow-border-2 focus:shadow-primary;
    @apply active:shadow-border-2 active:shadow-primary;
  }

  &.input-icon {
    @apply flex items-center px-3;

    input {
      @apply pl-13;
    }
  }
}
</style>
