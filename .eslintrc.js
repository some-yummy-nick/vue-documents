module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
    ],
    "globals": {
        "defineProps": "readonly",
        "defineEmits": "readonly"
    },
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    }
}