import { ref, reactive } from "vue";
const countBase = ref(0);
const countReactive = reactive({ count: 300 })

const countObjectR = reactive({ count: 100 })
const countArrayR = reactive([{ count: 200 }])

// const countObject = ref({ count: 100 })
// const countArray = ref([{ count: 200 }])
setInterval(() => {
    console.log('countBase', countBase.value++)
    console.log('countReactive', countReactive.count++)
    console.log('countObjectR', countObjectR.count++)
    console.log('countArrayR', countArrayR[0].count++)
}, 1000);


// 1.基础数据类型
// 2.引用

export { countBase, countObjectR, countArrayR }
