export interface LoginPayLoad {
  installation_token: string;
  device: Device;
  application: Application;
}

export interface Device {
  platform: string;
  platform_version: string;
}

export interface Application {
  app_name: string;
  app_version: string;
  app_build: string;
  app_type: string;
}
