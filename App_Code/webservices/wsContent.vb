Imports System.Web
Imports System.Web.Services
Imports System.Web.Services.Protocols
Imports System.Collections.Generic
Imports nsJSON
Imports SI_UTIL

<System.Web.Script.Services.ScriptService()> _
<WebService(Namespace:="http://tempuri.org/")> _
<WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)> _
<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Public Class wsContent
    Inherits System.Web.Services.WebService

    <WebMethod()> _
    Public Function saveModule(moduleId As Integer, html As String) As String
        Dim rsp As String = ""

        Try
            Dim ta As New dsContentTableAdapters.ModulesTableAdapter
            ta.Update(moduleId, html)

            rsp = "{""status"":""success""}"
        Catch ex As Exception
            rsp = "{""status"":""error"",""msg"":""" & ex.ToString & """}"
        End Try

        Return rsp
    End Function

    Private Function selectModules(moduleId As Integer, pageId As Integer) As dsContent.ModulesDataTable
        Dim dtModules As New dsContent.ModulesDataTable

        Try
            Dim ta As New dsContentTableAdapters.ModulesTableAdapter
            ta.Fill(dtModules, moduleId, pageId)
        Catch ex As Exception
            dtModules = Nothing
        End Try

        Return dtModules
    End Function

    <WebMethod()> _
    Public Function loadModuleHtml(moduleId As Integer) As String
        Dim html As New StringBuilder
        Dim dtModules As dsContent.ModulesDataTable = selectModules(moduleId, -1)

        If dtModules.Rows.Count > 0 Then
            Dim theModule As dsContent.ModulesRow = dtModules(0)
            Dim moduleHTML As String = theModule.Item("html")

            html.Append("<div class=""module"" data-module-id=""" & moduleId & """>" _
                      & moduleHTML _
                      & "</div>")
        End If

        Return html.ToString
    End Function


End Class