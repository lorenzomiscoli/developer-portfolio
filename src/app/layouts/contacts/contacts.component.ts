import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { CONTACTS_DEPS } from "./contacts.dependencies";
import { ContactsForm } from "./interfaces/contacts-form.interface";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
  standalone: true,
  imports: [CONTACTS_DEPS]
})
export class ContactsComponent implements OnInit {
  public form!: FormGroup<ContactsForm>;
  private submitAttempt = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', { nonNullable: true, validators: Validators.required }),
      email: new FormControl('', { nonNullable: true, validators: this.customEmailValidator }),
      message: new FormControl('', { nonNullable: true, validators: Validators.required })
    })
  }

  private customEmailValidator(control: AbstractControl): { [key: string]: any } | null {
    const emailError = Validators.email(control);
    if (control.value && emailError) {
      return { 'email': {} };
    } else if (!control.value) {
      return { 'email': {} };
    }
    return null;
  }

  public isFieldValid(field: string): boolean {
    return (!this.form.get(field)!.valid && this.form.get(field)!.touched) ||
      (this.form.get(field)!.untouched && this.submitAttempt);
  }

  public onSubmit(): void {
    this.submitAttempt = true;
    if (this.form.valid) {
      // Implement any email service you prefer.
      this.form.reset();
      this.submitAttempt = false;
    }
  }

}
