<script setup lang="ts">
import { computed } from 'vue';
import { Color } from '~~/types/global';

const props = withDefaults(
  defineProps<{
    filled?: boolean;
    outlined?: boolean;
    large?: boolean;
    icon?: boolean;
    color?: Color;
  }>(),
  {
    color: Color.primary,
  },
);

const classes = computed(() => ({
  'button-filled': props.filled,
  'button-outlined': props.outlined,
  'button-large': props.large,
  'button-icon': props.icon,
  'button-primary': props.color === Color.primary,
  'button-secondary': props.color === Color.secondary,
  'button-tertiary': props.color === Color.tertiary,
}));
</script>

<template>
  <button type="button" class="button" :class="classes">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  @apply relative label-large px-3 py-2.5 rounded-full overflow-hidden;

  &.button-primary {
    @apply text-primary;
  }
  &.button-secondary {
    @apply text-secondary;
  }
  &.button-tertiary {
    @apply text-tertiary;
  }

  &.button-icon {
    @apply flex flex-row gap-2 items-center justify-center pl-4 pr-6;

    :deep(svg) {
      @apply w-4.5 h-4.5;
    }
  }

  &:not(:disabled):not(.disabled) {
    @apply hover:after:absolute hover:after:inset-0 hover:after:w-full hover:after:h-full hover:after:bg-current hover:after:opacity-[.08] hover:after:pointer-events-none;
    @apply focus:after:absolute focus:after:inset-0 focus:after:w-full focus:after:h-full focus:after:bg-current focus:after:opacity-[.12] focus:after:pointer-events-none;
    @apply active:after:absolute active:after:inset-0 active:after:w-full active:after:h-full active:after:bg-current active:after:opacity-[.12] active:after:pointer-events-none;

    &.button-filled.button-primary {
      @apply hover:after:bg-on-primary focus:after:bg-on-primary active:after:bg-on-primary;
    }

    &.button-filled.button-secondary {
      @apply hover:after:bg-on-secondary focus:after:bg-on-secondary active:after:bg-on-secondary;
    }

    &.button-filled.button-tertiary {
      @apply hover:after:bg-on-tertiary focus:after:bg-on-tertiary active:after:bg-on-tertiary;
    }
  }

  &.button-filled,
  &.button-outlined {
    @apply px-6;
  }

  &.button-outlined {
    @apply shadow-border;
  }

  &.button-filled {
    &.button-primary {
      @apply text-on-primary bg-primary;
    }
    &.button-secondary {
      @apply text-on-secondary bg-secondary;
    }
    &.button-tertiary {
      @apply text-on-tertiary bg-tertiary;
    }
  }

  &.disabled,
  &:disabled,
  &.button-outlined.disabled,
  &.button-outlined:disabled,
  &.button-filled.disabled,
  &.button-filled:disabled {
    @apply cursor-not-allowed text-on-surface/[.38];

    &.button-filled {
      @apply bg-disabled/[.12];
    }

    &.button-outlined {
      @apply shadow-disabled/[.12];
    }
  }
}
</style>
