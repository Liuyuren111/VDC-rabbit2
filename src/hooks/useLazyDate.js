import {ref} from "vue";
import {useIntersectionObserver} from "@vueuse/core";

export function useLazyDate(apiFn) {
    // 1.创建对象元素
    const target = ref(null);
    // 2.存储数据
    const result = ref(null);
    // 3.监听元素进入可视区
    // 第一个参数：ref引用，获取DOM
    // 第二个参数：回调，回调里面的参数 isIntersecting 会在参数一获取的 DOM 元素进入可视区域的时候监听并且为 true
    // 第三个参数：DOM 元素进入可视区域的距离 从 0 - 1
    const {stop} = useIntersectionObserver(
        target,
        ([{isIntersecting}]) => {
            console.log("懒加载", isIntersecting);
            if (isIntersecting) {
                // 停止监听懒加载
                stop();
                // 调用API 获取数据
                apiFn().then((res) => {
                    console.log(res)
                    // console.log("layData:", res); //@log
                    result.value = res.result;
                });
            }
        },
        {threshold: 0}
    );
    // 返回两个值 result 返回的是调用接口返回的后台的数据
    // target 用来实现 ref 引用
    return {target, result};
}