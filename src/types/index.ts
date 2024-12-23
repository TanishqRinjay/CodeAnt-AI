export interface Repository {
  name: string;
  language: string;
  size: string;
  visibility: 'Public' | 'Private';
  updatedAt: string;
}

export interface NavItem {
  label: string;
  icon: JSX.Element;
  href: string;
}