<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-sm-12 first"><h1>WELCOME TO <br><p>Pharmacy System</p><span>stay home stay safe</span></h1></div>
            <div class="col-lg-6 col-sm-12 main">
                <h2>Create Account</h2><hr>
                <form [formGroup] ="registerForm"(ngSubmit)="register()">
                <input type="text" class="items" id="username" name = "uname" formControlName="uname"   placeholder="Username"><br>
                <div *ngIf="(this.registerForm.get('uname')?.touched || this.registerForm.get('uname')?.dirty)&& this.registerForm.get('uname')?.errors" class="errors">Invalid Username</div>
                <input type="text" class="items" id="password" name="pswd" formControlName ="pswd"  placeholder="Password"> <br>

                <div *ngIf="(this.registerForm.get('pwd')?.touched || this.registerForm.get('pwd')?.dirty)&& this.registerForm.get('pwd')?.errors" class="errors">Invalid Password</div>
                <button class="item"  >SUBMIT</button>
            </form>
            </div>
        </div>
    </div>
    
</body>
