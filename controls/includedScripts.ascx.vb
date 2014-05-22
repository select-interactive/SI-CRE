
Partial Class controls_includedScripts
    Inherits System.Web.UI.UserControl

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        If HttpContext.Current.User.Identity.IsAuthenticated AndAlso HttpContext.Current.User.IsInRole("admin") Then
            ltrlJS.Text = "<script>window.SIUser = window.SIUser || {};window.SIUser.admin=true;</script>"
        End If
    End Sub

End Class
