export interface CollectionInput {
    id: number;
    collection_name: string;
    icon: string | null;
}
export interface Collection extends CollectionInput {
    created_at: Date;
}
export type Collections = Collection[];
export interface ItemInput {
    id: number;
    collection_id: number;
    item_name: string;
}
export interface Item extends ItemInput {
    created_at: Date;
    updated_at: Date;
}
export type Items = Item[];
export interface SingleItemDataInput {
    id: number;
    item_id: number;
    data_type: string;
    data_body: string;
}
export interface SingleItemData extends SingleItemDataInput {
    created_at: Date;
    updated_at: Date;
}
export type ItemDataArray = SingleItemData[];
export type itemDataType = "text" | "image" | "file";
export interface AppError extends Error {
    status?: number;
    code?: string;
    msg?: string;
}
