
Partial Class about_Default
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Dim contentWrapper As HtmlControl = Master.FindControl("contentWrapper")
        contentWrapper.Attributes("class") = "about"
    End Sub

End Class
