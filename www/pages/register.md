---
layout : login
title: "register"
permalink: /register/
---
<dl>
    <div class="container">
    <div class="row">
        <div class="col-xs-12">
        <img src="../../images/guideme.png" class="logo_login" alt="">            
            <form id="register-form" class="form-signin">
                <input id="name" type="text" class="form-control" placeholder="Name"/>
                <br>
                <input id="about" type="text" class="form-control" placeholder="Description"/>
                <br>
                <input id="username" type="text" class="form-control" placeholder="Username"/>
                <br>
                <input id="password" type="password" class="form-control" placeholder="Password"/>
                <br>
                <input id="rgstr_btn" type="submit" name="register" value="Register" class="btn btn-default btn-block btn-custom margin-button_login " onClick="store()"/>
                <br>
                <a class="btn btn-default btn-block btn-custom margin-button_login font" href="javascript:history.back()">Back</a>
            </form>
        </div>
    </div>
</div>
</dl>