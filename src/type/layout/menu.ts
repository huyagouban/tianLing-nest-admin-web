import type{RouterTree} from "@/type/common/routers"

export type menuItemType={
    item?:RouterTree,
}

export interface menuDefaultProp{
    isCollapse:boolean;
}