
import { getDictDataOption } from "@/api/system/dict/data";
/**
 * 获取字典数据
 */
export function useDict(...args: string[]) {
    const res = ref({});
    return (() => {
        args.forEach((dictType, index) => {
           //@ts-ignore
            res.value[dictType]=[]
            getDictDataOption(dictType).then(resp => {
                //@ts-ignore
                res.value[dictType] = resp.data
            })
        })
        return toRefs(res.value);
    })()
}