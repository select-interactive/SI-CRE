
Partial Class _Default
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Dim contentWrapper As HtmlControl = Master.FindControl("contentWrapper")
        contentWrapper.Attributes("class") = "home"

        Load_Page_Content()
    End Sub

    Private Sub Load_Page_Content()
        Dim ws As New wsContent

        ltrlModuleSlide1.Text = ws.loadModuleHtml(1)
        ltrlModuleSlide2.Text = ws.loadModuleHtml(2)
        ltrlModuleSlide3.Text = ws.loadModuleHtml(3)
        ltrlModuleExperience.Text = ws.loadModuleHtml(4)
        ltrlModuleDesign.Text = ws.loadModuleHtml(5)
        ltrlModuleEngineering.Text = ws.loadModuleHtml(6)
        ltrlModuleSummary.Text = ws.loadModuleHtml(7)
    End Sub

End Class
