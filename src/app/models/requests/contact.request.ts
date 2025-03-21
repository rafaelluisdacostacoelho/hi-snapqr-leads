
export interface ContactRequest {
  origin: string;
  action: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  interest: string;
  message?: string;
  subscribe: boolean;
}
