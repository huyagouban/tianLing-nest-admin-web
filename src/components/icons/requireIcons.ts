let icons: string[] = []; // 添加数组元素的类型注解

// 使用TypeScript的import type语法来声明modules的类型
type Modules = Record<string, () => Promise<any>>;

const modules: Modules = import.meta.glob('@/assets/icons/*.svg');
// 遍历modules对象并提取图标名称
for (const path in modules) {
    // 分割路径字符串以获取图标名称
    const p = path.split('assets/icons/')[1].split('.svg')[0];
    // const p = path;
    // 确保p是字符串类型
    if (typeof p === 'string') {
        icons.push(p);
    }
}

export default icons;