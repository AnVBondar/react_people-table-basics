export interface PersonType {
  name: string,
  sex: string,
  born: number,
  died: number,
  fatherName: string | null,
  motherName: string | null,
  slug: string,
  mother?: PersonType | null,
  father?: PersonType | null,
}
