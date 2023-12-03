declare module "*.module.scss" {
  type IClasNames = Record<string, string>;

  const classNames: IClasNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}
