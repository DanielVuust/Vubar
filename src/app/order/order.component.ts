import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  errorMessage: string | null = null;
  form: { name: string; email: string; phoneNumber: string; address: string; date: string; guestCount: string; comment: string; eventType: string } = {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    date: '',
    guestCount: '',
    comment: '',
    eventType: ''
  };
  group = new FormGroup({
    Email: new FormControl(this.form.name, [Validators.required, Validators.email]),
    PhoneNumber: new FormControl(this.form.phoneNumber, [Validators.required, Validators.pattern("^[0-9]|[+]*$")]),
    Name: new FormControl(this.form.name, [Validators.required]),
    Address: new FormControl(this.form.address, [Validators.required]),
    Date: new FormControl(this.form.date, [Validators.required]),
    GuestCount: new FormControl(this.form.guestCount, [Validators.required]),
    Comment: new FormControl(this.form.comment, []),
    EventType: new FormControl(this.form.eventType, [Validators.required]),
  })
  successMessage: string | null = null;
  constructor(private httpService: HttpService) { }
  submit(){
    if(this.group.invalid){
      this.errorMessage = "Udfyld venligst alle felterne"
      return;
    }
    console.log(this.group.value);
    this.httpService.post("https://vubarmailservice20231214211923.azurewebsites.net/api/MailSender", this.group.value).subscribe({
      next: (response) => {
        this.successMessage = "Tak for din henvendelse, vi vender tilbage hurtigst muligt";
      },
      error: (error) => {
        this.errorMessage = "Fejl kunne ikke sende"
      }
    });
  }
}
