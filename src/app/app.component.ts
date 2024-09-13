import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Auth} from "./core/models/user/user.module";
import {AuthService} from "./core/services/auth.service";
import {FormsModule} from "@angular/forms";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title: string = 'Auth Clinic'

  login: Auth = { username: '', password: '' }

  constructor(public authService: AuthService, private router: Router) {
    console.log(environment.apiUrl)
  }

  onSubmit(): void {
    this.authService.authenticate(this.login).subscribe({
      next: (data: Auth | any) => {
        localStorage.setItem("token", data.token)
        this.router.navigateByUrl("/")
      }, error: error => console.log(error)
    })
  }
}
