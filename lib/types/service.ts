export interface Service {
  tittle: string;
  img: string;
  discription: string;
  link: string;
  button: string;
  whichside: string;
}
export interface SingleService {
  id: number;
  title: string;
  button: string;
  description: string;
  fullDescription: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  list?: string[];  
  discrip2?: string;
  discrip3?: string;

  imageUrl: string;
  whichside: string;
}
