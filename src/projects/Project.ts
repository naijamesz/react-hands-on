export class Project {
  id: number | undefined; // number | undefined is a union type
  name: string = '';
  description: string = '';
  imageUrl: string = '';
  contractTypeId: number | undefined;
  contractSignedOn: Date = new Date(); // Date
  budget: number = 0;
  isActive: boolean = false;
  get isNew(): boolean {
    // getter isNew() method
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.descriptiopn) this.description = initializer.description;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.contractTypeId) this.contractTypeId = initializer.contractTypeId;
    if (initializer.contractSignedOn) this.contractSignedOn = new Date(initializer.contractSignedOn);
    if (initializer.budget) this.budget = initializer.budget;
    if (initializer.isActive) this.isActive = initializer.isActive;
  }
}
