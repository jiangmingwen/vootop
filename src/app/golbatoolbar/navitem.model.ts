export interface NavItem {
  id?: number;
  open?: boolean;
  name?: string;
  icon?: string;
  path?: string;
  children?: Array<NavItem>;
}
