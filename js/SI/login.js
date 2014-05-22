(function( doc ) {
    
    var formLogin = doc.getElementById( 'form-login' ),
        tbUsername = doc.getElementById( 'tb-username' ),
        tbPassword = doc.getElementById( 'tb-password' ),
        btnLogin = doc.getElementById( 'btn-login' ),
        statusLogin = doc.getElementById( 'status-login' );
    
    formLogin.addEventListener( 'submit', function( e ) {
        // validate the form
        forEachElement( formLogin.querySelectorAll( 'input' ), function( el ) {
            var v = trimString( this.value );
        });

        if ( tbUsername.value === '' || tbPassword.value === '' ) {
            statusLogin.innerHTML = '<p class="error">Both username and password are required.</p>';
                
            if ( tbUsername.value === '' ) {
                tbUsername.focus();
            }
            else {
                tbPassword.focus();
            }

            e.preventDefault();
        }
        else {
            statusLogin.innerHTML = '<p class="info">Attempting to login, please wait...</p>';
        }
    }, false );

    tbUsername.focus();

    if ( doc.URL.indexOf( '?lgnfail' ) !== -1 ) {
        statusLogin.innerHTML = '<p class="error">Login failed. Please try again.</p>';
    }
}( document) );