declare module '*.module.scss' {
  interface IClasNames {
    [className: string]: string
  }
  const classNames: IClasNames
  export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  import react from 'react'
  const svg: React.FC<React.SVGProps<SVGSVGElement>>
  export default svg
}
