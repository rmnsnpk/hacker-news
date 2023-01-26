export interface Topic {
  id: number;
  type: string;
  by: string;
  time: number;
  text: string;
  score: number;
  title: string;
  url?: string;
  deleted?: boolean;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  parts?: number[];
  descendants?: number;
}
