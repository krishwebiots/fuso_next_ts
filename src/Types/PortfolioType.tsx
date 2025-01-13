export interface PortfolioType {
    gridSize?: number;
    type?: string;
    cardShow?: number;
    sectionClass?: string;
  }

  export interface PortfolioBoxType {
    gridSize?: number;
    type?: string;
    activeTab?: string;
  }
  
  export interface PortfolioTitle {
    title?: string;
    image?: string;
    data?:string[];
    rightside?: boolean;
    darkmode?:boolean;
  }

  export interface PortfolioModernType {
    left: number;
    top: number;
    index: number | null;
  }