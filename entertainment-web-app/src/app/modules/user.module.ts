import { NgModule } from "@angular/core";
import { LoginComponent } from "../components/login/login.component";
import { SignupComponent } from "../components/signup/signup.component";
import { UserRoutes } from "./user.route";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],

    imports:[
        UserRoutes,ReactiveFormsModule,FormsModule, CommonModule
    ]
})

export class UserModule {}