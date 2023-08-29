import { FormControl } from "@angular/forms";

export interface ContactsForm {
  name: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}
