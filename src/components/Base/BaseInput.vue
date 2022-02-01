<template>
  <label class="block">
    <span class="text-gray-700">{{ label }}</span>
    <input
      :type="type"
      :value="value"
      class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["text", "email", "password"].includes(value);
      },
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
