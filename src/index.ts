export interface CollectionInput {
  collection_name: string;
  icon: string | null;
}

export interface Collection extends CollectionInput {
  id: number;
  created_at: Date;
}

export type Collections = Collection[];


export interface ItemInput {
  collection_id: number;
  item_name: string;
}

export interface Item extends ItemInput {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export type Items = Item[];

export interface SingleItemDataInput {
  item_id: number;
  data_type: string;
  data_body: string;
}

export interface SingleItemData extends SingleItemDataInput {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export type ItemDataArray = SingleItemData[];

export type ItemDataType = "text" | "image" | "file";

export interface AppError extends Error {
  status?: number;
  code?: string;
  msg?: string;
}
