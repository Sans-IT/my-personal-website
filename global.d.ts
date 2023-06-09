import { ReactElement } from "react";
import { JsxElement } from "typescript";

export declare global {
  interface navbarLink {
    name: string;
    value: string;
    hover: {
      color: string;
    };
  }

  interface EducationCard {
    name: string;
    time: string;
  }

  interface PortofolioProps {
    no: number;
    nama: string;
    gambar: string;
    deskripsi: string;
    URL: string;
    kategori: string;
  }

  interface TechStack {
    name: string;
    level: string;
    image_url: string;
  }

  interface ToolsUsed {
    name: string;
    used: string;
    image_url: string;
  }

  interface CertificateProps {
    name: string;
    title: string;
    body: string;
  }

  interface SosmedLink {
    icon: JsxElement<any>;
    link: string;
  }
}
