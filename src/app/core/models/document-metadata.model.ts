import { DocumentType } from './document-type.enum';

export interface IDocumentMetadata {
  id: string;
  documentNumber: number;
  documentTitle: string;
  documentInitializer: string;
  documentType: DocumentType;
  dateOfDevelopment: Date;
  dateOfReceipt: Date;
  filePath: string;
}

export class DocumentMetadata {
  id: string;
  documentNumber: number;
  documentTitle: string;
  documentInitializer: string;
  documentType: DocumentType;
  dateOfDevelopment: Date;
  dateOfReceipt: Date;
  filePath: string;

  constructor(data?: IDocumentMetadata) {
    if (data) {
      this.fromJson(data);
    }
  }

  fromJson(data: IDocumentMetadata) {
    this.id = data.id;
    this.documentNumber = data.documentNumber;
    this.documentTitle = data.documentTitle;
    this.documentInitializer = data.documentInitializer;
    this.documentType = data.documentType;
    this.dateOfDevelopment = new Date(data.dateOfDevelopment);
    this.dateOfReceipt = new Date(data.dateOfReceipt);
    this.filePath = data.filePath;
  }

  toJson(): IDocumentMetadata {
    return {
      id: this.id,
      documentNumber: this.documentNumber,
      documentTitle: this.documentTitle,
      documentInitializer: this.documentInitializer,
      documentType: this.documentType,
      dateOfDevelopment: this.dateOfDevelopment,
      dateOfReceipt: this.dateOfReceipt,
      filePath: this.filePath
    };
  }

  fromFormData(formData: any) {
    this.fromJson(formData);
  }

  toFormData(): any {
    return this.toJson();
  }
}
