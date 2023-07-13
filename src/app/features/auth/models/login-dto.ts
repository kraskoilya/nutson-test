export interface LoginDto {
  data: TokenData;
}

export interface TokenData {
  refresh_token: string;
  access_token: string;
  user_id: number;
}
