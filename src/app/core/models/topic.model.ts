export interface Topic {
  id: number;
  type: string;
  by: string;
  time: number;
  score: number;
  title: string;
  url?: string;
  text?: string;
  deleted?: boolean;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  parts?: number[];
  descendants?: number;
}
