import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginModel = new User();
  
  mensagem = "";
  contador = 0;

  onSubmit(){
    if(this.contador < 3){
      this.loginService.login(this.loginModel).subscribe((response) => {
        this.router.navigateByUrl('')
      }, (respostaErro) => {
        this.mensagem = respostaErro.error;
        alert(this.mensagem)
        this.contador++
      })
    }else{
      this.mensagem = "Tentativas esgotadas"
      alert(this.mensagem)
    }
  }
}
