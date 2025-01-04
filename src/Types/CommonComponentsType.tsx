export interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  style?: object;
  height?: number;
  id?: string;
  title?: string;
  width?: number;
}

export interface CommonHeaderType {
  title: string;
  content?: string;
  animation?: boolean;
  headClass?: string;
  titleClass?: string;
  view?: boolean;
  subClass?: string;
  url?: string;
}

export interface SvgType {
  iconId: string | undefined;
  className?: string;
  style?: {
    height?: number;
    width?: number;
    fill?: string;
    marginRight?: number;
  };
  onClick?: () => void;
}

export interface RatioImageType {
  className?: string;
  src: string;
  alt: string;
  style?: { height: number };
}

export interface BreadcrumbsType {
  title: string;
  subTitle: string;
  url: string;
  mainclass?: string;
  image?:boolean;
}

export interface SearchModalType {
  type: string;
}

export interface MapModalType {
  type: string;
}

export interface CommonFileUploadProp {
  maxFiles?: number;
  multiple?: boolean;
  body?: boolean;
}

export interface BlogBoxType {
  title: string;
  author: string;
  date: string;
  views: string;
  summary: string;
  image: string;
  authorImage: string;
  fireBox?: boolean;
  masonry: string;
}

export interface BlogGridBoxType {
  data: BlogBoxType;
  type?: string;
  index?: number;
}

export interface BlogGridViewType {
  cardShow?: number;
  side?: string;
  gridSize?: number;
  type?: string;
  sectionClass?: string;
  topslider?: boolean;
}


