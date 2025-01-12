export interface Credentials {
  email: string;
  password: string;
}

export interface UserInfo {
  dni: string
  name: string
  email: string
  password: string
  rol: string
  id?: any
  isFirstLogin?: any
  status?: any
}


export interface resLoginUser {
  message: string
  token: string
  user: UserInfo
}

export interface CreateDriver {
  dni: string
  name: string
  email: string
  password: string
  phone: string
  address: string
  licencia: string
  type_licence: string,
  expiration_licence: string,
  rol: string
}
