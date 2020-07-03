function(){
    document.getElementById('root').innerHTML = `
        <div class="form-login">
            <form id="login">
                <label for="username"> Username </label>
                <input type="text" id="username" name="username" />
                <label for="password"> Password </label>
                <input type="password" id="password" name="password" >
                <div style="padding: 10px 0;">
                    <button type="submit" class="btn">Login</button>
                    <button type="submit" class="btn">register</button>
                </div>
            </form>
        <div>
    `;
}