export interface ApiResponse {
  address_one: string;
  address_two: string;
  email: string;
  first_name: string;
  last_name: string;
  post_code: string;
  state: string;
  __v: number;
  _id: string;
}

export type DataStatuses = "success" | "error" | "loading";

export type AppState = {
  currentScreen: string;
  formData: ApiResponse | null;
  isLoading: boolean | null;
  status: DataStatuses | null;
  attempts: number;
};

export type Action =
  | { type: "SET_CURRENT_SCREEN"; payload: string }
  | { type: "SET_FORM_DATA"; payload: ApiResponse | null }
  | { type: "SET_IS_LOADING"; payload: boolean | null }
  | { type: "SET_STATUS"; payload: DataStatuses | null }
  | { type: "INCREMENT_ATTEMPTS" };
